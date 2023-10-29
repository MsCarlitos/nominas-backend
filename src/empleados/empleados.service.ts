import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';
import { validate as isUUID } from 'uuid';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class EmpleadosService {
  private readonly logger = new Logger('EmpleadosService');

  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto) {
    const emp = await this.findAll({ limit: 0, offset: 0 });
    let numeroEmpleado = 0;

    if (emp.length !== 0) {
      numeroEmpleado = emp[emp.length - 1].numeroEmpleado;
    }

    const empleado = this.empleadoRepository.create({
      numeroEmpleado: numeroEmpleado + 1,
      sueldoPorHora: 30,
      ...createEmpleadoDto,
    });
    await this.empleadoRepository.save(empleado);
    return empleado;
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;
    const empleado = await this.empleadoRepository.find({
      take: limit,
      skip: offset,
    });
    return empleado;
  }

  async findOne(term: any) {
    let empleado: Empleado;

    if (isUUID) {
      empleado = await this.empleadoRepository.findOneBy({
        id: term,
      });
    } else {
      const queryBuilder = await this.empleadoRepository.createQueryBuilder(
        'emp',
      );
      empleado = await queryBuilder
        .where(`numeroEmpleado =:numeroEmpleado`, {
          numeroEmpleado: term,
        })
        .getOne();
    }
    if (!empleado) {
      throw new NotFoundException(`Empleado ${term} no encontrado.`);
    }
    return empleado;
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}
