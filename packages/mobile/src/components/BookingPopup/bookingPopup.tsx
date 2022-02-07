import React from 'react';
import { View } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { useDispatch, useSelector } from 'react-redux';
import { ParkingSpotInfo } from '../ParkingSpotInfo/parkingSpotInfo';
import { StartRoute } from '../StartRoutePopup/startRoute';
import styles from './bookingPopupStyles';
import { displayRoute } from '../../redux/showRoute/showRoute';
import { changeCurrentSpace } from '../../redux/parkingSpot/parkingSpotSlice';
import { CustomButton } from '../Forms/button';
import { Payment } from '../Payment/payment';
import { RootState } from '../../redux';
import { changePopupContent } from '../../redux/popupContent/popupContentSlice';

export const panelReference = React.createRef<any>();

export const BookingPopup = () => {
  // const [content, setContent] = useState('booking');
  const { content } = useSelector((state: RootState) => state.popupContent);

  const dispatch = useDispatch();
  // On discard navigation function:
  const onDiscard = () => {
    if (content === 'start') {
      dispatch(changePopupContent('booking'));
      // We remove the route if the user discards going to navigation mode
      dispatch(displayRoute(false));
      dispatch(changeCurrentSpace(null));
    }
  };

  // Function to select pop up content:
  // eslint-disable-next-line consistent-return
  const changeContent = () => {
    if (content === 'booking') {
      return <ParkingSpotInfo />;
    }
    if (content === 'payment') {
      return <Payment />;
    }
    if (content === 'start') {
      return (
        <View style={styles.slideContent}>
          <StartRoute />
          <CustomButton press={() => panelReference.current.hide()} color="white" type="later">
            Leave it for later
          </CustomButton>
        </View>
      );
    }
  };

  return (
    <SlidingUpPanel
      ref={panelReference}
      draggableRange={{ top: 500, bottom: 0 }}
      allowDragging={content !== 'start'}
      backdropOpacity={content === 'start' ? 0.3 : 0.5}
      onBottomReached={onDiscard}>
      {changeContent()}
    </SlidingUpPanel>
  );
};
