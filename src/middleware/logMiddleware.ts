import { RequestHandler } from 'express';
import { logger } from '..';

export const logMiddleware: RequestHandler = async (req, _res, next) => {
  logger.info(req.path);

  return next();
};
