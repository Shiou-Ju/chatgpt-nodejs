import * as dotenv from 'dotenv';
import { logger } from '..';

dotenv.config();

const { NODE_ENV, PORT, MONGO_URL, JWT_SECRET, OPENAI_API_KEY } = process.env;

if (!MONGO_URL || !JWT_SECRET || !NODE_ENV || !OPENAI_API_KEY) {
  logger.error(
    'Must provide env: MONGO_URL, JWT_SECRET , NODE_ENV, OPENAI_API_KEY'
  );
  process.exit();
}

export const mongoUrl = MONGO_URL;
export const port = PORT || 5000;
export const jwtSecret = JWT_SECRET;
export const nodeEnv = NODE_ENV;
export const openAIKey = OPENAI_API_KEY;
