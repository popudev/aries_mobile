import React from 'react';
import {Screens, TabStackParams} from '@types';
import Notification from '@screens/Notification';
import Credential from '@screens/Credential';
import Connection from '@screens/Connection';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createMaterialBottomTabNavigator<TabStackParams>();

export default function TabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Notification}
        component={Notification}
        options={{
          title: Screens.Notification,
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name={'bell'.concat(focused ? '' : '-outline')} color={color} size={24} />
          ),
        }}
      />
      <Stack.Screen
        name={Screens.Credential}
        component={Credential}
        options={{
          title: Screens.Credential,
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name={'credit-card'.concat(focused ? '' : '-outline')} color={color} size={24} />
          ),
        }}
      />
      <Stack.Screen
        name={Screens.Connection}
        component={Connection}
        options={{
          title: Screens.Connection,
          tabBarIcon: ({focused, color}) => <MaterialCommunityIcons name={'connection'} color={color} size={24} />,
        }}
      />
    </Stack.Navigator>
  );
}
