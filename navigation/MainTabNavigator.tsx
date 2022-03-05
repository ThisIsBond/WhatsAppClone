import * as React from 'react';

import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatScreen from '../screens/ChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList } from '../types';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Fontisto } from '@expo/vector-icons'
import { ScreenStackHeaderLeftView } from 'react-native-screens';


const MainTab = createMaterialTopTabNavigator<MainTabParamList>();
const CustomTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator
            backBehavior= 'initialRoute' // back button from any tab redirect to the initial route which is defined below.
            initialRouteName="Chats"
            screenOptions={{
                tabBarItemStyle: {
                    flex:1,
                    justifyContent:'center',
                },
                tabBarActiveTintColor: Colors[colorScheme].tint,
                tabBarStyle: {
                    backgroundColor:  Colors.lightDark.tint
                },
                // The indicator line which shows selected tab
                tabBarIndicatorStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    height: 2
                },
                tabBarLabelStyle: {
                    fontWeight: 'bold'
                },
                tabBarShowIcon: true,

            }}>

            <MainTab.Screen
                name="Camera"
                component={TabTwoScreen}
        
                options={{
                    
                    tabBarIcon: () => <Fontisto style={{}} name="camera" color={Colors[colorScheme].tint} size={20}/>,
                    tabBarLabel: () => null
                }}
            />

            <MainTab.Screen
                name="Chats"
                component={ChatScreen}
            />
            <MainTab.Screen
                name="Status"
                component={TabTwoScreen}
            />
            <MainTab.Screen
                name="Calls"
                component={TabTwoScreen}
            />
        </MainTab.Navigator>
    );
}

const styles = StyleSheet.create({
    CustomTabBar: {

    }
})

