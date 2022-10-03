import { Controller } from '@nestjs/common';
import { Get, Post, Body } from '@nestjs/common/decorators';
import { Observable } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { FreezePipe } from '../pipes/freeze.pipe';

@Controller('test')
export class TestController {
  observable = new Observable<number>((observer) => {
    observer.next(3);
  });

  @Get('')
  test() {
    return this.observable.pipe(
      map((x) => 3 * x),
      throttleTime(25),
    );
  }
  @Post('')
  testFreeze(@Body(FreezePipe) data: any) {
    /* data.newStaff = 'cc'; */
    console.log('test freeze', data);
    return data;
  }
}
