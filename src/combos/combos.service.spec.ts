import { Test, TestingModule } from '@nestjs/testing';
import { CombosService } from './entities/combos.service';

describe('CombosService', () => {
  let service: CombosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CombosService],
    }).compile();

    service = module.get<CombosService>(CombosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
