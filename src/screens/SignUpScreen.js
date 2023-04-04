import { ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LogoComponent from '../assets/svg/Logo'
import { Height, Width } from '../utils/responsive'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
const SignUpScreen = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../assets/images/background.png')}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', marginTop: Height(92) }}>
                    <LogoComponent height={Height(258)} width={Width(220)} />
                </View>
                <View style={{ height: Height(465), backgroundColor: 'white', marginTop: Height(62), borderTopLeftRadius: Width(20), borderTopRightRadius: Width(20) }}>
                    <Text style={{ fontSize: Height(44), fontFamily: 'Poppins-SemiBoldItalic', textAlign: 'center', marginTop: Height(25), color: 'black' }}>Let’s PLAY!!</Text>
                    <Text style={{ fontSize: Height(20), fontFamily: 'Poppins-Regular', textAlign: 'center', marginTop: Height(15), color: 'black' }}>Let’s Sign You Up</Text>
                    <View style={{ height: Height(60), width: Width(390), borderWidth: Height(3), borderColor: '#9F9F9F', borderRadius: Width(10), alignSelf: 'center', marginTop: Height(25), flexDirection: 'row', alignItems: 'center', paddingHorizontal: Width(28) }}>
                        <MaterialIcons name='phone' size={Height(25)} color='black' />
                        <View style={{
                            height: Height(35),
                            width: 1,
                            backgroundColor: 'black', marginLeft: Width(12)
                        }}

                        />
                        <TextInput keyboardType='number-pad' style={{ marginLeft: Width(25), fontSize: Height(20), fontFamily: 'Poppins-Regular', color: 'black', width: Width(250) }} />
                    </View>
                    <TouchableOpacity style={{ height: Height(60), width: Width(390), backgroundColor: '#6B69D4', borderRadius: Width(10), alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: Height(30) }} onPress={() => navigation.navigate('OTP')}>
                        <Text style={{ fontSize: Height(20), fontFamily: 'Poppins-SemiBold', color: 'white' }}>Generate OTP</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: Height(20), fontFamily: 'Poppins-Regular', marginTop: Height(30), marginLeft: Width(20), color: '#5556CA' }} onPress={() => navigation.navigate('SignIn')}>Login</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})