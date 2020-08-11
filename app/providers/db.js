import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/graphql', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('>> DB Ready');
  } catch (ex) {
    console.log(`DB Connection Failed: ${ex}`);
  }
};
