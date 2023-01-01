import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useCredentialByState} from '@aries-framework/react-hooks';
import {CredentialState} from '@aries-framework/core';
import CredentialItem from '@components/Credential/CredentialItem';

export default function Credential() {
  const credentials = useCredentialByState(CredentialState.Done);

  console.log(credentials);

  return (
    <View
      style={{
        padding: 10,
      }}>
      <ScrollView>
        {credentials.map(credential => {
          return <CredentialItem key={credential.id} credential={credential} />;
        })}
      </ScrollView>
    </View>
  );
}
