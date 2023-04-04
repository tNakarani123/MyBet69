import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';

import ProfileScreen from '../screens/ProfileScreen';

import { Height, Width } from '../utils/responsive';
// import HomeComponent from '../assets/images/Home';

// import ProfileComponent from '../assets/images/Profile';

import ContestScreen from '../screens/ContestScreen';
import WalletScreen from '../screens/WalletScreen';
import HomeActiveComponent from '../assets/svg/HomeActive';
import ProfileActiveComponent from '../assets/svg/ProfileActive';
import WalletComponent from '../assets/svg/Wallet';
import WalletActiveComponent from '../assets/svg/WalletActive';
import ContestActiveComponent from '../assets/svg/ContestActive';
import HomeComponent from '../assets/svg/Home';
import ProfileComponent from '../assets/svg/Profile';
import ContestComponent from '../assets/svg/Contest';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarStyle: { backgroundColor: '#5556CA', height: Height(80), marginBottom: Width(32), justifyContent: 'center', marginHorizontal: Width(20), borderRadius: Width(20), }, tabBarItemStyle: { height: Height(80), borderRadius: Width(20), }
        }}  >
            <Tab.Screen name="Home" component={HomeScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <HomeComponent size={Height(60)} /> : <HomeActiveComponent size={Height(60)} />
                        );
                    },
                    tabBarShowLabel: false
                })} />
            <Tab.Screen name="Contest" component={ContestScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <ContestComponent size={Height(60)} /> : <ContestActiveComponent size={Height(60)} />
                        );
                    },
                    tabBarShowLabel: false
                })}
            />
            <Tab.Screen name='Wallet' component={WalletScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <WalletComponent size={Height(60)} /> : <WalletActiveComponent size={Height(60)} />
                        );
                    },
                    tabBarShowLabel: false
                })}
            />
            <Tab.Screen name='Profile' component={ProfileScreen}
                options={() => ({
                    tabBarIcon: ({ focused }) => {
                        return (
                            !focused ? <ProfileComponent size={Height(60)} /> : <ProfileActiveComponent size={Height(60)} />

                        );
                    },
                    tabBarShowLabel: false
                })}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation

const styles = StyleSheet.create({})