import { Server } from 'http';
import { Db, MongoClient } from 'mongodb';
import app from './app';
import config from './config';
import { errorLogger, logger } from './shared/logger';

//* MongoDB Connection
const uri = config.database_uri as string;
const client = new MongoClient(uri);
const dbName = config.database_name;

let database: Db;
let server: Server;

export const dbConnect = async () => {
  try {
    await client.connect(); // 👈 For production, comment out this line
    database = client.db(dbName);

    logger.info(`✅ Connected to MongoDB database: ${dbName}`);
    server = app.listen(config.port, () =>
      logger.info(`🚀 Server is running on http://localhost:${config.port}`)
    );
  } catch (error) {
    errorLogger.error('❌ Failed to connect to database:', error);
    process.exit(1);
  }
};

//* Initialize MongoDB
(async () => {
  await dbConnect();
})();

export const getDatabase = () => {
  if (!database) throw new Error('Database not initialized!');
  return database;
};

//* MongoDB Collections
export const getCollections = () => {
  const db = getDatabase();
  const todos = db.collection('todos');
  const users = db.collection('users');
  const posts = db.collection('posts');
  const coffees = db.collection('coffees');
  const products = db.collection('products');

  return { todos, users, posts, coffees, products };
};

// Graceful Shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    logger.info('HTTP server closed');
  });
});
