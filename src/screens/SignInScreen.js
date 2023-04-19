import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LogoComponent from '../assets/svg/Logo'
import { Height, Width } from '../utils/responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import color from '../utils/color'
import font from '../utils/fonts'
import { globalStyles } from '../utils/globalStyle'
const SignInScreen = () => {

    const navigation = useNavigation()
    const [number, setNumber] = useState()

    console.log({ number });

    return (
        <ImageBackground style={globalStyles.container} source={require('../assets/images/background.png')}>
            <SafeAreaView style={globalStyles.container}>
                <View style={globalStyles.logo}>
                    <LogoComponent height={Height(126)} width={Width(107)} />
                </View>
                <View style={styles.mainView}>
                    <Text style={styles.letsPlayText}>Let’s PLAY!!</Text>
                    <Text style={styles.getYouLoginText}>Get You Login</Text>
                    <View style={globalStyles.textView}>
                        <MaterialIcons name='phone' size={Height(25)} color='black' />
                        <View style={globalStyles.lineView} />
                        <TextInput keyboardType='number-pad' style={globalStyles.textInput} maxLength={10} value={number} onChangeText={(val) => setNumber(val)} />
                    </View>
                    <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('OTP')}>
                        <Text style={globalStyles.buttonText}>Generate OTP</Text>
                    </TouchableOpacity>
                    <Text style={styles.registrationText} onPress={() => navigation.navigate('SignUp')}>Registration</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
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
    registrationText: {
        fontSize: Height(20),
        fontFamily: font.POPPINS_REGULAR,
        marginTop: Height(30),
        marginLeft: Width(20),
        color: color.primaryText
    }
})