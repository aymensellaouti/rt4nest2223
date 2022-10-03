/* eslint-disable prettier/prettier */
import { TodoStatusEnum } from '../Model/todo.model';
import { AddTodoDto } from './add-todo.dto';
import { PartialType } from '@nestjs/mapped-types';
import { IsEnum, IsOptional } from 'class-validator';
export class UpdateTodoDto extends PartialType(AddTodoDto) {
  @IsEnum(TodoStatusEnum)
  @IsOptional()
  status: TodoStatusEnum;
}
