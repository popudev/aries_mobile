import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {Menu, IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {Screens, Stacks} from '@types';

export default function HeaderMenu() {
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const handleLogin = () => {
    navigation.navigate(Stacks.AuthStack, {screen: Screens.Signin});
    closeMenu();
  };
  return (
    <Menu
      style={styles.menu}
      statusBarHeight={StatusBar.currentHeight}
      visible={visible}
      onDismiss={closeMenu}
      anchor={<IconButton icon="dots-vertical" onPress={openMenu} />}>
      <Menu.Item style={styles.menuItem} title="Login" onPress={handleLogin} />
    </Menu>
  );
}

const styles = StyleSheet.create({
  menu: {
    marginTop: 10,
  },
  menuItem: {},
});
