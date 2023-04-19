import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../utils/color'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import font from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../utils/globalStyle'
const CardDetailsScreen = () => {
    const navigation = useNavigation()
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
                            Pan Card Details</Text>
                    </View>
                </DropShadow>
                <Text style={{ fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, marginTop: Height(25), marginLeft: Width(25) }}>Enter Your PAN Card Details</Text>
                <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6, marginHorizontal: Width(25), lineHeight: Height(18), letterSpacing: 0.02, marginTop: Height(10) }}>
                    Please Enter Your PAN Card Details Below As They Appear On Your Card And Click On 'Submit'.
                </Text>
            </SafeAreaView>
        </>
    )
}

export default CardDetailsScreen

const styles = StyleSheet.create({})