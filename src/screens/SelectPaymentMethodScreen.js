import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../utils/globalStyle'
import DropShadow from 'react-native-drop-shadow'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../utils/responsive'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { useNavigation } from '@react-navigation/native'
import PaymentComponent from '../assets/svg/Paytm'
import GPayComponent from '../assets/svg/GPay'
import UpiComponent from '../assets/svg/Upi'
import color from '../utils/color'
import MasterCardComponent from '../assets/svg/MasterCard'
import font from '../utils/fonts'
const SelectPaymentMethodScreen = () => {
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
                            Select Payment Method</Text>
                    </View>
                </DropShadow>

                <TouchableOpacity style={styles.btn} onPress={() => setIndex(1)}>
                    <PaymentComponent width={Width(60)} height={Height(18)} />
                    <Ionicons name={index !== 1 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} color='' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setIndex(2)}>
                    <GPayComponent width={Width(70)} height={Height(26)} />
                    <Ionicons name={index !== 2 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={() => setIndex(3)}>
                    <UpiComponent width={Width(65)} height={Height(19)} />
                    <Ionicons name={index !== 3 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.view} onPress={() => setIndex(4)}>
                    <View style={styles.subView}>
                        <MasterCardComponent width={Width(42)} height={Height(34)} />
                        <Text style={styles.text}>**** **** **** 4514</Text>
                        <Ionicons name={index !== 4 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} />
                    </View>
                    <TouchableOpacity style={styles.cardBtn} onPress={() => navigation.navigate('AddCard')}>
                        <Text style={styles.text}>Add New Card</Text>
                    </TouchableOpacity>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    )
}

export default SelectPaymentMethodScreen

const styles = StyleSheet.create({
    btn: {
        height: Height(75), width: Width(395), borderRadius: Width(10), flexDirection: 'row', backgroundColor: color.background, alignSelf: 'center', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(25), paddingHorizontal: Width(40)
    },
    view: {
        height: Height(175), width: Width(395), backgroundColor: color.background, borderRadius: Width(10), marginTop: Height(25), alignSelf: 'center'
    },
    subView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(40), marginTop: Height(20)
    },
    text: {
        fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: '#5556CA'
    },
    cardBtn: {
        height: Height(62), width: Width(225), borderWidth: Height(2), justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: Height(30), borderRadius: Width(10), borderColor: '#5556CA'
    },
})