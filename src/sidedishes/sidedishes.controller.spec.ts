import { Test, TestingModule } from '@nestjs/testing';
import { SideDishesController } from './sidedishes.controller';
import { SideDishesService } from './sidedishes.service';

describe('SideDishesController', () => {
  let controller: SideDishesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SideDishesController],
      providers: [SideDishesService],
    }).compile();

    controller = module.get<SideDishesController>(SideDishesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
