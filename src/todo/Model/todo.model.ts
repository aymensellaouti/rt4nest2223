/* eslint-disable prettier/prettier */

import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export enum TodoStatusEnum {
  'actif' = 'En cours',
  'waiting' = 'En attente',
  'done' = 'Finalisé',
}
export class Todo {
  constructor(
    public id: string = '',
    public name: string = '',
    public description: string = '',
    public priority = 0,
    public createdAt = new Date(),
    public status: TodoStatusEnum = TodoStatusEnum.actif,
  ) {}
}

export class Owner {
  @IsString()
  name: 'string';
  @IsNumber()
  @Type(() => Number)
  age: number;
}
