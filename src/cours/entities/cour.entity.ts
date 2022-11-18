import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FirstEntity } from './../../first/entity/first.entity';

@Entity()
export class Cour {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  designation: string;

  @ManyToOne(
    (Type) => FirstEntity,
    (enseignant: FirstEntity) => enseignant.cours,
    {} 
  )
  enseignant: FirstEntity;
}
