/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {

  // All navigation index.tsx screen name should need to be specified in this in order to remove typescript error.

  Root: NavigatorScreenParams<MainTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom : undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type RootTabScreenProps<Screen extends keyof MainTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type User = {
  id: String;
  name: String;
  imageUri: String;
  status: String;
}

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
}

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
}