import { Button } from 'react-native-paper';
import { ReactNode } from 'react';
import styles from './styles';

type CustomButtonProps = {
  press: () => void;
  bg: string;
  color: string;
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
};

export const CustomButton = ({
  press,
  bg,
  color,
  children,
  loading = false,
  disabled = false,
}: CustomButtonProps) => (
  <Button
    style={{ ...styles.button, backgroundColor: bg }}
    color={color}
    onPress={press}
    loading={loading}
    disabled={disabled}>
    {children}
  </Button>
);
