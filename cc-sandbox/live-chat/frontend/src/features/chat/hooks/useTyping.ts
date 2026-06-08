import { useCallback, useRef, useState } from 'react';
import { useSocketContext } from '../../../contexts/SocketContext';
import useSocket from '../../../hooks/useSocket';

const STOP_TYPING_DELAY = 2000;

const useTyping = () => {
  const socket = useSocketContext();
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useSocket('typing', ({ username }) => {
    setTypingUsers((prev) => (prev.includes(username) ? prev : [...prev, username]));
  });

  useSocket('stop-typing', ({ username }) => {
    setTypingUsers((prev) => prev.filter((u) => u !== username));
  });

  // Emits typing, then auto-fires stop-typing after 2 s of inactivity
  const emitTyping = useCallback(() => {
    socket.emit('typing');
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      socket.emit('stop-typing');
    }, STOP_TYPING_DELAY);
  }, [socket]);

  return { typingUsers, emitTyping };
};

export default useTyping;
