import dayjs from 'dayjs';

const formatBookingDates = (start: string, end: string) => {
  const date = dayjs(start).format('DD-MM-YYYY');
  const startTime = dayjs(start).format('HH:mm');
  const endTime = dayjs(end).format('HH:mm');

  return { date, startTime, endTime };
};

export default formatBookingDates;
