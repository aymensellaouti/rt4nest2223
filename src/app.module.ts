import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';
import { FirstModule } from './first/first.module';
import { TestModule } from './test/test.module';
@Module({
  imports: [CommonModule, TodoModule, FirstModule, TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
