import { Server } from 'http';
import app from './app.js';

let server: Server;

async function main() {
  try {
    server = app.listen(5000, () => {
      console.log('App is listing on port 5000');
    });
  } catch (error) {
    console.log(error);
  }
}

main();

process.on('unhandledRejection', (reason: Error) => {
  console.log(
    `😈 Unhandled Rejection is detected, shutting down the server ...`,
    reason
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', (error: Error) => {
  console.log(
    `😈 Uncaught Exception is detected, shutting down the server ...`,
    error
  );
  process.exit(1);
});
