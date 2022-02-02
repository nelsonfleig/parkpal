import React, { FC, useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Box } from '@mui/material';

const DashboardCalendar: FC = () => {
  const localizer = momentLocalizer(moment);

  const [myEvents] = useState([
    {
      title: 'Booked by: Tango',
      start: moment().toDate(),
      end: moment().add(2, 'hours').toDate(),
    },
    {
      title: 'Booked by: Crash',
      start: new Date(2022, 1, 4, 10, 0), // 10.00 AM
      end: new Date(2022, 1, 4, 14, 30), // 2.30 PM
    },
  ]);

  const formats = {
    eventTimeRangeFormat: () => '',
  };

  return (
    <Box sx={{ display: 'flex', gap: '3%' }}>
      <Calendar
        step={60}
        defaultView="week"
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        formats={formats}
        style={{
          height: 'calc(100vh - 130px)',
          width: '100%',
        }}
      />
    </Box>
  );
};
export default DashboardCalendar;
