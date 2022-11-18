import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { CrudService } from "../common/service/crud.Service";
import { Skill } from "./entities/skill.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class SkillService extends CrudService<Skill>{
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>
  ) {
    super(skillRepository);
  }
}
