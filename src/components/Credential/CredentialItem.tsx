import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import type {CredentialExchangeRecord} from '@aries-framework/core';

interface Props {
  credential: CredentialExchangeRecord;
}

export default function CredentialItem({credential}: Props) {
  const options = credential.credentialAttributes;
  const credentialCardName = getCredentialCardName(credential.metadata.get('_internal/indyCredential'));
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 2,
        borderColor: '#C0C0C0',
        borderBottomWidth: 1,
        padding: 5,
        marginBottom: 25,
      }}>
      <View>
        <Text style={{fontSize: 14, color: 'red'}}>{credentialCardName}</Text>
        <View style={{padding: 10}}>
          {options &&
            options.map((option, index) => {
              return (
                <View
                  key={index}
                  style={{
                    borderColor: '#C0C0C0',
                    padding: 5,
                    marginTop: 2,
                  }}>
                  <Text>{option.name.toUpperCase()}</Text>
                  <Text>{option.value}</Text>
                </View>
              );
            })}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const getCredentialCardName = (metadata: any) => {
  const schemaId = metadata.schemaId.split(':');
  return schemaId[2];
};
