import { View, Text } from 'react-native';
import { Surface, Provider, Menu, Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import styles from './bookingTileStyles';
import { CustomButton } from '../Forms/button';

export const BookingTile = () => {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View>
        <Surface style={styles.tile}>
          <Text style={styles.address}>C/ Nàpols 155</Text>
          <View style={styles.info}>
            <Text style={styles.time}>23/04/2022</Text>
            <Text style={styles.time}>19:00 - 20:30</Text>
          </View>
          <CustomButton press={() => {}} type="booking" color="#fff" mode="outlined">
            View Route
          </CustomButton>
          <View style={styles.edit}>
            <Menu
              style={{ marginTop: -70 }}
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Button onPress={openMenu}>
                  <MaterialCommunityIcons name="dots-horizontal" color="#fff" size={30} />
                </Button>
              }>
              <Menu.Item title="Report" />
              <Menu.Item title="Cancel" titleStyle={styles.menuItem} />
            </Menu>
          </View>
        </Surface>
      </View>
    </Provider>
  );
};
