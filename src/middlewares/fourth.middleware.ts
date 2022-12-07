import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class FourthMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Fourth middleware');
    next();
  }
}
