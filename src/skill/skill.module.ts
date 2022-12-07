import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Skill } from "./entities/skill.entity";
import { ThirdMiddleware } from '../middlewares/third.middleware';

@Module({
  controllers: [SkillController],
  providers: [SkillService],
  imports: [TypeOrmModule.forFeature([Skill])]
})
export class SkillModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ThirdMiddleware).forRoutes('');
  }
}
