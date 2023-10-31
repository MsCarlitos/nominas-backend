import { IsIn, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  nombre: string;

  @IsIn(['Auxiliar', 'Chofer', 'Cargador'])
  rol: string;

  @IsInt()
  @IsOptional()
  sueldoPorHora: number;
}
