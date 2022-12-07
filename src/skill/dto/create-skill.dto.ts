import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSkillDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  designation: string;
}
