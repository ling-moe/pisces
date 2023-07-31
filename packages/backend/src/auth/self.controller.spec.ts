import { Test, TestingModule } from '@nestjs/testing';
import { SelfController } from './self.controller';

describe('SelfController', () => {
  let controller: SelfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SelfController],
    }).compile();

    controller = module.get<SelfController>(SelfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
