import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/models/abstract.service';
import { Repository } from 'typeorm';
import { ParkingSpot } from './parking-spot.entity';

@Injectable()
export class ParkingSpotService extends AbstractService<ParkingSpot> {
  constructor(
    @InjectRepository(ParkingSpot) parkingSpotRepo: Repository<ParkingSpot>
  ) {
    super(parkingSpotRepo);
  }
}
