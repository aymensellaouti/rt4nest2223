import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Put,
  Req,
} from '@nestjs/common';
import { Todo } from './Model/todo.model';
import { Request } from 'express';
import { AddTodoDto } from './dto/add-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { FreezePipe } from '../pipes/freeze.pipe';
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get('')
  getTodos(@Req() request: Request): Todo[] {
    return this.todoService.getTodos();
  }
  @Get(':id')
  findTodoById(@Param('id') id: string): Todo {
    return this.todoService.findTodoById(id);
  }
  @Post('')
  addTodo(@Body() partialTodo: AddTodoDto): Todo {
    return this.todoService.addTodo(partialTodo);
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string) {
    return this.todoService.deleteTodo(id);
  }

  @Put(':id')
  updateTodo(
    @Param('id') id: string,
    @Body() partialTodo: UpdateTodoDto,
  ): Todo {
    return this.todoService.updateTodo(id, partialTodo);
  }
}
