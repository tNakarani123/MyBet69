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
import { globalStyles } from '../utils/globalStyle'
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
                style={globalStyles.safeView}
            />
            <SafeAreaView style={globalStyles.container}>
                <DropShadow style={globalStyles.shadow}>
                    <View style={globalStyles.contestHeaderView}>
                        <View style={globalStyles.contestRowView}>
                            <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                        <Text style={globalStyles.headerText}>Create New Contest</Text>
                        <View style={globalStyles.contestRowSubView}>
                            <Image source={require('../assets/images/gt.png')} style={globalStyles.teamImage} />
                            <Text style={globalStyles.headerTimeText}>23m</Text>
                            <Image source={require('../assets/images/mi.png')} style={globalStyles.teamImage} />
                        </View>
                    </View>
                </DropShadow>
                <View style={globalStyles.textView}>
                    <ContestCupComponent size={Height(25)} color={'#5556CA'} />
                    <View style={globalStyles.lineView} />
                    <TextInput style={styles.textInput} maxLength={10} placeholder='Contest Name' placeholderTextColor='#767676' onChangeText={(val) => setContestName(val)} value={contestName} />
                </View>
                <View style={globalStyles.textView}>
                    <ContestCupComponent size={Height(25)} color={'#5556CA'} />
                    <View style={globalStyles.lineView} />
                    <TextInput keyboardType='number-pad' style={styles.textInput} maxLength={10} placeholder='Contest Size' placeholderTextColor='#767676' onChangeText={(val) => setContestSize(val)} value={contestSize} />
                </View>
                <View style={globalStyles.textView}>
                    <ContestCupComponent size={Height(25)} color={'#5556CA'} />
                    <View style={globalStyles.lineView} />
                    <TextInput keyboardType='number-pad' style={styles.textInput} maxLength={10} placeholder='Entry Price' placeholderTextColor='#767676' onChangeText={(val) => setEntryPrize(val)} value={entryPrize} />
                </View>

                <View style={styles.view}>
                    <TouchableOpacity onPress={() => setCheck(!check)}>
                        {check === false ? <CheckEmptyComponent size={Height(18)} /> : <CheckComponent size={Height(18)} />}
                    </TouchableOpacity>
                    <Text style={styles.text}>Allow Multiple Terms Per User</Text>
                </View>

                <View style={styles.subView}>
                    <ContestCupComponent size={Height(30)} color={'white'} />
                    <View style={styles.poolView}>
                        <Text style={styles.subText}>Max Prize Pool</Text>
                        <Text style={styles.subText}>₹0</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ChooseNewContestPrize', { name: contestName, size: contestSize, prize: entryPrize })}>
                    <Text style={styles.btnText}>Choose Prize Breakup</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </>
    )
}

export default CreateNewContestScreen

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row', alignItems: 'center', marginLeft: Width(20), marginTop: Height(20)
    },
    subView: {
        height: Height(70), backgroundColor: '#5556CA', marginTop: Height(25), flexDirection: 'row', alignItems: 'center', paddingLeft: Width(50)
    },
    text: {
        fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: '#767676', marginLeft: Width(15)
    },
    subText: {
        fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.background
    },
    poolView: {
        marginLeft: Width(10)
    },
    btn: {
        height: Height(40), width: Width(240), backgroundColor: color.primaryText, alignSelf: 'center', marginTop: Height(150), justifyContent: 'center', alignItems: 'center', borderRadius: Width(10)
    },
    btnText: {
        fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background
    }
})