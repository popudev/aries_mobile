import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './stacks/RootStack';
import {Provider} from 'react-native-paper';

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}
