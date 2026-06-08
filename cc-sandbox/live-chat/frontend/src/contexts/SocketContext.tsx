import { createContext, ReactNode, useContext } from 'react';
import type { Socket } from 'socket.io-client';
import socket from '../lib/socket';
import type { ClientToServerEvents, ServerToClientEvents } from '../features/chat/types/chat.types';

type AppSocket = Socket<ServerToClientEvents, ClientToServerEvents>;

const SocketContext = createContext<AppSocket | null>(null);

export const SocketProvider = ({ children }: { children: ReactNode }) => (
  <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
);

export const useSocketContext = (): AppSocket => {
  const ctx = useContext(SocketContext);
  if (!ctx) throw new Error('useSocketContext must be used within <SocketProvider>');
  return ctx;
};
