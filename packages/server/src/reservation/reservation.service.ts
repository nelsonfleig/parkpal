import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { format, subDays } from 'date-fns';
import { AbstractService } from 'src/common/models/abstract.service';
import { Repository } from 'typeorm';
import { Reservation } from './reservation.entity';
import { PaymentInput } from './types/paymentIntent.input';
import Stripe from 'stripe';

@Injectable()
export class ReservationService extends AbstractService<Reservation> {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepo: Repository<Reservation>
  ) {
    super(reservationRepo);
  }

  /**
   * Collects the revenues of all of a user's parkings spots of the last week
   * @param id User id
   * @returns A SeriesDataItem with a sum and date
   */
  chart(id: number) {
    const startDate = format(subDays(new Date(), 6), 'yyyy-MM-dd');
    return this.reservationRepo.query(
      `SELECT to_char("createdAt", 'YYYY-MM-DD') as date, sum(r.total) as sum FROM reservations r WHERE r."userId" = ${id} AND "createdAt"::date >= '${startDate}' GROUP BY date`
    );
  }
  async createPaymentIntent(data: PaymentInput) {
    try {
      console.log(process.env.STRIPE_SECRET_KEY);
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: '2020-08-27',
      });
      const paymentIntent = await stripe.paymentIntents.create({
        amount: Math.floor(data.total * 100),
        currency: 'eur',
      });
      const clientSecret = paymentIntent.client_secret;
      return clientSecret;
    } catch (error) {
      return error;
    }
  }
}
