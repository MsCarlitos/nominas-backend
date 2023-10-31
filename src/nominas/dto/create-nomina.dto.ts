import {
  IsDecimal,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateNominaDto {
  @IsInt()
  numeroEmpleado: number;

  @IsString()
  @IsIn([
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ])
  mes: string;

  @IsInt()
  @IsOptional()
  bonoPorHora: number;

  @IsInt()
  entregas: number;

  @IsDecimal()
  @IsOptional()
  retencionISR: number;

  @IsDecimal()
  @IsOptional()
  retencionAdicional: number;

  @IsNumber()
  @IsOptional()
  valeDeDespensa: number;

  @IsInt()
  @IsOptional()
  sueldoNeto: number;

  @IsNumber()
  @IsOptional()
  sueldoTotal: number;

  @IsInt()
  @IsOptional()
  horasTrabajadas: number;
}
