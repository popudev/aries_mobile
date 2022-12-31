import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './stacks/RootStack';
import {Provider} from 'react-native-paper';
import AgentProvider from '@aries/AgentProvider';

export default function App() {
  return (
    <AgentProvider>
      <Provider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </Provider>
    </AgentProvider>
  );
}
