import { Injectable } from '@nestjs/common';
import { LoggerService } from "../logger.service";

@Injectable()
export class SayHelloService {
  constructor(private loggerService: LoggerService) {
  }
  hello() {
    this.loggerService.logger('Hello tout le monde :)');
  }
}
