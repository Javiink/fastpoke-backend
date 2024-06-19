import { Test, TestingModule } from '@nestjs/testing';
import { BowlsController } from './bowls.controller';
import { BowlsService } from './bowls.service';

describe('BowlsController', () => {
  let controller: BowlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BowlsController],
      providers: [BowlsService],
    }).compile();

    controller = module.get<BowlsController>(BowlsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
