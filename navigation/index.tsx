/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, StyleSheet } from 'react-native';
import { View } from '../components/Themed';

import Colors from '../constants/Colors';
import NotFoundScreen from '../screens/NotFoundScreen';

import { RootStackParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// Icons 
import {Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

//TopTabNavigation
import MainTabNavigator from './MainTabNavigator'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: Colors.light.tint,
      },
      headerTintColor: Colors.light.background,
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }}>
      {/*  Header style changing  */}
      <Stack.Screen
        name="Root"
        component={MainTabNavigator}
        options={{
          title: 'WhatsApp',
          headerShadowVisible: false, // header Shadow remove in Android (elevation prop for IOS)
          headerRight: () => (
            <View
              style={{
                width:60,
                backgroundColor:'transparent',
                flexDirection:'row',
                justifyContent:'space-between', // provide space between two icons
                marginRight: 1
              }}
            >
              <Octicons name='search' size={20} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={20} color={'white'} />
            </View>
          )
        }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      {/* <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

