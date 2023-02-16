import { ErrorRequestHandler } from 'express';
import httpStatus from 'http-status';
import { Error as ClassMongooseError } from 'mongoose';
import { logger } from '..';
import { nodeEnv } from '../config/Env';
import { CustomErrorContent } from '../interfaces/CustomError';

export const errorHandler: ErrorRequestHandler = (err, _req, res, next) => {
  logger.warn(errorHandler.name);

  if (err instanceof ClassMongooseError) {
    if (err.name === 'CastError') {
      logger.warn(err.message);
      err.message = 'Invalid Id';
    }

    if (err.name === 'ValidationError') {
      // "UserPost validation failed: fullAddress: Path `fullAddress` is required., userPostType: `dwelveExperience1` is not a valid enum value for path `userPostType`.",
      logger.warn(err.message);
      err.message = '有欄位為必填或不符合選項';
    }

    res.status(httpStatus.BAD_REQUEST);
  }

  const status = res.statusCode || httpStatus.INTERNAL_SERVER_ERROR;

  res.status(status);

  const isDefaultError = err instanceof Error;

  const isDevEnvironment = ['development', 'local'].includes(nodeEnv);

  const errorContent: CustomErrorContent = {
    message: isDefaultError ? err.message : JSON.stringify(err),
    stack: !isDevEnvironment
      ? undefined
      : isDefaultError
      ? err.stack
      : 'Supposed stack:\n' + JSON.stringify(err),
  };

  logger.warn(`errorContent exports: ${errorContent.message}`);

  res.json(errorContent);
  next();
};
