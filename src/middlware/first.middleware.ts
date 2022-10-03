import { Injectable, NestMiddleware } from '@nestjs/common';
import { Logger } from '@nestjs/common/services';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class FirstMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const logger = new Logger(FirstMiddleware.name);
    logger.log(`
      IP : ${req.ip}
      Method: ${req.method}
      User Agent: ${req.get('user-agent')}
    `);
    next();
  }
}
