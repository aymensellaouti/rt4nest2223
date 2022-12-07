import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ThirdMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('In third middlware');
    next();
  }
}
