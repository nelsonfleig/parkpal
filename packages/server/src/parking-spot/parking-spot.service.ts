import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/models/abstract.service';
import { DeepPartial, Repository } from 'typeorm';
import { getAddressForSingleCoord } from './helpers/reverseGeo';
import { ParkingSpot } from './parking-spot.entity';

@Injectable()
export class ParkingSpotService extends AbstractService<ParkingSpot> {
  constructor(
    @InjectRepository(ParkingSpot) parkingSpotRepo: Repository<ParkingSpot>
  ) {
    super(parkingSpotRepo);
  }

  async create(data: DeepPartial<ParkingSpot>): Promise<ParkingSpot> {
    try {
      const address = await getAddressForSingleCoord({
        lat: data.lat,
        lng: data.lng,
      });
      return super.create({
        ...data,
        ...address,
      });
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }

  async findCalendarInfo(
    id: { userId: number },
    options: string[]
  ): Promise<any> {
    try {
      const res = await super.find(id, options);
      const arr = [];
      res.forEach((spot) => {
        if (spot.reservations.length) {
          return spot.reservations.forEach((el) => {
            arr.push({
              spot: spot.id,
              startHour: Date.parse(el.startDate),
              endHour: Date.parse(el.endDate),
              name: `${spot.street}, ${spot.city}`,
            });
          });
        }
      });
      return arr;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  }
}
