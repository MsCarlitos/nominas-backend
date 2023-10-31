import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NominasService } from './nominas.service';
import { NominasController } from './nominas.controller';
import { Nomina } from './entities/nomina.entity';
import { EmpleadosService } from '../empleados/empleados.service';
import { EmpleadosModule } from 'src/empleados/empleados.module';

@Module({
  controllers: [NominasController],
  providers: [NominasService, EmpleadosService],
  imports: [TypeOrmModule.forFeature([Nomina]), EmpleadosModule],
  exports: [NominasService, TypeOrmModule],
})
export class NominasModule {}
