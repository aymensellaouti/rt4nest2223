/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { TestModule } from './test/test.module';
import { CommonModule } from './common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileModule } from './profile/profile.module';
import { CoursModule } from './cours/cours.module';
import { SkillModule } from './skill/skill.module';

@Module({
  imports: [
    FirstModule,
    TestModule,
    CommonModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'rt42223',
      autoLoadEntities: true,
      // entities: [FirstEntity],
      synchronize: true,
      logging: true,
    }),
    ProfileModule,
    CoursModule,
    SkillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
