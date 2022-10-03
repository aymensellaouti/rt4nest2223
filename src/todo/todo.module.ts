/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  controllers: [TodoController],
  providers: [
    {
      useValue: [{ lundi: 'nestJs' }, { mardi: 'Still NestJs' }],
      provide: 'TODOS_LIST',
    },
    TodoService,
  ],
  imports: [],
})
export class TodoModule {}