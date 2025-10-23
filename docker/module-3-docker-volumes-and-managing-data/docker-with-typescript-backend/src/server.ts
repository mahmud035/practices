import dotenv from 'dotenv';
import { Server } from 'http';
import app from './app.js';
import { errorLogger, logger } from './shared/logger.js';

dotenv.config();

let server: Server;

async function main() {
  try {
    server = app.listen(process.env.PORT, () => {
      logger.info(`App is listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    errorLogger.error(err);
  }
}

main();

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
  errorLogger.error('😈 Unhandled Rejection is detected, shutting down...');
  errorLogger.error(reason);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  errorLogger.error('😈 uncaughtException is detected, shutting down...');
  errorLogger.error(err);
  process.exit(1);
});
