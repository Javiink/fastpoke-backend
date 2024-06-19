import { PartialType } from '@nestjs/swagger';
import { CreateBowlDto } from './create-bowl.dto';

export class UpdateBowlDto extends PartialType(CreateBowlDto) {}
