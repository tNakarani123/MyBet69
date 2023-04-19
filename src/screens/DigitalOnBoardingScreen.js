import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../utils/color'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import font from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'
import { OTP } from 'react-native-otp-form';
import { globalStyles } from '../utils/globalStyle'
const DigitalOnBoardingScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView
                style={globalStyles.safeView}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={globalStyles.container}>

                <SafeAreaView style={globalStyles.container}>
                    <DropShadow style={globalStyles.shadow}>
                        <View style={globalStyles.headerView}>
                            <View style={globalStyles.headerSubView}>
                                <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                <MyBetComponent width={Width(102)} height={Height(15)} />
                                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                    <NotificationComponent size={Height(25)} />
                                </TouchableOpacity>
                            </View>
                            <Text style={globalStyles.headerText}>
                                Digital Onboarding</Text>
                        </View>
                    </DropShadow>
                    <Text style={{ fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, marginTop: Height(25), marginLeft: Width(25) }}>Digital Onboarding</Text>
                    <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6, marginHorizontal: Width(25), lineHeight: Height(18), letterSpacing: 0.02, marginTop: Height(10) }}>
                        UIDAI has sent a temporary OTP to your mobile ending in *******6110(valid for 10 mins).
                    </Text>
                    <OTP
                        codeCount={4}
                        otpStyles={styles.otpView}
                    />
                    <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('CardDetails')}>
                        <Text style={globalStyles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    )
}

export default DigitalOnBoardingScreen

const styles = StyleSheet.create({
    otpView: {
        backgroundColor: color.background,
        color: color.text,
        marginBottom: Height(1),
        borderColor: color.primaryBorder,
        borderWidth: Height(3),
        borderRadius: Width(10),
        height: Height(60),
        marginTop: Height(65),
        marginLeft: Width(16)
    },
})