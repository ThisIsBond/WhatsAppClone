/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, StyleSheet } from 'react-native';

import useColorScheme from '../hooks/useColorScheme';
import { Text, View, Image } from 'react-native';
import Colors from '../constants/Colors';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';

import { RootStackParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

// Icons 
import { Octicons, MaterialCommunityIcons, AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

// Images
import money from '../assets/images/money.jpg'

//TopTabNavigation
import MainTabNavigator from './MainTabNavigator'
import styles from '../components/ChatListItem/styles';

// Hooks
import { useNavigation } from '@react-navigation/native';
import ConatctsScreen from '../screens/ContactsScreen';



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

  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
      headerStyle: {
        backgroundColor: Colors.lightDark.tint,
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
                width: 60,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'space-between', // provide space between two icons
                marginRight: 1
              }}
            >
              <Octicons name='search' size={20} color={'white'} />
              <MaterialCommunityIcons name="dots-vertical" size={20} color={'white'} />
            </View>
          )
        }} />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        // options={({ route }) => ({
        //   // In order to achieve this we need to specify props in useNavigation hook form ChatListItem/index.tsx component.
        //   title: route.params.name, // Displaying custom title withe the help of params (Using params in the title)
        // })}

        options={({ route }) => ({
          // Below snippet will show the header profile picture inside selected chatroom
          headerLeft: () => {
            return (
              <>
                <View
                  style={{
                    flexDirection: 'row'
                  }}
                >
                  <AntDesign style={{
                    padding: '1.75%'
                  }} name="arrowleft" size={24} color={Colors[colorScheme].tint} onPress={() => {
                    console.log();
                    navigation.goBack()
                  }} />
                  <Image source={money} style={styles.chatAvatar} />
                </View>
              </>
            )
          },
          // In order to achieve this we need to specify props in useNavigation hook form ChatListItem/index.tsx component.
          title: route.params.name, // Displaying custom title withe the help of params (Using params in the title
          headerRight: () => (
            <View
              style={{
                width: 100,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                justifyContent: 'space-between', // provide space between two icons
                marginRight: 5
              }}>
              <MaterialIcons name='call' size={20} color={Colors[colorScheme].tint} />
              <FontAwesome5 name="video" size={20} color={Colors[colorScheme].tint} />
              <MaterialCommunityIcons name='dots-vertical' size={20} color={Colors[colorScheme].tint} />
            </View>
          )
        })}


      />


      <Stack.Screen
        name="Contacts"
        component={ConatctsScreen}

      />

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

