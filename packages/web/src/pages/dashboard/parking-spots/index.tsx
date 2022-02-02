import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { DashboardLayout } from '../../../components/layout/dashboard-layout/dashboard-layout';
import {
  ParkingInfoColumn,
  ParkingCreateForm,
  ParkingSpotWrapper,
} from '../../../components/parking-spots';
import useGeolocation from '../../../hooks/useGeolocation';

const CreateParkingSpot = () => {
  const { data } = useGeolocation();
  const [createMode] = useState(true);

  const Map = React.useMemo(
    () =>
      dynamic(
        () => import('../../../components/map'), // replace '@components/map' with your component's location
        {
          // eslint-disable-next-line react/no-unstable-nested-components
          loading: () => <p>A map is loading</p>,
          ssr: false, // This line is important. It's what prevents server-side render
        }
      ),
    [
      /* list variables which should trigger a re-render here */
    ]
  );

  return (
    <DashboardLayout>
      <ParkingSpotWrapper>
        <Map coords={data} />
        <ParkingInfoColumn>
          {createMode ? <ParkingCreateForm /> : <h1>YOUR BOOKINGS</h1>}
        </ParkingInfoColumn>
      </ParkingSpotWrapper>
    </DashboardLayout>
  );
};

export default CreateParkingSpot;
