/* eslint-disable prettier/prettier */
import { Request, Response } from 'express';

export function logger(req: Request, res: Response, next: () => void) {
  console.log('in second middleware');
  next();
}
