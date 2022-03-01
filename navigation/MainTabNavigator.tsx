import * as React from 'react';

import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList } from '../types';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { Fontisto } from '@expo/vector-icons'
import { color } from 'react-native-reanimated';
import { View } from '../components/Themed';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();
const CustomTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator
            initialRouteName="Chats"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].background,
                tabBarStyle: {
                    backgroundColor: Colors[colorScheme].tint
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
                component={TabOneScreen}
                options={{
                    tabBarIcon: () => <Fontisto name="camera" color={Colors[colorScheme].background} size={20}/>,
                    tabBarLabel: () => null
                }}
            />

            <MainTab.Screen
                name="Chats"
                component={TabTwoScreen}
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

