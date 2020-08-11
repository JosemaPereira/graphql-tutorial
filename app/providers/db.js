import mongoose from 'mongoose';
import { defaultConfig } from '../providers/config.provider';

export const connectDB = async () => {
  try {
    const {
      mongo: { userName, database, pass },
    } = defaultConfig;
    await mongoose.connect(
      `mongodb+srv://${userName}:${pass}@cluster0.twa8o.mongodb.net/${database}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('>> DB Ready');
  } catch (ex) {
    console.log(`DB Connection Failed: ${ex}`);
  }
};
