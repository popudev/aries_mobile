import type {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum Screens {
  //AuthStack
  Signin = 'Signin',
  SigninQR = 'SigninQR',

  //TabStack
  Notification = 'Notification',
  Connection = 'Connection',
  Credential = 'Credential',

  //NonAuthStack
  Scan = 'Scan',
  DetailCredential = 'Detail Credential',

  //AppStack
  Profile = 'Profile',
  Message = 'Message',
}

export enum Stacks {
  AuthStack = 'AuthStack',
  NonAuthStack = 'NonAuthStack',
  TabStack = 'TabStack',
  AppStack = 'AppStack',
}

export type RootStackParams = {
  [Stacks.AuthStack]: NavigatorScreenParams<AuthStackParams>;
  [Stacks.NonAuthStack]: NavigatorScreenParams<NonAuthStackParams>;
  [Stacks.AppStack]: NavigatorScreenParams<AppStackParams>;
};

export type AuthStackParams = {
  [Screens.Signin]: undefined;
  [Screens.SigninQR]: undefined;
};

export type NonAuthStackParams = {
  [Stacks.TabStack]: NavigatorScreenParams<TabStackParams>;
  [Screens.DetailCredential]: undefined;
  [Screens.Scan]: undefined;
};

export type TabStackParams = {
  [Screens.Notification]: undefined;
  [Screens.Connection]: undefined;
  [Screens.Credential]: undefined;
};

export type AppStackParams = {
  [Screens.Profile]: {
    name: string;
  };
  [Screens.Message]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParams> = NativeStackScreenProps<RootStackParams, T>;
export type AuthStackScreenProps<T extends keyof AuthStackParams> = NativeStackScreenProps<AuthStackParams, T>;
export type NonAuthStackScreenProps<T extends keyof NonAuthStackParams> = NativeStackScreenProps<NonAuthStackParams, T>;
export type TabStackScreenProps<T extends keyof TabStackParams> = NativeStackScreenProps<TabStackParams, T>;
export type AppStackScreenProps<T extends keyof AppStackParams> = NativeStackScreenProps<AppStackParams, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParams {}
  }
}
