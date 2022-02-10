import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { RootState } from '../../redux';
import { showFindSpotButton } from '../../redux/findSpotButton/findSpotButtonSlice';
import { changeCurrentSpace } from '../../redux/parkingSpot/parkingSpotSlice';
import { changePopupContent } from '../../redux/popupContent/popupContentSlice';
import { displayRoute } from '../../redux/showRoute/showRoute';
import { CustomButton } from '../Forms/button';
import { ParkingSpotInfo } from '../ParkingSpotInfo/parkingSpotInfo';
// eslint-disable-next-line import/no-cycle
import { Payment } from '../Payment/payment';
import { StartRoute } from '../StartRoutePopup/startRoute';
import styles from './bookingPopupStyles';

export const panelReference = React.createRef<any>();

export const BookingPopup = () => {
  // const [content, setContent] = useState('booking');
  const { content } = useSelector((state: RootState) => state.popupContent);

  const dispatch = useDispatch();
  // On discard navigation function:
  const onDiscard = () => {
    if (content !== 'booking') {
      // We remove the route if the user discards going to navigation mode
      dispatch(displayRoute(false));
      dispatch(changeCurrentSpace(null));
      if (content === 'start') {
        dispatch(showFindSpotButton(true));
      }
      dispatch(changePopupContent('booking'));
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
    <KeyboardAvoidingView contentContainerStyle={{ paddingTop: 200 }}>
      <SlidingUpPanel
        ref={panelReference}
        draggableRange={{ top: 500, bottom: 0 }}
        allowDragging={content !== 'start'}
        backdropOpacity={content === 'start' ? 0.3 : 0.5}
        onBottomReached={onDiscard}
        >
        {changeContent()}
      </SlidingUpPanel>
    </KeyboardAvoidingView>
  );
};
