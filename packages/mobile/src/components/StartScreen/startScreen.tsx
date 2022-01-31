import { View, Image } from 'react-native';
import { ReactNode } from 'react';
import Logo from '../../../assets/images/Logo.png';
import styles from './startScreenStyles';

type StartScreenProps = {
  children: ReactNode;
};

export const StartScreen = ({ children }: StartScreenProps) => (
  <View style={styles.container}>
    <Image source={Logo} style={styles.image} />
    <View>{children}</View>
  </View>
);
