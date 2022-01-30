import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from './welcomeStyles';
import logo from '../../../assets/images/Logo.png';
import { RootStackParams } from '../../../types/rootStack';

type WelcomeProps = NativeStackScreenProps<RootStackParams, 'Login'>;

export const WelcomeScreen = ({ navigation }: WelcomeProps) => (
  <View style={styles.container}>
    <Image source={logo} style={styles.image} />
    <View>
      <View>
        <Button style={styles.button} onPress={() => navigation.navigate('Login')}>
          Sign In
        </Button>
        <Button style={styles.button}>Sign Up</Button>
      </View>
    </View>
  </View>
);

// export default Welcome;
