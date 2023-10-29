import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'nomina' })
export class Nomina {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { unique: true })
  numeroEmpleado: number;

  @Column('text')
  mes: string;

  @Column('int')
  bonoPorHora: number;

  @Column('int')
  entregas: number;

  @Column('int')
  retencionISR: number;

  @Column('int')
  retencionAdicional: number;

  @Column('int')
  valeDeDespensa: number;

  @ManyToOne(() => Empleado, (empleado) => empleado.nomina, {
    onDelete: 'CASCADE',
  })
  empleado: Empleado;
}
