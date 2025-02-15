import { Db, MongoClient } from 'mongodb';
import app from './app';
import config from './config';

//* MongoDB Connection
const uri = (config.database_uri as string) || 'mongodb://localhost:27017/';
const client = new MongoClient(uri);
const dbName = config.database_name;

let database: Db;
let server;

export const dbConnect = async () => {
  try {
    await client.connect(); // 👈 For production, comment out this line
    database = client.db(dbName);

    console.log(`Connected to MongoDB database: ${dbName}`);
    server = app.listen(config.port, () =>
      console.log(`Server is running on http://localhost:${config.port}`)
    );
  } catch (error) {
    console.error('Connection error:', error);
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
