import { Test, TestingModule } from '@nestjs/testing';
import { ComplainResolver } from './complain.resolver';

describe('ComplainResolver', () => {
  let resolver: ComplainResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComplainResolver],
    }).compile();

    resolver = module.get<ComplainResolver>(ComplainResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
