import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class TimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const dateIn = new Date();
    return next.handle().pipe(
      tap(() => {
        console.log(
          `Duration of the request is : ${
            new Date().getMilliseconds() - dateIn.getMilliseconds()
          } ms`,
        );
      }),
      map((data) => ({
        data,
      })),
    );
  }
}
