import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCourDto } from './dto/create-cour.dto';
import { UpdateCourDto } from './dto/update-cour.dto';
import { Repository, UpdateResult } from "typeorm";
import { Cour } from "./entities/cour.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CrudService } from "../common/service/crud.Service";

@Injectable()
export class CoursService extends CrudService<Cour>{
  constructor(
    @InjectRepository(Cour)
    private courRepository: Repository<Cour>
  ) {
    super(courRepository);
  }
}
