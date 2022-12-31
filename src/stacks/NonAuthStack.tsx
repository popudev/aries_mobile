import {View, Text} from 'react-native';
import React from 'react';
import {NonAuthStackParams, Screens, Stacks} from '@types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notification from '@screens/Notification';
import Credential from '@screens/Credential';
import Connection from '@screens/Connection';
import DetailCredential from '@screens/DetailCredential';
import Scan from '@screens/Scan';
import TabStack from './TabStack';
import HeaderMenu from '@components/HeaderMenu';

const Stack = createNativeStackNavigator<NonAuthStackParams>();

export default function NonAuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Stacks.TabStack}
        component={TabStack}
        options={{
          headerRight: props => <HeaderMenu />,
          headerTitle: 'Tìm kiếm',
        }}
      />
      <Stack.Screen name={Screens.DetailCredential} component={DetailCredential} />
      <Stack.Screen name={Screens.Scan} component={Scan} />
    </Stack.Navigator>
  );
}
