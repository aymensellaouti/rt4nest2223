import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cour } from "../../cours/entities/cour.entity";

@Entity()
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  designation: string;

  @ManyToMany(
    () => Skill,
  )
  @JoinTable({
    name: 'cour_skill',
    joinColumn: {
      name: 'cour',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'skill',
      referencedColumnName: 'id'
    }
  })
  cours: Cour[];
}
