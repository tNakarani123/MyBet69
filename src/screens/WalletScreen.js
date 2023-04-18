import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NotificationComponent from '../assets/svg/Notification'
import font from '../utils/fonts'

const WalletScreen = () => {
    return (
        <>
            <SafeAreaView
                style={{ flex: 0, backgroundColor: color.background }}
            />
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
                        <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>Wallet</Text>
                    </View>
                </DropShadow>
                <View style={{ width: Width(315), height: Height(100), backgroundColor: color.background, alignSelf: 'center', borderRadius: Width(20), marginTop: Height(25) }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, textAlign: 'center', marginTop: Height(20) }}>Total Amount</Text>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, textAlign: 'center', marginTop: Height(10) }}>₹ 700</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default WalletScreen

const styles = StyleSheet.create({})