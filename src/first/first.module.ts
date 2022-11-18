import { Module } from '@nestjs/common';
import { FirstController } from './first.controller';
import { LoggerService } from '../services/logger.service';
import { SayHelloService } from '../services/say-hello/say-hello.service';
import { FirstService } from './first.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FirstEntity } from './entity/first.entity';

@Module({
  controllers: [FirstController],
  providers: [LoggerService, SayHelloService, FirstService],
  exports: [LoggerService],
  imports: [TypeOrmModule.forFeature([FirstEntity])],
})
export class FirstModule {}
