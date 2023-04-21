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
                <Text style={[{ fontSize: Height(20), marginTop: Height(25) }, styles.text]}>Quick KYC</Text>
                <Text style={[{ fontSize: Height(16), marginTop: Height(25) }, styles.text]}>Verify To Continue Playing For Cash</Text>
                <Text style={styles.subText}>Ensures You're Not From A Restricted State.</Text>
                <TouchableOpacity style={styles.firstBtn} onPress={() => setIndex(1)}>
                    <LinkedComponent size={Height(28)} />
                    <View style={styles.left}>
                        <Text style={styles.btnText}>Mobile linked with Aadhar</Text>
                        <Text style={styles.btnSubText}>Verify with OTP on Digilocker</Text>
                    </View>
                    <Ionicons name={index !== 1 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} style={styles.leftSub1} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.secBtn} onPress={() => setIndex(2)}>
                    <NotLinkedComponent size={Height(28)} />
                    <View style={styles.left}>
                        <Text style={styles.btnText}>Mobile not linked with Aadhaar?</Text>
                        <Text style={[{ width: Width(200) }, styles.btnSubText]}>Upload ID proof (Aadhaar card, Voter ID, or Driving License)</Text>
                    </View>
                    <Ionicons name={index !== 2 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} style={styles.leftsub2} />
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
    text: {
        fontFamily: font.POPPINS_SEMI_BOLD, textAlign: 'center'
    },
    subText: {
        fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, textAlign: 'center', marginTop: Height(10), opacity: 0.6
    },
    firstBtn: {
        height: Height(65), width: Width(390), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderRadius: Width(10), borderColor: '#CECECE', paddingHorizontal: Width(22), alignSelf: 'center', marginTop: Height(35), backgroundColor: color.background
    },
    secBtn: {
        height: Height(80), width: Width(390), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderRadius: Width(10), borderColor: '#CECECE', paddingHorizontal: Width(22), alignSelf: 'center', marginTop: Height(22), backgroundColor: color.background
    },
    btnText: {
        fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.text
    },
    btnSubText: {
        fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6
    },
    left: {
        marginLeft: Width(22)
    },
    leftSub1: {
        marginLeft: Width(90)
    },
    leftsub2: {
        marginLeft: Width(45)
    }
})