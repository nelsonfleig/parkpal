import { Image, Linking, Pressable, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import styles from './renterStyles';

export const RenterInformation = () => {
  const { currentSpot } = useSelector((state: RootState) => state.parkingSpots);
  const { user, price } = currentSpot;

  const whatsapp = () => {
    Linking.openURL(
      `whatsapp://send?text=Hello!+I+have+seen+your+parking+spot+on+Parkpal!&phone=+34${user.phone}`
    );
  };

  const firstCapitalize = (string: string) => string.charAt(0).toUpperCase() + string.slice(1);

  return user ? (
    <View style={styles.renterInfo}>
      {user.pictureUrl ? (
        <Image source={{ uri: user.pictureUrl }} style={styles.image} width={60} height={60} />
      ) : (
        <View style={styles.defaultImage}>
          <Text style={styles.defaultImageName}>
            {user.firstName[0]}
            {user.lastName[0]}
          </Text>
        </View>
      )}
      <View>
        <Text style={styles.name}>{`${firstCapitalize(user.firstName)} ${firstCapitalize(
          user.lastName
        )}`}</Text>
        <Pressable onPress={whatsapp}>
          <Text style={styles.number}>{user.phone} </Text>
        </Pressable>
      </View>
      <Text style={styles.price}>{`${price}€/hr`}</Text>
    </View>
  ) : (
    <Text>No Informtion</Text>
  );
};
