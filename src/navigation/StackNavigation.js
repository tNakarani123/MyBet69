import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import OTPScreen from '../screens/OTPScreen'
import MoreInfoScreen from '../screens/MoreInfoScreen'
import TabNavigation from './TabNavigation'
import NotificationScreen from '../screens/NotificationScreen'
import CreateContestScreen from '../screens/CreateContestScreen'
import CreateTeamScreen from '../screens/CreateTeamScreen'
import PlayerSelectScreen from '../screens/PlayerSelectScreen'
import ChooseCaptainScreen from '../screens/ChooseCaptainScreen'
import ContestScreen from '../screens/ContestScreen'
import PreviewScreen from '../screens/PreviewScreen'

const Stack = createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='PlayerSelect' component={PlayerSelectScreen} />
            <Stack.Screen name='Tab' component={TabNavigation} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='OTP' component={OTPScreen} />
            <Stack.Screen name='MoreInfo' component={MoreInfoScreen} />
            <Stack.Screen name='Notification' component={NotificationScreen} />
            <Stack.Screen name='CreateContest' component={CreateContestScreen} />
            <Stack.Screen name='CreateTeam' component={CreateTeamScreen} />
            <Stack.Screen name='ChooseCaptain' component={ChooseCaptainScreen} />
            <Stack.Screen name='Contest' component={ContestScreen} />
            <Stack.Screen name='Preview' component={PreviewScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})