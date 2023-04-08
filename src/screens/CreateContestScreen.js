import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
const CreateContestScreen = () => {
    const navigation = useNavigation()
    const [select, setSelect] = useState('')
    const [index, setIndex] = useState(1)

    switch (select) {
        case 'MyContest':
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
                            <View style={{ height: Height(130), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white', zIndex: 0, position: 'absolute', width: Width(430) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(15) }}>
                                    <Image source={require('../assets/images/gt.png')} style={{ width: Width(65), height: Height(48) }} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>23m</Text>
                                    <Image source={require('../assets/images/mi.png')} style={{ width: Width(65), height: Height(48) }} />
                                </View>
                            </View>
                        </DropShadow>

                        <View style={{ height: Height(100), backgroundColor: '#6B69D4', zIndex: -1, position: 'relative', marginTop: Height(90), paddingTop: Height(50), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Width(20), alignItems: 'center' }}>
                            <TouchableOpacity style={{ borderBottomWidth: index === 1 ? Height(3) : null, paddingBottom: Height(5), borderRadius: Width(3), borderColor: 'white' }} onPress={() => { setSelect(''), setIndex(1) }}>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: index === 1 ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>Join Contests</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderBottomWidth: index === 2 ? Height(3) : null, paddingBottom: Height(5), borderRadius: Width(3), borderColor: 'white' }} onPress={() => setIndex(2)}>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: index === 2 ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>My Contest </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderBottomWidth: index === 3 ? Height(3) : null, paddingBottom: Height(5), borderRadius: Width(3), borderColor: 'white' }} onPress={() => { setSelect('MyTeams'), setIndex(3) }}>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: index === 2 ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>My Teams</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>MyContest</Text>
                    </SafeAreaView>
                </>
            )
        case 'MyTeams':
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
                            <View style={{ height: Height(130), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white', zIndex: 0, position: 'absolute', width: Width(430) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(15) }}>
                                    <Image source={require('../assets/images/gt.png')} style={{ width: Width(65), height: Height(48) }} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>23m</Text>
                                    <Image source={require('../assets/images/mi.png')} style={{ width: Width(65), height: Height(48) }} />
                                </View>
                            </View>
                        </DropShadow>

                        <View style={{ height: Height(100), backgroundColor: '#6B69D4', zIndex: -1, position: 'relative', marginTop: Height(90), paddingTop: Height(50), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Width(20), alignItems: 'center' }}>
                            <TouchableOpacity style={{ borderBottomWidth: index === 1 ? Height(3) : null, paddingBottom: Height(5), borderRadius: Width(3), borderColor: 'white' }} onPress={() => { setSelect(''), setIndex(1) }}>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: index === 1 ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>Join Contests</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderBottomWidth: index === 2 ? Height(3) : null, paddingBottom: Height(5), borderRadius: Width(3), borderColor: 'white' }} onPress={() => { setSelect('MyContest'), setIndex(2) }}>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: index === 2 ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>My Contest </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderBottomWidth: index === 3 ? Height(3) : null, paddingBottom: Height(5), borderRadius: Width(3), borderColor: 'white' }} onPress={() => setIndex(3)}>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: index === 3 ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>My Teams</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>My Teams</Text>
                    </SafeAreaView>
                </>
            )
        default: {
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
                            <View style={{ height: Height(130), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white', zIndex: 0, position: 'absolute', width: Width(430) }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(15) }}>
                                    <Image source={require('../assets/images/gt.png')} style={{ width: Width(65), height: Height(48) }} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>23m</Text>
                                    <Image source={require('../assets/images/mi.png')} style={{ width: Width(65), height: Height(48) }} />
                                </View>
                            </View>
                        </DropShadow>

                        <View style={{ height: Height(100), backgroundColor: '#6B69D4', zIndex: -1, position: 'relative', marginTop: Height(90), paddingTop: Height(50), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Width(20), alignItems: 'center' }}>
                            <TouchableOpacity style={{ borderBottomWidth: index === 1 ? Height(3) : null, paddingBottom: Height(5), borderRadius: Width(3), borderColor: 'white' }} onPress={() => setIndex(1)}>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: index === 1 ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>Join Contests</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderBottomWidth: index === 2 ? Height(3) : null, paddingBottom: Height(5), borderRadius: Width(3), borderColor: 'white' }} onPress={() => { setSelect('MyContest'), setIndex(2) }}>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: index === 2 ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>My Contest </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ borderBottomWidth: index === 3 ? Height(3) : null, paddingBottom: Height(5), borderRadius: Width(3), borderColor: 'white' }} onPress={() => { setSelect('MyTeams'), setIndex(3) }}>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: index === 3 ? 'white' : 'rgba(255, 255, 255, 0.6)' }}>My Teams</Text>
                            </TouchableOpacity>
                        </View>
                        <Text>Join Contest</Text>
                    </SafeAreaView>
                </>
            )
        }
    }


}

export default CreateContestScreen

const styles = StyleSheet.create({})