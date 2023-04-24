import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../utils/globalStyle'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import PaymentComponent from '../assets/svg/Paytm'
import color from '../utils/color'
import GPayComponent from '../assets/svg/GPay'
import PhonePayComponent from '../assets/svg/PhonePay'
import MobiKwikComponent from '../assets/svg/MobiKwik'
import FreeChargeComponent from '../assets/svg/FreeCharge'
import UpiComponent from '../assets/svg/Upi'
const WithDrawCashPaymentScreen = () => {
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
                            Select Method for Withdraw Cash</Text>
                    </View>
                </DropShadow>
                <TouchableOpacity style={styles.btn} onPress={() => setIndex(1)}>
                    <PaymentComponent width={Width(60)} height={Height(18)} />
                    <Ionicons name={index !== 1 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} color='' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setIndex(2)}>
                    <PhonePayComponent size={Height(38)} />
                    <Ionicons name={index !== 2 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} color='' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setIndex(3)}>
                    <MobiKwikComponent width={Width(50)} height={Height(39)} />
                    <Ionicons name={index !== 3 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} color='' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setIndex(4)}>
                    <FreeChargeComponent size={Height(38)} />
                    <Ionicons name={index !== 4 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} color='' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setIndex(5)}>
                    <UpiComponent width={Width(65)} height={Height(19)} />
                    <Ionicons name={index !== 5 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} />
                </TouchableOpacity>

                <TouchableOpacity style={globalStyles.button} >
                    <Text style={globalStyles.buttonText}>WithDraw Cash</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default WithDrawCashPaymentScreen

const styles = StyleSheet.create({
    btn: {
        height: Height(75), width: Width(395), borderRadius: Width(10), flexDirection: 'row', backgroundColor: color.background, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(25), paddingHorizontal: Width(40)
    },
})