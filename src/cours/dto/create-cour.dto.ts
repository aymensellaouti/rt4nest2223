import { IsNotEmpty, MinLength } from "class-validator";

export class CreateCourDto {
  @IsNotEmpty()
  @MinLength(4)
  designation: string;
}
