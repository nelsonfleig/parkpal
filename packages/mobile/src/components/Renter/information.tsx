import { Text, Image, Linking, Pressable, View } from 'react-native';
import { useSelector } from 'react-redux';
import { formatNumber } from '../../helpers/formatPhoneNumber';
import profile from '../../../assets/images/profile.png';
import styles from './renterStyles';
import { RootState } from '../../redux';

export const RenterInformation = () => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const { user, price } = currentSpot;

  const whatsapp = () => {
    Linking.openURL(
      `whatsapp://send?text=Hello!+I+have+seen+your+parking+spot+on+Parkpal!&phone=+34${user.phone}`
    );
  };

  return user ? (
    <View style={styles.renterInfo}>
      <Image source={profile} style={styles.image} />
      <View>
        <Text style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
        <Pressable onPress={whatsapp}>
          <Text style={styles.number}>+34 {formatNumber(user.phone as string)} </Text>
        </Pressable>
      </View>
      <Text style={styles.price}>{`${price}€/hr`}</Text>
    </View>
  ) : (
    <Text>No Informtion</Text>
  );
};
