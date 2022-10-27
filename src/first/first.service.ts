import { Injectable } from '@nestjs/common';
import { Repository } from "typeorm";
import { FirstEntity } from "./entity/first.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class FirstService {
  constructor(
    @InjectRepository(FirstEntity)
    private readonly firstRepository: Repository<FirstEntity>
  ) {}

  findAll() {
    const qb = this.firstRepository.createQueryBuilder('f');

    return qb.getMany();
  }
}
