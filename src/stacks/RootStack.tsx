import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParams, Screens, Stacks} from '@types';
import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import NonAuthStack from './NonAuthStack';
import TabStack from './TabStack';

const Stack = createNativeStackNavigator<RootStackParams>();

export default function RootStack() {
  const isLogin = false;

  return !isLogin ? (
    <Stack.Navigator
      initialRouteName={Stacks.NonAuthStack}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Stacks.NonAuthStack} component={NonAuthStack} />
      <Stack.Screen name={Stacks.AuthStack} component={AuthStack} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Stacks.AppStack} component={AppStack} />
    </Stack.Navigator>
  );
}
