import AddIcon from '@mui/icons-material/Add';
import PinDropIcon from '@mui/icons-material/PinDrop';
import dynamic from 'next/dynamic';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DashboardLayout } from '../../../components/layout/dashboard-layout/dashboard-layout';
import {
  ParkingCreateForm,
  ParkingInfoColumn,
  ParkingSpotWrapper,
  ParkingToggleButton,
} from '../../../components/parking-spots';
import { ParkingList } from '../../../components/parking-spots/parking-list';
import { RootState } from '../../../redux';
import { toggleCreateMode } from '../../../redux/parking-spot/parkingSpotSlice';

const CreateParkingSpot = () => {
  const { isCreateMode } = useSelector((state: RootState) => state.parkingSpots);
  const dispatch = useDispatch();
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
        <Map />
        <ParkingInfoColumn>
          <ParkingToggleButton
            variant="contained"
            size="large"
            fullWidth
            color="primary"
            onClick={() => dispatch(toggleCreateMode())}>
            {isCreateMode ? (
              <>
                <PinDropIcon /> View Parking Spots
              </>
            ) : (
              <>
                <AddIcon /> Create
              </>
            )}
          </ParkingToggleButton>
          {isCreateMode ? <ParkingCreateForm /> : <ParkingList />}
        </ParkingInfoColumn>
      </ParkingSpotWrapper>
    </DashboardLayout>
  );
};

export default CreateParkingSpot;
