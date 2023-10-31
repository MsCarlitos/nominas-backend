import { ApiProperty } from '@nestjs/swagger';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'nomina' })
export class Nomina {
  @ApiProperty({
    description: 'Nomina ID',
    example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Numero de empleado',
    example: '123',
  })
  @Column('int')
  numeroEmpleado: number;

  @ApiProperty({
    description: 'Mes en el que se crea la nomina',
    example: 'Diciembre',
  })
  @Column('text')
  mes: string;

  @ApiProperty({
    description: 'Bono que recibe por hora trabajada',
    example: '$5.00',
  })
  @Column('int')
  bonoPorHora: number;

  @ApiProperty({
    description: 'Cantidad de entregas',
    example: '5',
  })
  @Column('int')
  entregas: number;

  @ApiProperty({
    description: 'Retencion de impuesto sobre la renta',
    example: '0.09 o 9%',
  })
  @Column('float')
  retencionISR: number;

  @ApiProperty({
    description: 'Retencion extra solo si sobrepasa los $10,000',
    example: '0.03 o 3%',
  })
  @Column('float')
  retencionAdicional: number;

  @ApiProperty({
    description: 'Vales de despensa sobre el sueldo.',
    example: '0.04 o 4%',
  })
  @Column('float')
  valeDeDespensa: number;

  @ApiProperty({
    description: 'Sueldo antes de impuestos',
    example: '$5,000',
  })
  @Column('float')
  sueldoNeto: number;

  @ApiProperty({
    description: 'Sueldo despues de los impuestos.',
    example: '$4,000',
  })
  @Column('float')
  sueldoTotal: number;

  @ApiProperty({
    description: 'Cantidad de horas trabajadas',
    example: '192',
  })
  @Column('int')
  horasTrabajadas: number;

  @ManyToOne(() => Empleado, (empleado) => empleado.nomina, {
    onDelete: 'CASCADE',
  })
  empleado: Empleado;
}
