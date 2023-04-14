import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import ContestCupComponent from '../assets/svg/ContestCup'
import font from '../utils/fonts'
import color from '../utils/color'
import { useNavigation } from '@react-navigation/native'
const EnterContestCodeScreen = () => {
    const navigation = useNavigation()
    const [contestCode, setContestCode] = useState()
    console.log({ contestCode });
    return (
        <>
            <SafeAreaView
                style={{ flex: 0, backgroundColor: 'white' }}
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
                    <View style={{ height: Height(165), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
                            <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>Enter Contest Code</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(15) }}>
                            <Image source={require('../assets/images/gt.png')} style={{ width: Width(65), height: Height(48) }} />
                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>23m</Text>
                            <Image source={require('../assets/images/mi.png')} style={{ width: Width(65), height: Height(48) }} />
                        </View>
                    </View>
                </DropShadow>
                <View style={styles.textView}>
                    <ContestCupComponent size={Height(25)} color={'#5556CA'} />
                    <View style={styles.lineView} />
                    <TextInput style={styles.textInput} maxLength={10} placeholder='Enter Contest Code' placeholderTextColor='#767676' onChangeText={(val) => setContestCode(val)} value={contestCode} />
                </View>
                <TouchableOpacity style={{ height: Height(40), width: Width(240), backgroundColor: color.primaryText, alignSelf: 'center', marginTop: Height(476), justifyContent: 'center', alignItems: 'center', borderRadius: Width(10) }} onPress={() => navigation.navigate('JoinContest')} >
                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>Join Contest</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default EnterContestCodeScreen

const styles = StyleSheet.create({
    textView: {
        height: Height(60),
        width: Width(390),
        borderWidth: Height(3),
        borderColor: color.primaryBorder,
        borderRadius: Width(10),
        alignSelf: 'center',
        marginTop: Height(25),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Width(28)
    },
    lineView: {
        height: Height(35),
        width: 1,
        backgroundColor: color.text,
        marginLeft: Width(12)
    },
    textInput: {
        marginLeft: Width(25),
        fontSize: Height(20),
        fontFamily: font.POPPINS_REGULAR,
        color: color.text,
        width: Width(250)
    },
})