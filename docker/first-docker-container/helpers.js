const connectToDatabase = () => {
  const dummyPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Connected to database');
    }, 1000);
  });

  return dummyPromise;
};

export default connectToDatabase;
