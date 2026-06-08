import { useEffect, useRef } from 'react';
import { useSocketContext } from '../contexts/SocketContext';
import type { ServerToClientEvents } from '../features/chat/types/chat.types';

// Registers a Socket.io event listener and cleans it up on unmount.
// Uses a ref so the latest handler is always called without the effect
// re-running on every render.
const useSocket = <E extends keyof ServerToClientEvents>(
  event: E,
  handler: ServerToClientEvents[E]
): void => {
  const socket = useSocketContext();
  const handlerRef = useRef(handler);
  handlerRef.current = handler;

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const s = socket as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listener = (...args: any[]) => (handlerRef.current as any)(...args);
    s.on(event, listener);
    return () => s.off(event, listener);
  }, [socket, event]); // handler omitted — handlerRef keeps it fresh
};

export default useSocket;
