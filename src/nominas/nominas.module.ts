import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NominasService } from './nominas.service';
import { NominasController } from './nominas.controller';
import { Nomina } from './entities/nomina.entity';

@Module({
  controllers: [NominasController],
  providers: [NominasService],
  imports: [TypeOrmModule.forFeature([Nomina]), NominasModule],
})
export class NominasModule {}
