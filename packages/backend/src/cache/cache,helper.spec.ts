import { Test, TestingModule } from '@nestjs/testing';
import { CacheHelper } from './cache.helper';

describe('CacheHelper', () => {
  let service: CacheHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheHelper],
    }).compile();

    service = module.get<CacheHelper>(CacheHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
