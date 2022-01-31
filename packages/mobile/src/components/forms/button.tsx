import { Button } from 'react-native-paper';
import { ReactNode } from 'react';
import styles from './styles';

type WhiteButtonProps = {
  press: () => void;
  bg: string;
  color: string;
  children: ReactNode;
};

export const CustomButton = ({ press, bg, color, children }: WhiteButtonProps) => (
  <Button style={{ ...styles.button, backgroundColor: bg }} color={color} onPress={press}>
    {children}
  </Button>
);
