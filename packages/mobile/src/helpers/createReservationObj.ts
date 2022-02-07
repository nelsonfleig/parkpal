import dayjs from 'dayjs';

const createReservationObj = (
  date: string,
  time: string,
  duration: number,
  id: string,
  price: number,
  stripeChargeId: string
) => {
  const startDate = dayjs(`${date} ${time}`).toISOString();
  const endDate = dayjs(startDate).add(duration, 'hour').toISOString();
  const total = price * duration;
  return {
    startDate,
    endDate,
    parkingSpotId: id,
    total,
    stripeChargeId,
  };
};

export default createReservationObj;
