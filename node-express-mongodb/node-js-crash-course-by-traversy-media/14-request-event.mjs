import { createServer } from 'http';

// Normal way
// const server = createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = createServer();

// emits request event
// subscribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(5000);
