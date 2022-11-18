/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cour } from '../../cours/entities/cour.entity';

@Entity('first')
export class FirstEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  age: number;
  @OneToMany(() => Cour, (cour: Cour) => cour.enseignant, {})
  cours: Cour[];
}
