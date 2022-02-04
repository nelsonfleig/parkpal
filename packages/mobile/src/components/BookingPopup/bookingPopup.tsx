import React, { useState } from 'react';
import { View } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { useDispatch } from 'react-redux';
import { ParkingSpotInfo } from '../ParkingSpotInfo/parkingSpotInfo';
import { StartRoute } from '../StartRoutePopup/startRoute';
import styles from './bookingPopupStyles';
import { displayRoute } from '../../redux/showRoute/showRoute';
import { changeCurrentSpace } from '../../redux/parkingSpot/parkingSpotSlice';
import { CustomButton } from '../Forms/button';

export const panelReference = React.createRef<any>();

export const BookingPopup = () => {
  const [content, setContent] = useState('booking');
  const dispatch = useDispatch();
  // On discard navigation function:
  const onDiscard = () => {
    if (content === 'start') {
      setContent('booking');
      // We remove the route if the user discards going to navigation mode
      dispatch(displayRoute(false));
      dispatch(changeCurrentSpace(null));
    }
  };
  return (
    <SlidingUpPanel
      ref={panelReference}
      draggableRange={{ top: 500, bottom: 0 }}
      allowDragging={content !== 'start'}
      backdropOpacity={content === 'start' ? 0.01 : 0.5}
      onBottomReached={onDiscard}>
      {content === 'booking' ? (
        <ParkingSpotInfo setContent={setContent} />
      ) : (
        <View style={styles.slideContent}>
          <StartRoute />
          <CustomButton press={() => panelReference.current.hide()} color="white" type="later">
            Leave it for later
          </CustomButton>
        </View>
      )}
    </SlidingUpPanel>
  );
};
