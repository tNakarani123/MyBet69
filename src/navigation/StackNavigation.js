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
import AllContestScreen from '../screens/AllContestScreen'
import CreateNewContestScreen from '../screens/CreateNewContestScreen'
import EnterContestCodeScreen from '../screens/EnterContestCodeScreen'
import ChooseNewContestPrizeScreen from '../screens/ChooseNewContestPrizeScreen'
import JoinContestScreen from '../screens/JoinContestScreen'
import CompletedMatchesScreen from '../screens/CompletedMatchesScreen'
import EditProfileScreen from '../screens/EditProfileScreen'
import SettingScreen from '../screens/SettingScreen'
import NewInfoScreen from '../screens/NewInfoEmailScreen'
import NewInfoEmailScreen from '../screens/NewInfoEmailScreen'
import NewInfoMobileScreen from '../screens/NewInfoMobileScreen'
import VerifyOTPScreen from '../screens/VerifyOTPScreen'
import CommunityGuidelineScreen from '../screens/CommunityGuidelineScreen'
import NotificationSettingScreen from '../screens/NotificationSettingScreen'
import LegalityScreen from '../screens/LegalityScreen'
import AboutUsScreen from '../screens/AboutUsScreen'
import PrivacySettingScreen from '../screens/PrivacySettingScreen'
import TermsConditionScreen from '../screens/TermsConditionScreen'
import ResponsiblePlayScreen from '../screens/ResponsiblePlayScreen'
import AddCashScreen from '../screens/AddCashScreen'
import QuickKYCScreen from '../screens/QuickKYCScreen'
import UploadIdProofScreen from '../screens/UploadIdProofScreen'
import AdharCardNumberScreen from '../screens/AdharCardNumberScreen'
import DigitalOnBoardingScreen from '../screens/DigitalOnBoardingScreen'
import CardDetailsScreen from '../screens/CardDetailsScreen'
import UploadCardImageScreen from '../screens/UploadCardImageScreen'
import SelectPaymentMethodScreen from '../screens/SelectPaymentMethodScreen'
import AddCardScreen from '../screens/AddCardScreen'
import WithDrawScreen from '../screens/WithDrawScreen'
import WithDrawCashPaymentScreen from '../screens/WithDrawCashPaymentScreen'
import MyTransactionScreen from '../screens/MyTransactionScreen'

const Stack = createNativeStackNavigator()
const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Tab' component={TabNavigation} />
            <Stack.Screen name='PlayerSelect' component={PlayerSelectScreen} />
            <Stack.Screen name='SignIn' component={SignInScreen} />
            <Stack.Screen name='SignUp' component={SignUpScreen} />
            <Stack.Screen name='OTP' component={OTPScreen} />
            <Stack.Screen name='MoreInfo' component={MoreInfoScreen} />
            <Stack.Screen name='Notification' component={NotificationScreen} />
            <Stack.Screen name='CreateContest' component={CreateContestScreen} />
            <Stack.Screen name='CreateTeam' component={CreateTeamScreen} />
            <Stack.Screen name='ChooseCaptain' component={ChooseCaptainScreen} />
            <Stack.Screen name='Contest' component={ContestScreen} />
            <Stack.Screen name='Preview' component={PreviewScreen} />
            <Stack.Screen name='AllContest' component={AllContestScreen} />
            <Stack.Screen name='CreateNewContest' component={CreateNewContestScreen} />
            <Stack.Screen name='EnterContestCode' component={EnterContestCodeScreen} />
            <Stack.Screen name='ChooseNewContestPrize' component={ChooseNewContestPrizeScreen} />
            <Stack.Screen name='JoinContest' component={JoinContestScreen} />
            <Stack.Screen name='CompletedMatches' component={CompletedMatchesScreen} />
            <Stack.Screen name='EditProfile' component={EditProfileScreen} />
            <Stack.Screen name='Setting' component={SettingScreen} />
            <Stack.Screen name='NewInfoEmail' component={NewInfoEmailScreen} />
            <Stack.Screen name='NewInfoMobile' component={NewInfoMobileScreen} />
            <Stack.Screen name='VerifyOTP' component={VerifyOTPScreen} />
            <Stack.Screen name='CommunityGuideline' component={CommunityGuidelineScreen} />
            <Stack.Screen name='NotificationSetting' component={NotificationSettingScreen} />
            <Stack.Screen name='Legality' component={LegalityScreen} />
            <Stack.Screen name='AboutUs' component={AboutUsScreen} />
            <Stack.Screen name='PrivacySetting' component={PrivacySettingScreen} />
            <Stack.Screen name='TermsCondition' component={TermsConditionScreen} />
            <Stack.Screen name='ResponsiblePay' component={ResponsiblePlayScreen} />
            <Stack.Screen name='AddCash' component={AddCashScreen} />
            <Stack.Screen name='QuickKYC' component={QuickKYCScreen} />
            <Stack.Screen name='UploadIdProof' component={UploadIdProofScreen} />
            <Stack.Screen name='AdharCardNumber' component={AdharCardNumberScreen} />
            <Stack.Screen name='DigitalOnboarding' component={DigitalOnBoardingScreen} />
            <Stack.Screen name='CardDetails' component={CardDetailsScreen} />
            <Stack.Screen name='UploadCardImage' component={UploadCardImageScreen} />
            <Stack.Screen name='SelectPaymentMethod' component={SelectPaymentMethodScreen} />
            <Stack.Screen name='AddCard' component={AddCardScreen} />
            <Stack.Screen name='WithDraw' component={WithDrawScreen} />
            <Stack.Screen name='WithDrawCashPayment' component={WithDrawCashPaymentScreen} />
            <Stack.Screen name='MyTransaction' component={MyTransactionScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation

const styles = StyleSheet.create({})