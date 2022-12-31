import {View, Text} from 'react-native';
import React from 'react';
import {AppStackParams, Screens} from '@types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '@screens/Profile';
import Message from '@screens/Message';

const Stack = createNativeStackNavigator<AppStackParams>();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName={Screens.Profile}>
      <Stack.Screen name={Screens.Profile} component={Profile} />
      <Stack.Screen name={Screens.Message} component={Message} />
    </Stack.Navigator>
  );
}
