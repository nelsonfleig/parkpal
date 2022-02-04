import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
class SeriesDataItem {
  @Field()
  date: string;

  @Field()
  sum: number;
}

@ObjectType()
export class BusinessStatsResponse {
  @Field()
  totalReservations: number;

  @Field()
  totalRevenue: number;

  @Field()
  totalComplaints: number;

  @Field(() => [SeriesDataItem])
  timeSeries: SeriesDataItem[];
}
