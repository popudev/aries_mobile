import {View, Text, TouchableOpacity} from 'react-native';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Button, IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator<NonAuthStackParams>();

export default function NonAuthStack() {
  const navigation = useNavigation();
  const handleLogin = () => {
    navigation.navigate(Stacks.AuthStack, {screen: Screens.Signin});
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Stacks.TabStack}
        component={TabStack}
        options={{
          headerLeft: props => <IconButton icon="menu" />,
          headerRight: props => (
            <Button mode="text" onPress={handleLogin}>
              <FontAwesome
                name="sign-in"
                style={{
                  fontSize: 20,
                }}
              />
              <Text>{'  '}</Text>
              <Text
                style={{
                  fontSize: 16,
                }}>
                Sign In
              </Text>
            </Button>
          ),
          headerTitle: '',
        }}
      />
      <Stack.Screen name={Screens.DetailCredential} component={DetailCredential} />
      <Stack.Screen name={Screens.Scan} component={Scan} />
    </Stack.Navigator>
  );
}
