import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type HomeStackParams = {
  Landing: undefined;
  Profile: undefined;
  Bookings: undefined;
};

export type HomeProps = BottomTabScreenProps<HomeStackParams>;
