import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL!);
    const connection = mongoose.connection;

    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    connection.on('error', (error) => {
      console.log(
        `MongoDB connection error. Please make sure MongoDB is running. ${error}`
      );
      process.exit();
    });
  } catch (error) {
    console.log('Something went wrong');
    console.log(error);
  }
};

// dbConnect();
