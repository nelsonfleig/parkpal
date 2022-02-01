import React, { ReactNode } from 'react';
import { ScrollView, View, Image, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '../../../assets/images/Logo.png';
import styles from './startScreenStyles';

type StartScreenProps = {
  children: ReactNode;
};

const { width } = Dimensions.get('window');
export const StartScreen = ({ children }: StartScreenProps) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.logo}>
      <Image source={Logo} style={styles.image} />
    </View>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        centerContent
        style={{ width }}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);
