import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import font from '../utils/fonts'
import color from '../utils/color'
import ContestCupComponent from '../assets/svg/ContestCup'
import CheckEmptyComponent from '../assets/svg/CheckEmpty'
import CheckComponent from '../assets/svg/Check'
const CreateNewContestScreen = () => {
    const navigation = useNavigation()
    const [check, setCheck] = useState(false)
    const [contestName, setContestName] = useState()
    const [contestSize, setContestSize] = useState()
    const [entryPrize, setEntryPrize] = useState()

    console.log({ contestName });
    console.log({ contestSize });
    console.log({ entryPrize });

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
                        <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>Create New Contest</Text>
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
                    <TextInput style={styles.textInput} maxLength={10} placeholder='Contest Name' placeholderTextColor='#767676' onChangeText={(val) => setContestName(val)} value={contestName} />
                </View>
                <View style={styles.textView}>
                    <ContestCupComponent size={Height(25)} color={'#5556CA'} />
                    <View style={styles.lineView} />
                    <TextInput keyboardType='number-pad' style={styles.textInput} maxLength={10} placeholder='Contest Size' placeholderTextColor='#767676' onChangeText={(val) => setContestSize(val)} value={contestSize} />
                </View>
                <View style={styles.textView}>
                    <ContestCupComponent size={Height(25)} color={'#5556CA'} />
                    <View style={styles.lineView} />
                    <TextInput keyboardType='number-pad' style={styles.textInput} maxLength={10} placeholder='Entry Price' placeholderTextColor='#767676' onChangeText={(val) => setEntryPrize(val)} value={entryPrize} />
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: Width(20), marginTop: Height(20) }}>
                    <TouchableOpacity onPress={() => setCheck(!check)}>
                        {check === false ? <CheckEmptyComponent size={Height(18)} /> : <CheckComponent size={Height(18)} />}
                    </TouchableOpacity>
                    <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: '#767676', marginLeft: Width(15) }}>Allow Multiple Terms Per User</Text>
                </View>

                <View style={{ height: Height(70), backgroundColor: '#5556CA', marginTop: Height(25), flexDirection: 'row', alignItems: 'center', paddingLeft: Width(50) }}>
                    <ContestCupComponent size={Height(30)} color={'white'} />
                    <View style={{ marginLeft: Width(10) }}>
                        <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>Max Prize Pool</Text>
                        <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>₹0</Text>
                    </View>
                </View>

                <TouchableOpacity style={{ height: Height(40), width: Width(240), backgroundColor: color.primaryText, alignSelf: 'center', marginTop: Height(150), justifyContent: 'center', alignItems: 'center', borderRadius: Width(10) }} onPress={() => navigation.navigate('ChooseNewContestPrize', { name: contestName, size: contestSize, prize: entryPrize })}>
                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>Choose Prize Breakup</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    )
}

export default CreateNewContestScreen

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