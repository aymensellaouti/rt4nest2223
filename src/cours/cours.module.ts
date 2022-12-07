import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoursService } from './cours.service';
import { CoursController } from './cours.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cour } from './entities/cour.entity';
import { FourthMiddleware } from '../middlewares/fourth.middleware';
import { ThirdMiddleware } from '../middlewares/third.middleware';
import { logger } from 'src/middlewares/second.middleware';

@Module({
  controllers: [CoursController],
  providers: [CoursService],
  imports: [TypeOrmModule.forFeature([Cour])],
})
export class CoursModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FourthMiddleware)
      .forRoutes('')
      .apply(logger)
      .forRoutes('');
  }
}
