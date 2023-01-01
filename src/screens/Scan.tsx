import {View, StyleSheet} from 'react-native';
import React from 'react';
import {BarCodeReadEvent} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useAgent} from '@aries-framework/react-hooks';
import {Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {Screens, Stacks} from '@types';

export default function Scan() {
  const {agent} = useAgent();
  const navigation = useNavigation();

  if (!agent) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  const onRead = async (event: BarCodeReadEvent) => {
    await agent.oob.receiveInvitationFromUrl(event.data);
    navigation.navigate(Stacks.NonAuthStack, {
      screen: Stacks.TabStack,
      params: {
        screen: Screens.Notification,
      },
    });
  };

  return (
    <QRCodeScanner
      onRead={onRead}
      reactivateTimeout={5000}
      cameraStyle={{width: '100%', height: '100%'}}
      reactivate={true}
      showMarker
      customMarker={
        <View style={styles.maker_container}>
          <View style={styles.maker_border_top_left} />
          <View style={styles.maker_border_top_right} />
          <View style={styles.maker_border_bottom_left} />
          <View style={styles.maker_border_bottom_right} />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  maker_container: {
    position: 'relative',
    width: 300,
    height: 300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
  },
  maker_border_top_left: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderColor: '#fff',
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderTopLeftRadius: 10,
    width: '25%',
    height: '25%',
  },
  maker_border_top_right: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderColor: '#fff',
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderTopRightRadius: 10,
    width: '25%',
    height: '25%',
  },
  maker_border_bottom_left: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    borderColor: '#fff',
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderBottomLeftRadius: 10,
    width: '25%',
    height: '25%',
  },

  maker_border_bottom_right: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderColor: '#fff',
    borderBottomWidth: 5,
    borderRightWidth: 5,
    borderBottomRightRadius: 10,
    width: '25%',
    height: '25%',
  },
});
