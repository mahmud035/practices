import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const config = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT) || 5000,
  mongoUri: process.env.MONGODB_URI ?? '',
};

if (!config.mongoUri) {
  throw new Error('MONGODB_URI is required in .env');
}

export default config;
