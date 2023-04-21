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
                <View style={styles.tView}>
                    <Text style={[{ marginTop: Height(20) }, styles.tText]}>Total Amount</Text>
                    <Text style={[{ marginTop: Height(10) }, styles.tText]}>₹ 700</Text>
                </View>
                <View style={styles.view}>
                    <View style={styles.subMainView}>
                        <View style={styles.start}>
                            <Text style={styles.text}>Amount Added</Text>
                            <Text style={styles.text}>₹ 100</Text>
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('AddCash')}>
                            <Text style={styles.btnText}>Add Cash +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view}>
                    <View style={styles.subMainView}>
                        <View style={styles.start}>
                            <Text style={styles.text}>Winnings</Text>
                            <Text style={styles.text}>₹ 100</Text>
                        </View>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.btnText}>Withdraw Cash</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text style={styles.text}>Cash Bonus</Text>
                    <Text style={styles.text}>₹ 500</Text>
                </View>
                <View style={[{ height: Height(70), }, styles.trView]}>
                    <Text style={styles.text}>My Transaction</Text>
                    <MaterialIcons name='arrow-right' size={Height(25)} color={color.text} />
                </View>
                <View style={[{ height: Height(95), }, styles.trView]}>
                    <View>
                        <Text style={styles.text}>My Transaction</Text>
                        <Text style={styles.addText}>Add/Remove Cards, Wallets, Etc.</Text>
                    </View>
                    <MaterialIcons name='arrow-right' size={Height(25)} color={color.text} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default WalletScreen

const styles = StyleSheet.create({
    tView: {
        width: Width(315), height: Height(100), backgroundColor: color.background, alignSelf: 'center', borderRadius: Width(20), marginTop: Height(25)
    },
    tText: {
        fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, textAlign: 'center', marginTop: Height(20)
    },
    view: {
        height: Height(70), width: Width(390), borderWidth: Height(3), borderRadius: Width(10), alignSelf: 'center', borderColor: '#9F9F9F', marginTop: Height(25), justifyContent: 'center', paddingHorizontal: Width(25)
    },
    subView: {
        borderWidth: Height(3), borderRadius: Width(10), alignSelf: 'center', borderColor: '#9F9F9F', marginTop: Height(25), justifyContent: 'space-between', paddingHorizontal: Width(25), flexDirection: 'row', alignItems: 'center'
    },
    trView: {
        width: Width(390), borderWidth: Height(3), borderRadius: Width(10), alignSelf: 'center', borderColor: '#9F9F9F', marginTop: Height(25), justifyContent: 'space-between', paddingHorizontal: Width(25), flexDirection: 'row', alignItems: 'center'
    },
    subMainView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    start: {
        alignItems: 'flex-start'
    },
    text: {
        fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text
    },
    btn: {
        height: Height(40), width: Width(125), backgroundColor: '#5556CA', borderRadius: Width(5), justifyContent: 'center', alignItems: 'center'
    },
    btnText: {
        fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background
    },
    addText: {
        fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: '#7E7E7E'
    }

})