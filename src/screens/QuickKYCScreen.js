import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import font from '../utils/fonts'
import LinkedComponent from '../assets/svg/Linked'
import NotLinkedComponent from '../assets/svg/NotLinked'
import { globalStyles } from '../utils/globalStyle'
const QuickKYCScreen = () => {
    const navigation = useNavigation()
    const [index, setIndex] = useState(1)
    return (
        <>
            <SafeAreaView
                style={globalStyles.safeView}
            />
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
                            Quick KYC</Text>
                    </View>
                </DropShadow>
                <Text style={{ fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, textAlign: 'center', marginTop: Height(25) }}>Quick KYC</Text>
                <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, textAlign: 'center', marginTop: Height(25) }}>Verify To Continue Playing For Cash</Text>
                <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, textAlign: 'center', marginTop: Height(10), opacity: 0.6 }}>Ensures You're Not From A Restricted State.</Text>
                <TouchableOpacity style={{ height: Height(65), width: Width(390), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderRadius: Width(10), borderColor: '#CECECE', paddingHorizontal: Width(22), alignSelf: 'center', marginTop: Height(35), backgroundColor: color.background }} onPress={() => setIndex(1)}>
                    <LinkedComponent size={Height(28)} />
                    <View style={{ marginLeft: Width(22) }}>
                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Mobile linked with Aadhar</Text>
                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6 }}>Verify with OTP on Digilocker</Text>
                    </View>
                    <Ionicons name={index !== 1 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} style={{ marginLeft: Width(90) }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: Height(80), width: Width(390), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderRadius: Width(10), borderColor: '#CECECE', paddingHorizontal: Width(22), alignSelf: 'center', marginTop: Height(22), backgroundColor: color.background }} onPress={() => setIndex(2)}>
                    <NotLinkedComponent size={Height(28)} />
                    <View style={{ marginLeft: Width(22) }}>
                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Mobile not linked with Aadhaar?</Text>
                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6, width: Width(200) }}>Upload ID proof (Aadhaar card, Voter ID, or Driving License)</Text>
                    </View>
                    <Ionicons name={index !== 2 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} style={{ marginLeft: Width(45) }} />
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('UploadIdProof')}>
                    <Text style={globalStyles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default QuickKYCScreen

const styles = StyleSheet.create({
})