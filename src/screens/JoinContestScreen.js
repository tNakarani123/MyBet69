import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import font from '../utils/fonts'
import color from '../utils/color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { globalStyles } from '../utils/globalStyle'
const JoinContestScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    console.log({ route });
    return (
        <>
            <SafeAreaView
                style={globalStyles.safeView}
            />
            <SafeAreaView style={globalStyles.container}>
                <DropShadow style={globalStyles.shadow}>
                    <View style={{ height: Height(165), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
                            <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                        <Text style={globalStyles.headerText}>Join Contest</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(15) }}>
                            <Image source={require('../assets/images/gt.png')} style={{ width: Width(65), height: Height(48) }} />
                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>23m</Text>
                            <Image source={require('../assets/images/mi.png')} style={{ width: Width(65), height: Height(48) }} />
                        </View>
                    </View>
                </DropShadow>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(25), marginTop: Height(25) }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Max Prize Pool</Text>
                        <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text }}>₹{route.params?.data.params.prize}</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Spots</Text>
                        <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text }}>5</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Entry</Text>
                        <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text }}>{route.params?.data.params.size}</Text>
                    </View>
                </View>
                <View style={{
                    height: Height(50), width: Width(350), borderWidth: Height(1), borderStyle: 'dashed', borderRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(12), alignSelf: 'center', marginTop: Height(10)
                }}>
                    < Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text }}> Share Contest Code</Text>
                    <MaterialIcons name='content-copy' size={Height(24)} color='black' />
                </View>
                <TouchableOpacity style={{
                    height: Height(50), width: Width(350), borderWidth: Height(1), borderRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: Width(12), alignSelf: 'center', marginTop: Height(10)
                }}>
                    <MaterialIcons name='share' size={Height(24)} color='black' />
                    < Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text, marginLeft: Width(5) }}> More option</Text>
                </TouchableOpacity>
                < Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text, alignSelf: 'center', marginTop: Height(20) }}> Share On My Bet 69</Text>
            </SafeAreaView >
        </>
    )
}

export default JoinContestScreen

const styles = StyleSheet.create({})