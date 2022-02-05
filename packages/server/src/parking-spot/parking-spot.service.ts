import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/models/abstract.service';
import { DeepPartial, Repository } from 'typeorm';
import { getAddressForSingleCoord } from './helpers/reverseGeo';
import { filterByDistance } from './helpers/filterByDistance';
import { ParkingSpot } from './parking-spot.entity';
import { NearParkingSpotsInput } from './types/near-parking-spots.input';

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

  /**
   * Find a parking spot near a given coord
   *
   * IMPORTANT: Currently not very efficient because it queries all parking spots from DB and then applies a filter. Best to try and filter by a criteria first (ie. by city) to narrow down the search before applying the filter
   */
  async findNearParkingSpots({
    searchRadius,
    ...coords
  }: NearParkingSpotsInput) {
    const parkingSpots = await super.find();
    const filtered = parkingSpots.filter((pSpot) =>
      filterByDistance(coords, { lat: pSpot.lat, lng: pSpot.lng }, searchRadius)
    );
    return filtered;
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
