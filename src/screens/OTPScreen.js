import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { OTP } from 'react-native-otp-form';
import { useNavigation, } from '@react-navigation/native';
import { Height, Width } from '../utils/responsive';
import Ionicons from 'react-native-vector-icons/Ionicons'
import LogoComponent from '../assets/svg/Logo';



const OTPScreen = () => {
    const navigation = useNavigation()



    return (
        <ImageBackground style={{ flex: 1 }} source={require('../assets/images/background.png')}>
            <SafeAreaView style={styles.container}>
                <View style={{ alignItems: 'center', marginTop: Height(42) }}>
                    <LogoComponent height={Height(126)} width={Width(107)} />
                </View>

                <View style={{ height: Height(675), backgroundColor: 'white', marginTop: Height(42) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(25), marginLeft: Width(24) }}>
                        <Ionicons name='arrow-back' size={Height(35)} color='black' />
                        <Text style={{ fontSize: Height(44), fontFamily: 'Poppins-SemiBoldItalic', textAlign: 'center', marginLeft: Width(40), color: 'black' }}>Let’s PLAY!!</Text>
                    </View>
                    <OTP
                        codeCount={4}
                        otpStyles={{
                            backgroundColor: '#FAFAFA',
                            color: 'black',
                            marginBottom: Height(1),
                            borderColor: "#9F9F9F",
                            borderWidth: Height(3),
                            borderRadius: Width(10),
                            height: Height(60),
                            marginTop: Height(65),
                            marginLeft: Width(16)
                        }}

                    />
                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: '#6B69D4', textAlign: 'right', marginRight: Width(30), marginTop: Height(15) }}>Resend Code</Text>

                    <TouchableOpacity
                        style={{
                            height: Height(60), width: Width(390), alignSelf: 'center', borderRadius: Width(10), justifyContent: 'center', alignItems: 'center', backgroundColor: '#6B69D4', marginTop: Height(15)
                        }}
                        onPress={() => navigation.navigate('MoreInfo')}
                    >
                        <Text style={{ fontWeight: '500', fontSize: Height(18), color: 'white', position: 'absolute', fontFamily: 'Poppins-SemiBold', }}>
                            Continue
                        </Text>
                    </TouchableOpacity>

                </View>




            </SafeAreaView >
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    inner: {
        flex: 1,
        justifyContent: "space-evenly"
    },
    header: {
        fontSize: 17,
        textAlign: "center",
        marginTop: Height(7),
        color: 'black',
        fontFamily: 'Gilroy-SemiBold',
        opacity: 0.4
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },

});

export default OTPScreen;