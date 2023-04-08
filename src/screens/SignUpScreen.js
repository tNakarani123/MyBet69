import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LogoComponent from '../assets/svg/Logo'
import { Height, Width } from '../utils/responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import color from '../utils/color'
import font from '../utils/fonts'
const SignUpScreen = () => {
    const navigation = useNavigation()
    const [number, setNumber] = useState()

    console.log({ number });
    return (
        <ImageBackground style={styles.imageBack} source={require('../assets/images/background.png')}>
            <SafeAreaView style={styles.container}>
                <View style={styles.logo}>
                    <LogoComponent height={Height(126)} width={Width(107)} />
                </View>
                <View style={styles.mainView}>
                    <Text style={styles.letsPlayText}>Let’s PLAY!!</Text>
                    <Text style={styles.getYouLoginText}>Let’s Sign You Up</Text>
                    <View style={styles.textView}>
                        <MaterialIcons name='phone' size={Height(25)} color='black' />
                        <View style={styles.lineView} />
                        <TextInput keyboardType='number-pad' style={styles.textInput} maxLength={10} value={number} onChangeText={(val) => setNumber(val)} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OTP')}>
                        <Text style={styles.buttonText}>Generate OTP</Text>
                    </TouchableOpacity>
                    <Text style={styles.registrationText} onPress={() => navigation.navigate('SignIn')}>Login</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    imageBack: {
        flex: 1
    },
    container: {
        flex: 1
    },
    logo: {
        alignItems: 'center',
        marginTop: Height(42)
    },
    mainView: {
        height: Height(675),
        backgroundColor: color.background,
        marginTop: Height(62),
        borderTopLeftRadius: Width(20),
        borderTopRightRadius: Width(20)
    },
    letsPlayText: {
        fontSize: Height(44),
        fontFamily: font.POPPINS_SEMI_BOLD_ITALIC,
        textAlign: 'center',
        marginTop: Height(25),
        color: color.text
    },
    getYouLoginText: {
        fontSize: Height(20),
        fontFamily: font.POPPINS_REGULAR,
        textAlign: 'center',
        marginTop: Height(15),
        color: color.text
    },
    textView: {
        height: Height(60),
        width: Width(390),
        borderWidth: Height(3),
        borderColor: color.primaryBorder,
        borderRadius: Width(10),
        alignSelf: 'center',
        marginTop: Height(25),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Width(28)
    },
    lineView: {
        height: Height(35),
        width: 1,
        backgroundColor: color.text,
        marginLeft: Width(12)
    },
    textInput: {
        marginLeft: Width(25),
        fontSize: Height(20),
        fontFamily: font.POPPINS_REGULAR,
        color: color.text,
        width: Width(250)
    },
    button: {
        height: Height(60),
        width: Width(390),
        backgroundColor: color.primaryButton,
        borderRadius: Width(10),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Height(30)
    },
    buttonText: {
        fontSize: Height(20),
        fontFamily: font.POPPINS_SEMI_BOLD,
        color: color.background
    },
    registrationText: {
        fontSize: Height(20),
        fontFamily: font.POPPINS_REGULAR,
        marginTop: Height(30),
        marginLeft: Width(20),
        color: color.primaryText
    }
})