import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AbstractService } from 'src/common/models/abstract.service';
import { Repository } from 'typeorm';
import { User } from './user.entity';
// import argon2 from 'argon2';
import { UserInput } from './types/user.input';
import md5 from 'md5';
import { ReservationService } from 'src/reservation/reservation.service';
import { BusinessStatsResponse } from './types/business-info.response';

@Injectable()
export class UserService extends AbstractService<User> {
  constructor(
    @InjectRepository(User) userRepo: Repository<User>,
    private resService: ReservationService
  ) {
    super(userRepo);
  }

  async create(input: UserInput): Promise<User> {
    // const hashedPassword = await argon2.hash(input.password);
    return super.create({
      ...input,
      password: md5(input.password),
    });
  }

  async getMyBusinessStats(userId: number): Promise<BusinessStatsResponse> {
    const reservations = await this.resService.find({ userId });
    const totalRevenue = reservations.reduce((sum, res) => sum + res.total, 0);
    const totalReservations = reservations.length;
    const timeSeries = await this.resService.chart(userId);
    const totalComplaints = 0;
    return { totalRevenue, totalReservations, timeSeries, totalComplaints };
  }
}
