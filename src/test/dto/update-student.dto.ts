import { PartialType } from "@nestjs/mapped-types";

import { AddStudentDto } from "./add-student.dto";

export class UpdateStudentDto extends PartialType(AddStudentDto){
  nbJours: number;
}

