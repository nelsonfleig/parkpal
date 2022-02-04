import React, { useState } from 'react';
import { View } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { useDispatch } from 'react-redux';
import { ParkingSpotInfo } from '../ParkingSpotInfo/parkingSpotInfo';
import { StartRoute } from '../StartRoutePopup/startRoute';
import styles from './bookingPopupStyles';
import { displayRoute } from '../../redux/showRoute/showRoute';
import { changeCurrentSpace } from '../../redux/parkingSpot/parkingSpotSlice';

export const panelReference = React.createRef<any>();

export const BookingPopup = () => {
  const [content, setContent] = useState('booking');
  const dispatch = useDispatch();
  return (
    <SlidingUpPanel
      ref={panelReference}
      draggableRange={{ top: 500, bottom: 0 }}
      allowDragging={content !== 'start'}
      backdropOpacity={content === 'start' ? 0.1 : 0.5}
      onBottomReached={() => {
        if (content === 'start') {
          setContent('booking');
          dispatch(displayRoute(false));
          dispatch(changeCurrentSpace(null));
        }
      }}>
      {content === 'booking' ? (
        <ParkingSpotInfo setContent={setContent} />
      ) : (
        <View style={styles.slideContent}>
          <StartRoute />
        </View>
      )}
    </SlidingUpPanel>
  );
};
