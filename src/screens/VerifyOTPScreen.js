import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { OTP } from 'react-native-otp-form';
import color from '../utils/color'
import font from '../utils/fonts'
const VerifyOTPScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView
                style={{ flex: 0, backgroundColor: 'white' }}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <DropShadow style={{
                        shadowColor: "#000000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.17,
                        shadowRadius: 3.05,
                        elevation: 4
                    }}>
                        <View style={{ height: Height(90), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                <MyBetComponent width={Width(102)} height={Height(15)} />
                                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                    <NotificationComponent size={Height(25)} />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>Enter OTP</Text>
                        </View>
                    </DropShadow>
                    <OTP
                        codeCount={4}
                        otpStyles={styles.otpView}
                    />
                    <Text style={styles.resendText}>Resend Code</Text>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.buttonText}>Verify Code</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    )
}

export default VerifyOTPScreen

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
    resendText: {
        fontSize: Height(14),
        fontFamily: font.POPPINS_SEMI_BOLD,
        color: color.primaryText,
        textAlign: 'right',
        marginRight: Width(30),
        marginTop: Height(15)
    },
    button: {
        height: Height(60),
        width: Width(390),
        alignSelf: 'center',
        borderRadius: Width(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primaryButton,
        position: 'absolute',
        bottom: 0,
        marginBottom: Height(60)
    },
    buttonText: {
        fontWeight: '500',
        fontSize: Height(18),
        color: 'white',
        position: 'absolute',
        fontFamily: font.POPPINS_SEMI_BOLD,
    }
})