import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import type {ConnectionRecord} from '@aries-framework/core';

interface Props {
  connection: ConnectionRecord;
}

export default function ConnectionItem({connection}: Props) {
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
        marginBottom: 5,
      }}>
      <View style={{width: '58%'}}>
        <Text style={{fontSize: 14}}>{connection.theirLabel}</Text>
        <Text style={{fontSize: 14}}>{connection.id}</Text>
      </View>
    </TouchableOpacity>
  );
}
