import {View, Text} from 'react-native';
import React from 'react';
import {Screens, TabStackScreenProps} from '@types';

type Props = TabStackScreenProps<Screens.Notification>;

export default function Notification({route}: Props) {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
}
