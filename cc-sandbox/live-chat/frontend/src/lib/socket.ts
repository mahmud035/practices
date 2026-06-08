import { io, Socket } from 'socket.io-client';
import type { ClientToServerEvents, ServerToClientEvents } from '../features/chat/types/chat.types';

// Single instance for the app lifetime. autoConnect: false — the connection is
// opened explicitly when the user joins a room (LobbyPage onSubmit), not on import.
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  import.meta.env.VITE_SERVER_URL ?? 'http://localhost:5000',
  { autoConnect: false }
);

export default socket;
