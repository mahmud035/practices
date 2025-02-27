import cors from 'cors';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Frontend URL,
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

io.on('connection', (socket) => {
  console.log('User connected', socket.id);

  socket.on('send_message', (data) => {
    io.emit('receive_message', data); // Broadcast message to all users
  });

  socket.on('disconnect', () => console.log('User disconnected', socket.id));
});

server.listen(5000, () => console.log('Chat server running on port 5000'));
