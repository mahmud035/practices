import mongoose from 'mongoose';
import app from './app';
import config from './config';

async function bootstrap(): Promise<void> {
  try {
    await mongoose.connect(config.mongoUri);
    console.log('✓ MongoDB connected');

    app.listen(config.port, () => {
      console.log(`✓ Server listening on http://localhost:${config.port}`);
      console.log(`  env: ${config.nodeEnv}`);
    });
  } catch (err) {
    console.error('✗ Bootstrap failed:', err);
    process.exit(1);
  }
}

bootstrap();
