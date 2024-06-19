import { PartialType } from '@nestjs/swagger';
import { CreateSideDishDto } from './create-side-dish.dto';

export class UpdateSideDishDto extends PartialType(CreateSideDishDto) {}
