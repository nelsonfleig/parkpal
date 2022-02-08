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
    if (type === 'main') {
      return styles.mainButton;
    }
    if (type === 'start') {
      return styles.startButton;
    }
    if (type === 'later') {
      return styles.laterButton;
    }
    if (type === 'discard') {
      return styles.discard;
    }
    if (type === 'findhere') {
      return [styles.discard, { backgroundColor: '#0A2540' }];
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
