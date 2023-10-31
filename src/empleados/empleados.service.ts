import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class EmpleadosService {
  private readonly logger = new Logger('EmpleadosService');

  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    const empleado = this.empleadoRepository.create({
      sueldoPorHora: 30,
      ...createEmpleadoDto,
    });
    console.log(empleado);
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

  async findOne(term: number) {
    const empleado: Empleado = await this.empleadoRepository.findOneBy({
      numeroEmpleado: term,
    });

    if (!empleado) {
      throw new NotFoundException(`Empleado ${term} no encontrado.`);
    }
    return empleado;
  }

  async buscarEmpleados(query: string, limit: number): Promise<Empleado[]> {
    const empleados = await this.empleadoRepository
      .createQueryBuilder('empleado')
      .where('LOWER(empleado.nombre) LIKE LOWER(:query)', {
        query: `%${query}%`,
      })
      .take(limit)
      .getMany();

    return empleados;
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado, ${updateEmpleadoDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
}
