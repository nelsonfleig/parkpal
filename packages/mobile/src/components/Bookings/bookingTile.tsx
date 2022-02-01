import { View, Text, Pressable } from 'react-native';
import { Surface } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './bookingTileStyles';
import { CustomButton } from '../Forms/button';

export const BookingTile = () => (
  <View>
    <Surface style={styles.tile}>
      <Text style={styles.address}>C/ Nàpols 155</Text>
      <View style={styles.info}>
        <Text style={styles.time}>23/04/2022</Text>
        <Text style={styles.time}>19:00 - 20:30</Text>
      </View>
      <CustomButton press={() => {}} type="booking" color="#fff" mode="outlined">
        View Route
      </CustomButton>
      <Pressable style={styles.edit}>
        <MaterialCommunityIcons name="dots-horizontal" color="#fff" size={26} />
      </Pressable>
    </Surface>
  </View>
);
