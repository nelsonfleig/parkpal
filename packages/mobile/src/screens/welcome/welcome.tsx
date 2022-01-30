import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import styles from './welcomeStyles';
import logo from '../../../assets/images/Logo.png';

const Welcome = () => (
  <View style={styles.container}>
    <Image source={logo} style={styles.image} />
    <View>
      <View>
        <Button style={styles.button}>Sign In</Button>
        <Button style={styles.button}>Sign Up</Button>
      </View>
    </View>
  </View>
);

export default Welcome;
