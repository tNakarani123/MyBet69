import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import font from '../utils/fonts'
import color from '../utils/color'
import EmailComponent from '../assets/svg/Email'
const NewInfoEmailScreen = () => {
    const [email, setEmail] = useState()
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
                            <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>Enter New Email</Text>
                        </View>
                    </DropShadow>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text, marginLeft: Width(20), marginTop: Height(25) }}>Enter New Email :</Text>
                    <View style={styles.textView}>
                        <EmailComponent size={Height(35)} />
                        <View style={styles.lineView} />
                        <TextInput style={styles.textInput} value={email} onChangeText={(val) => setEmail(val)} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('VerifyOTP')}>
                        <Text style={styles.buttonText}>GET OTP</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    )
}

export default NewInfoEmailScreen

const styles = StyleSheet.create({
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
        position: 'absolute',
        bottom: 0,
        marginBottom: Height(60)
    },
    buttonText: {
        fontSize: Height(20),
        fontFamily: font.POPPINS_SEMI_BOLD,
        color: color.background
    },
})