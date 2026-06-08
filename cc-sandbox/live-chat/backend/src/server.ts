import dotenv from 'dotenv';
dotenv.config();

import { createServer } from 'http';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import app from './app';
import { ClientToServerEvents, ServerToClientEvents, initializeSocket } from './app/socket';

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/live-chat';

const httpServer = createServer(app);

const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
  cors: {
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

initializeSocket(io);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    httpServer.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  });

export { httpServer, io };
