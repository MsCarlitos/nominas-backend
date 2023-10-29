import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Nomina } from 'src/nominas/entities/nomina.entity';

@Entity({ name: 'empleado' })
export class Empleado {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  nombre: string;

  @Column('int', { unique: true })
  numeroEmpleado: number;

  @Column('text')
  rol: string;

  @Column('int')
  sueldoPorHora: number;

  @OneToMany(() => Nomina, (nomina) => nomina.empleado, {
    cascade: true,
    eager: true,
  })
  nomina: Nomina[];
}
