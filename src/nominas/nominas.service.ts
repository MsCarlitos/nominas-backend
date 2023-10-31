import { Injectable, Logger } from '@nestjs/common';
import { CreateNominaDto } from './dto/create-nomina.dto';
import { UpdateNominaDto } from './dto/update-nomina.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Nomina } from './entities/nomina.entity';
import { Repository } from 'typeorm';
import { EmpleadosService } from '../empleados/empleados.service';

@Injectable()
export class NominasService {
  private readonly logger = new Logger();

  constructor(
    private readonly empleadosService: EmpleadosService,
    @InjectRepository(Nomina)
    private readonly nominaRepository: Repository<Nomina>,
  ) {}

  async create(createNominaDto: CreateNominaDto) {
    const jornadaDia = 8;
    const diasTrabajo = 6;
    const valorEntrega = 5;
    const semanaTrabajo = 4;
    const retencionISR = 0.09;

    let retencionAdicional = 0;
    let horasTrabajadas = 0;

    let bonoPorHora: number;
    let sueldoTotal: number;
    let sueldoSubtotal: number;
    let valeDeDespensa: number;

    const { numeroEmpleado, ...rest } = createNominaDto;
    const empleado = await this.empleadosService.findOne(numeroEmpleado);
    const entregasTotal = rest.entregas * valorEntrega;

    horasTrabajadas = jornadaDia * diasTrabajo * semanaTrabajo;

    let sueldoNeto = empleado.sueldoPorHora * horasTrabajadas + entregasTotal;

    console.log('si');
    if (empleado.rol === 'Cargador') {
      bonoPorHora = horasTrabajadas * 5;
      sueldoNeto = sueldoNeto + bonoPorHora;
    }
    if (empleado.rol === 'Chofer') {
      bonoPorHora = horasTrabajadas * 10;
      sueldoNeto = sueldoNeto + bonoPorHora;
    }

    if (sueldoNeto < 10000) {
      const retencion = retencionISR;
      sueldoSubtotal = sueldoNeto * retencion;
      sueldoTotal = sueldoNeto - sueldoSubtotal;
      valeDeDespensa = sueldoTotal * 0.04;
    } else {
      retencionAdicional = retencionAdicional + 0.03;
      const retencion = retencionISR + retencionAdicional;
      sueldoSubtotal = sueldoNeto * retencion;
      sueldoTotal = sueldoNeto - sueldoSubtotal;
      valeDeDespensa = sueldoTotal * 0.04;
    }

    const nomina = await this.nominaRepository.create({
      entregas: rest.entregas,
      horasTrabajadas: horasTrabajadas,
      mes: rest.mes,
      numeroEmpleado: numeroEmpleado,
      retencionAdicional: retencionAdicional,
      retencionISR: retencionISR,
      sueldoNeto: sueldoNeto,
      sueldoTotal: sueldoTotal,
      valeDeDespensa: valeDeDespensa,
      bonoPorHora: bonoPorHora,
      empleado,
    });

    await this.nominaRepository.save(nomina);

    return nomina;
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const nomina = await this.nominaRepository.find({
      take: limit,
      skip: offset,
    });
    return nomina;
  }

  findOne(id: number) {
    return `This action returns a #${id} nomina`;
  }

  update(id: number, updateNominaDto: UpdateNominaDto) {
    return `This action updates a #${id} nomina`;
  }

  remove(id: number) {
    return `This action removes a #${id} nomina`;
  }
}
