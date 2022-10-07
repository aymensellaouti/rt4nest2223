import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { LoggerService } from "../services/logger.service";
import { SayHelloService } from "../services/say-hello/say-hello.service";

@Module({
  controllers: [FirstController],
  providers: [LoggerService, SayHelloService],
  exports: [LoggerService]
})
export class FirstModule {}
