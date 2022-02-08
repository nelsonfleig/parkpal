import dayjs from 'dayjs';
import { ParkingSpotDetailsFragment } from '../graphql/__generated__';

const calculateSlider = (
  availableTimes: string[],
  selectedTime: string,
  currentSpot: ParkingSpotDetailsFragment | null,
  selectedDate: string
) => {
  if (selectedTime) {
    let difference = 0;
    const start = parseInt(selectedTime.slice(0, 2), 10);
    let end = 0;
    const sliderOptions: number[] = [];

    if (selectedTime === availableTimes[availableTimes.length - 1]) {
      return [0, 2];
    }

    if (currentSpot?.reservations) {
      // If no reservations bookings can be from any time to the end
      const selectedDaysReservations = currentSpot.reservations.filter((reservation) => {
        const formatted = dayjs(reservation.startDate).format('YYYY-MM-DD');
        return formatted === selectedDate;
      });
      if (!selectedDaysReservations.length) {
        end = parseInt(availableTimes[availableTimes.length - 1].slice(0, 2), 10) + 1;
      } else {
        // Otherwise from the selcted time to the next available time
        const selectedIndex = availableTimes.indexOf(selectedTime);
        const nextAvailable = availableTimes[selectedIndex + 1];
        if (!nextAvailable) return [];
        end = parseInt(nextAvailable.slice(0, 2), 10);
      }
      // Calculate the difference between times
      difference = end - start;
      // Generate the options array for the slider
      for (let i = 0; i <= difference; i += 1) {
        sliderOptions.push(i);
      }
      return sliderOptions;
    }
  }

  return [];
};

export default calculateSlider;
