/* eslint-disable prettier/prettier */
import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { lengthMessageError } from 'src/helpers/error message/todo.validation-errors';
import { Owner } from '../Model/todo.model';
export class AddTodoDto {
  @IsString()
  @IsDefined()
  @MinLength(5, {
    message: lengthMessageError(true),
  })
  name: string;
  @IsString()
  @MinLength(5, {
    message: lengthMessageError(true),
  })
  @MaxLength(30, {
    message: lengthMessageError(false),
  })
  description: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  priority: number;

  @ValidateNested({each: true})
  @Type(() => Owner)
  owners: Owner[];
}
