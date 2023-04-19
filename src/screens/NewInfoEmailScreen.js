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
import { globalStyles } from '../utils/globalStyle'
const NewInfoEmailScreen = () => {
    const [email, setEmail] = useState()
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
                            <Text style={globalStyles.headerText}>Enter New Email</Text>
                        </View>
                    </DropShadow>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text, marginLeft: Width(20), marginTop: Height(25) }}>Enter New Email :</Text>
                    <View style={globalStyles.textView}>
                        <EmailComponent size={Height(35)} />
                        <View style={globalStyles.lineView} />
                        <TextInput style={globalStyles.textInput} value={email} onChangeText={(val) => setEmail(val)} />
                    </View>
                    <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('VerifyOTP')}>
                        <Text style={globalStyles.buttonText}>GET OTP</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    )
}

export default NewInfoEmailScreen

const styles = StyleSheet.create({
})