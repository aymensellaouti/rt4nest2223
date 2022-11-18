import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { SkillService } from "../skill/skill.service";
import { Skill } from "../skill/entities/skill.entity";
import {randSkill} from '@ngneat/falso';
async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
// Todo :  Do What you want
  const skillService = app.get(SkillService);
  for (let i=0; i < 50; i++) {
    const skill = new Skill();
    skill.designation = randSkill();
    await skillService.create(skill);
  }
  await app.close();
}


bootstrap();
