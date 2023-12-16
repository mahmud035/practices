import mongoose from 'mongoose';

let isConnected = false; // track the connection

const dbConnect = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  console.log(process.env.MONGODB_URI);

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
