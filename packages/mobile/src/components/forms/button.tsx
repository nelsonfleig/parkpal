import { Button } from 'react-native-paper';
import { ReactNode } from 'react';

import styles from './styles';

type CustomButtonProps = {
  press: () => void;
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type: string;
  color?: string;
  mode?: 'text' | 'outlined' | 'contained' | undefined;
};

export const CustomButton = ({
  press,
  children,
  loading = false,
  disabled = false,
  type,
  color,
  mode,
}: CustomButtonProps) => {
  const style = () => {
    if (type === 'welcome') {
      return styles.welcomeButton;
    }
    if (type === 'booking') {
      return styles.bookingButton;
    }
    return null;
  };
  return (
    <Button
      style={style()}
      onPress={press}
      loading={loading}
      disabled={disabled}
      color={color}
      mode={mode}>
      {children}
    </Button>
  );
};
