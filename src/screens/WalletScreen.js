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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { globalStyles } from '../utils/globalStyle'
const WalletScreen = () => {
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
                        <Text style={globalStyles.headerText}>Wallet</Text>
                    </View>
                </DropShadow>
                <View style={{ width: Width(315), height: Height(100), backgroundColor: color.background, alignSelf: 'center', borderRadius: Width(20), marginTop: Height(25) }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, textAlign: 'center', marginTop: Height(20) }}>Total Amount</Text>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, textAlign: 'center', marginTop: Height(10) }}>₹ 700</Text>
                </View>
                <View style={{ height: Height(70), width: Width(390), borderWidth: Height(3), borderRadius: Width(10), alignSelf: 'center', borderColor: '#9F9F9F', marginTop: Height(25), justifyContent: 'center', paddingHorizontal: Width(25) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text }}>Amount Added</Text>
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text }}>₹ 100</Text>
                        </View>
                        <TouchableOpacity style={{ height: Height(40), width: Width(120), backgroundColor: '#5556CA', borderRadius: Width(5), justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('AddCash')}>
                            <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>Add Cash +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: Height(70), width: Width(390), borderWidth: Height(3), borderRadius: Width(10), alignSelf: 'center', borderColor: '#9F9F9F', marginTop: Height(25), justifyContent: 'center', paddingHorizontal: Width(25) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text }}>Winnings</Text>
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text }}>₹ 100</Text>
                        </View>
                        <TouchableOpacity style={{ height: Height(40), width: Width(125), backgroundColor: '#5556CA', borderRadius: Width(5), justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>Withdraw Cash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: Height(70), width: Width(390), borderWidth: Height(3), borderRadius: Width(10), alignSelf: 'center', borderColor: '#9F9F9F', marginTop: Height(25), justifyContent: 'center', paddingHorizontal: Width(25) }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text }}>Cash Bonus</Text>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text }}>₹ 500</Text>
                </View>
                <View style={{ height: Height(70), width: Width(390), borderWidth: Height(3), borderRadius: Width(10), alignSelf: 'center', borderColor: '#9F9F9F', marginTop: Height(25), justifyContent: 'space-between', paddingHorizontal: Width(25), flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text }}>My Transaction</Text>
                    <MaterialIcons name='arrow-right' size={Height(25)} color={color.text} />
                </View>
                <View style={{ height: Height(95), width: Width(390), borderWidth: Height(3), borderRadius: Width(10), alignSelf: 'center', borderColor: '#9F9F9F', marginTop: Height(25), justifyContent: 'space-between', paddingHorizontal: Width(25), flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text }}>My Transaction</Text>
                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: '#7E7E7E' }}>Add/Remove Cards, Wallets, Etc.</Text>
                    </View>
                    <MaterialIcons name='arrow-right' size={Height(25)} color={color.text} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default WalletScreen

const styles = StyleSheet.create({})