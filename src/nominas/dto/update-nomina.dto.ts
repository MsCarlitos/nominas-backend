import { PartialType } from '@nestjs/swagger';
import { CreateNominaDto } from './create-nomina.dto';

export class UpdateNominaDto extends PartialType(CreateNominaDto) {}
