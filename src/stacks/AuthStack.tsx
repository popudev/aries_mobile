import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParams, Screens} from '@types';
import Signin from '@screens/Signin';
import SiginQR from '@screens/SiginQR';

const Stack = createNativeStackNavigator<AuthStackParams>();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName={Screens.Signin}>
      <Stack.Screen name={Screens.Signin} component={Signin} />
      <Stack.Screen name={Screens.SigninQR} component={SiginQR} />
    </Stack.Navigator>
  );
}
