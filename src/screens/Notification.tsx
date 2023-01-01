import {View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Screens, Stacks, TabStackScreenProps} from '@types';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useAgent, useCredentialByState, useCredentials} from '@aries-framework/react-hooks';
import {CredentialState} from '@aries-framework/core';
import NotificationItem from '@components/Notification/NotificationItem';

type Props = TabStackScreenProps<Screens.Notification>;

export default function Notification({route}: Props) {
  const navigation = useNavigation();
  const credentials = useCredentialByState(CredentialState.OfferReceived);
  const {loading, agent} = useAgent();
  console.log('credentials: ', credentials);

  const handleScanQR = () => {
    navigation.navigate(Stacks.NonAuthStack, {screen: Screens.Scan});
  };

  const handleAcceptCredentialOffer = (id: string) => {
    agent?.credentials.acceptOffer({credentialRecordId: id});
  };

  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <ScrollView>
        {credentials.map(cre => {
          return <NotificationItem key={cre.id} type="credential" id={cre.id} onPress={handleAcceptCredentialOffer} />;
        })}

        {/* <NotificationItem type="cre" id="1" onPress={handleAcceptCredentialOffer} />
        <NotificationItem type="cre" id="1" onPress={handleAcceptCredentialOffer} />
        <NotificationItem type="cre" id="1" onPress={handleAcceptCredentialOffer} /> */}
      </ScrollView>
      <TouchableOpacity>
        <Button icon="qrcode" mode="contained" onPress={handleScanQR}>
          Scan QR Code
        </Button>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
  },
});
