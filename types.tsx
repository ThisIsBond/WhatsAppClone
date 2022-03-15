/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

/*
TypeScript is a typed superset of JavaScript that was designed to solve many of the pain points of writing applications in JavaScript.
TypeScript compiles down to plain JavaScript and is backwards-compatible with a few edge cases, making it a great target for older environments.

With features like interfaces, generics, optional type-checking, and type inference, as well as the latest features from ES6 like decorators, 
async/await, and more, TypeScript stands out greatly when it comes to developer productivity.

On the other hand, GraphQL is a query language for APIs that uses its type system to describe data fields, preventing over and under-fetching. 
Additionally, GraphQL can greatly help in the area of API versioning.
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