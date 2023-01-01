import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useConnectionByState} from '@aries-framework/react-hooks';
import {DidExchangeState} from '@aries-framework/core';
import ConnectionItem from '@components/Connection/ConnectionItem';

export default function Connection() {
  const connections = useConnectionByState(DidExchangeState.Completed);

  return (
    <View
      style={{
        padding: 10,
      }}>
      <ScrollView>
        {connections.map(connection => {
          return <ConnectionItem key={connection.id} connection={connection} />;
        })}
      </ScrollView>
    </View>
  );
}
