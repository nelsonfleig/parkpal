import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import styles from './renterStyles';

export const RenterLocation = () => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  return (
    <View style={styles.location}>
      <MaterialCommunityIcons name="map-marker" size={40} color="#7145D6" style={styles.icon} />
      <View>
        <Text style={styles.addressLine}>{`${currentSpot?.street}, ${currentSpot?.zipCode},`}</Text>
        <Text style={styles.addressLine}>{currentSpot?.city}</Text>
      </View>
    </View>
  );
};
