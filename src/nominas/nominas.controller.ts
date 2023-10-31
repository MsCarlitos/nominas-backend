import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NominasService } from './nominas.service';
import { CreateNominaDto } from './dto/create-nomina.dto';
import { UpdateNominaDto } from './dto/update-nomina.dto';
import { PaginationDto } from '../common/dtos/pagination.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Nomina } from './entities/nomina.entity';

@Controller('nominas')
export class NominasController {
  constructor(private readonly nominasService: NominasService) {}

  @ApiResponse({
    status: 201,
    description: 'Nomina was created successfully',
    type: Nomina,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 500, description: 'Internal Server Error' })
  @Post()
  create(@Body() createNominaDto: CreateNominaDto) {
    return this.nominasService.create(createNominaDto);
  }

  @Get()
  findAll(paginationDto: PaginationDto) {
    return this.nominasService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nominasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNominaDto: UpdateNominaDto) {
    return this.nominasService.update(+id, updateNominaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nominasService.remove(+id);
  }
}
