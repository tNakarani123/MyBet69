import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { OTP } from 'react-native-otp-form';
import { useNavigation, } from '@react-navigation/native';
import { Height, Width } from '../utils/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LogoComponent from '../assets/svg/Logo';
import color from '../utils/color';
import font from '../utils/fonts';
import { globalStyles } from '../utils/globalStyle';

const OTPScreen = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground style={globalStyles.container} source={require('../assets/images/background.png')}>
            <SafeAreaView style={globalStyles.container}>
                <View style={globalStyles.logo}>
                    <LogoComponent height={Height(126)} width={Width(107)} />
                </View>
                <View style={styles.mainView}>
                    <View style={styles.view}>
                        <Ionicons name='arrow-back' size={Height(35)} color='black' onPress={() => navigation.goBack()} />
                        <Text style={styles.letsPlayText}>Let’s PLAY!!</Text>
                    </View>
                    <OTP
                        codeCount={4}
                        otpStyles={styles.otpView}
                    />
                    <Text style={styles.resendText}>Resend Code</Text>
                    <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('MoreInfo')}>
                        <Text style={globalStyles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({

    mainView: {
        height: Height(675),
        backgroundColor: color.background,
        marginTop: Height(42),
        borderTopLeftRadius: Width(20),
        borderTopRightRadius: Width(20)
    },
    letsPlayText: {
        fontSize: Height(44),
        fontFamily: font.POPPINS_SEMI_BOLD_ITALIC,
        textAlign: 'center',
        marginLeft: Width(40),
        color: color.text
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Height(25),
        marginLeft: Width(24)
    },
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
});

export default OTPScreen;