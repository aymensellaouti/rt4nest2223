import { Controller, Put } from "@nestjs/common";
import { Get, Post, Body } from '@nestjs/common/decorators';
import { Observable } from 'rxjs';
import { map, throttleTime } from 'rxjs/operators';
import { LoggerService } from "../services/logger.service";

@Controller('test')
export class TestController {
  observable = new Observable<number>((observer) => {
    observer.next(3);
  });
  constructor(private loggerService: LoggerService) {
  }

  @Get('')
  test() {
    return this.observable.pipe(
      map((x) => 3 * x),
      throttleTime(25),
    );
  }
  @Post('add')
  addStudent() {
    this.loggerService.logger('add Student');
  }
  @Put()
  updateStudent() {}
}
