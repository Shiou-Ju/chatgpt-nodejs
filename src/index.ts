import express from 'express';
// import { v4 as uuidv4 } from 'uuid';
import cors from 'cors';
import pino from 'pino-http';
export const { logger } = pino();
import { errorHandler } from './middleware/errorHandler';
import { port } from './config/Env';
import { mongoConnection } from './config/mongo';
import { logMiddleware } from './middleware/logMiddleware';
import { example } from './controllers/gpt';

mongoConnection();

const app = express();

const corsOptions = {
  origin: [
    // for all ports on localhost
    new RegExp(/http:\/\/localhost(:\d+)?$/),
  ],
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logMiddleware);

example();

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`dont rent server running on ${port}`);
});
