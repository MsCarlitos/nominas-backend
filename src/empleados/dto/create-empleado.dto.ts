import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  nombre: string;

  @IsInt()
  @IsOptional()
  numeroEmpleado: number;

  @IsIn(['Auxiliar', 'Choferes', 'Cargadores'])
  rol: string;

  @IsInt()
  @IsOptional()
  sueldoPorHora: number;
}
