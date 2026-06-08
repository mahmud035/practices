import { Server, Socket } from 'socket.io';
import { IMessageDocument, ROOMS, TRoom } from '../modules/messages/message.interface';
import { messageService } from '../modules/messages/message.service';

export interface ServerToClientEvents {
  'receive-message': (msg: IMessageDocument) => void;
  'user-joined': (data: { username: string; room: string; message: IMessageDocument }) => void;
  'user-left': (data: { username: string; room: string; message: IMessageDocument }) => void;
  'room-users': (usernames: string[]) => void;
  typing: (data: { username: string }) => void;
  'stop-typing': (data: { username: string }) => void;
}

export interface ClientToServerEvents {
  'join-room': (data: { username: string; room: string }) => void;
  'send-message': (data: { content: string }) => void;
  typing: () => void;
  'stop-typing': () => void;
  'leave-room': () => void;
}

type AppServer = Server<ClientToServerEvents, ServerToClientEvents>;
type AppSocket = Socket<ClientToServerEvents, ServerToClientEvents>;

// socketId → { username, room }
const users = new Map<string, { username: string; room: TRoom }>();

const getUsersInRoom = (room: TRoom): string[] =>
  Array.from(users.values())
    .filter((u) => u.room === room)
    .map((u) => u.username);

const handleUserLeave = async (socket: AppSocket, io: AppServer): Promise<void> => {
  const user = users.get(socket.id);
  if (!user) return;

  const { username, room } = user;
  users.delete(socket.id);
  socket.leave(room);

  try {
    const systemMsg = await messageService.save({
      room,
      username,
      content: `${username} left`,
      type: 'system',
    });
    socket.to(room).emit('user-left', { username, room, message: systemMsg });
    io.to(room).emit('room-users', getUsersInRoom(room));
  } catch (err) {
    console.error('[socket] leave error:', err);
  }
};

export const initializeSocket = (io: AppServer): void => {
  io.on('connection', (socket: AppSocket) => {
    console.log(`[socket] connected: ${socket.id}`);

    socket.on('join-room', async ({ username, room }) => {
      // Clean up any existing room membership before joining a new one
      const existing = users.get(socket.id);
      if (existing) await handleUserLeave(socket, io);

      if (!ROOMS.includes(room as TRoom)) return;

      users.set(socket.id, { username, room: room as TRoom });
      socket.join(room);

      try {
        const systemMsg = await messageService.save({
          room: room as TRoom,
          username,
          content: `${username} joined`,
          type: 'system',
        });
        // Notify others in the room
        socket.to(room).emit('user-joined', { username, room, message: systemMsg });
        // Push updated user list to everyone in the room (including new joiner)
        io.to(room).emit('room-users', getUsersInRoom(room as TRoom));
      } catch (err) {
        console.error('[socket] join-room error:', err);
      }
    });

    socket.on('send-message', async ({ content }) => {
      const user = users.get(socket.id);
      if (!user) return;

      const { username, room } = user;
      try {
        const message = await messageService.save({ room, username, content, type: 'message' });
        // Broadcast to the whole room so sender receives the DB-confirmed doc
        io.to(room).emit('receive-message', message);
      } catch (err) {
        console.error('[socket] send-message error:', err);
      }
    });

    socket.on('typing', () => {
      const user = users.get(socket.id);
      if (!user) return;
      socket.to(user.room).emit('typing', { username: user.username });
    });

    socket.on('stop-typing', () => {
      const user = users.get(socket.id);
      if (!user) return;
      socket.to(user.room).emit('stop-typing', { username: user.username });
    });

    socket.on('leave-room', async () => {
      await handleUserLeave(socket, io);
    });

    socket.on('disconnect', async () => {
      console.log(`[socket] disconnected: ${socket.id}`);
      await handleUserLeave(socket, io);
    });
  });
};
