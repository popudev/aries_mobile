import {View, Text} from 'react-native';
import React from 'react';
import {AuthStackParams, RootStackScreenProps, Screens, Stacks} from './types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// type Props = RootStackScreenProps<Stacks.NonAuthStack>;
// type Props = RootStackScreenProps<>;
export default function Profile() {
  // const name = route.params.name;
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}
