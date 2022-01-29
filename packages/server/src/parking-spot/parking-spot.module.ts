import { Module } from '@nestjs/common';
import { ParkingSpotService } from './parking-spot.service';
import { ParkingSpotResolver } from './parking-spot.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkingSpot } from './parkingSpot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParkingSpot])],
  providers: [ParkingSpotService, ParkingSpotResolver],
})
export class ParkingSpotModule {}
