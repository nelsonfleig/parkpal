import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrBefore);

export type Reservation = {
  startDate: string;
  endDate: string;
};

const getAvailableTimes = (hours: number[], reservations: Reservation[]): string[] => {
  const availableHours = [];
  for (let i = hours[0]; i <= hours[1]; i += 1) {
    availableHours.push(`${i < 10 ? '0' : ''}${i}:00`);
  }

  const hoursTaken: string[] = [];
  reservations.forEach((reservation) => {
    let start = dayjs(reservation.startDate);
    const end = dayjs(reservation.endDate);

    while (start.isSameOrBefore(end)) {
      hoursTaken.push(start.format('HH:mm'));
      start = start.add(1, 'hour');
    }
  });

  return availableHours.filter((hour) => !hoursTaken.includes(hour));
};

export default getAvailableTimes;
