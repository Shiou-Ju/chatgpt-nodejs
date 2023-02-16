import mongoose, { Error as MongooseError } from 'mongoose';
import { logger } from '..';
import { mongoUrl } from './Env';

export const mongoConnection = async () => {
  try {
    const connectionResult = await mongoose.connect(mongoUrl);
    logger.info(`mongo connected at ${connectionResult.connection.host}`);
  } catch (error) {
    if (error instanceof MongooseError) {
      logger.error(error.message);
      process.exit();
    }
  }
};
