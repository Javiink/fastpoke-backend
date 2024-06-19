import { Test, TestingModule } from '@nestjs/testing';
import { BowlsService } from './bowls.service';

describe('BowlsService', () => {
  let service: BowlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BowlsService],
    }).compile();

    service = module.get<BowlsService>(BowlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
