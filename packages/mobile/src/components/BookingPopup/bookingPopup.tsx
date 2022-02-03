import SlidingUpPanel from 'rn-sliding-up-panel';
import { View } from 'react-native';

import React, { useState } from 'react';

import styles from './bookingPopupStyles';
import { StartRoute } from '../StartRoutePopup/startRoute';
import { ParkingSpotInfo } from '../ParkingSpotInfo/parkingSpotInfo';

export const panelReference = React.createRef<any>();

export const BookingPopup = () => {
  const [content, setContent] = useState('booking');

  return (
    <SlidingUpPanel
      ref={panelReference}
      draggableRange={content === 'start' ? { top: 150, bottom: 0 } : { top: 500, bottom: 0 }}
      allowDragging={content !== 'start'}
      backdropOpacity={content === 'start' ? 0 : 0.5}>
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
