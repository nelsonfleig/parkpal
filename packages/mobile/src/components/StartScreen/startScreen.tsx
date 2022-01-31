import { View, Image } from 'react-native';
import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../../assets/images/Logo.png';
import styles from './startScreenStyles';

type StartScreenProps = {
  children: ReactNode;
};

export const StartScreen = ({ children }: StartScreenProps) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.logo}>
      <Image source={Logo} style={styles.image} />
    </View>
    <View>{children}</View>
  </SafeAreaView>
);
