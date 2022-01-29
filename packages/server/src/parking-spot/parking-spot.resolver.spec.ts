import { Test, TestingModule } from '@nestjs/testing';
import { ParkingSpotResolver } from './parking-spot.resolver';

describe('ParkingSpotResolver', () => {
  let resolver: ParkingSpotResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingSpotResolver],
    }).compile();

    resolver = module.get<ParkingSpotResolver>(ParkingSpotResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
