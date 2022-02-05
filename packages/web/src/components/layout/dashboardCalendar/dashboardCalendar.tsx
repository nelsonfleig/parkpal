import React, { FC, useEffect, useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box } from '@mui/material';
import { useParkingSpotResTestQuery } from '../../../graphql/__generated__';
import { eventStyleGetter } from './calendarEventStyle';

const DashboardCalendar: FC = () => {
  const localizer = momentLocalizer(moment);
  const [reservations, setReservations] = useState([]);
  const { data, loading } = useParkingSpotResTestQuery({ fetchPolicy: 'network-only' });

  useEffect(() => {
    if (!loading && data) {
      const reserv = data.parkingSpots.map((el) => ({
        startDate: new Date(el.startHour),
        endDate: new Date(el.endHour),
        title: el.name,
        id: el.spot,
      }));
      setReservations(reserv);
    }
  }, [data, loading]);

  return (
    <Box sx={{ display: 'flex', gap: '3%' }}>
      <Calendar
        defaultView="week"
        localizer={localizer}
        events={reservations}
        startAccessor="startDate"
        endAccessor="endDate"
        style={{
          height: 'calc(100vh - 130px)',
          width: '100%',
        }}
        eventPropGetter={eventStyleGetter}
      />
    </Box>
  );
};
export default DashboardCalendar;
