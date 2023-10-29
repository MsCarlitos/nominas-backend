import { Injectable } from '@nestjs/common';
import { CreateNominaDto } from './dto/create-nomina.dto';
import { UpdateNominaDto } from './dto/update-nomina.dto';

@Injectable()
export class NominasService {
  create(createNominaDto: CreateNominaDto) {
    return 'This action adds a new nomina';
  }

  findAll() {
    return `This action returns all nominas`;
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
