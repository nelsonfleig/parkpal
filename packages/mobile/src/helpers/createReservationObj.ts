import dayjs from 'dayjs';

const createReservationObj = (date: string, time: string, duration: number, id: number) => {
  const startDate = dayjs(`${date} ${time}`).toISOString();
  const endDate = dayjs(startDate).add(duration, 'hour').toISOString();

  return { startDate, endDate, parkingSpotId: id };
};

export default createReservationObj;
