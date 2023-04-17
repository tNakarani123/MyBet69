import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import { Height, Width } from '../utils/responsive'
import NotificationComponent from '../assets/svg/Notification'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
const upcomingMatch = [
    {
        id: 1,
        fansCode: 'Fanscode ECS Malta T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png'),
        time: '45m 52s',
        price: '₹2 Crores'
    },
    {
        id: 2,
        fansCode: 'Fanscode ECS Malta T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png'),
        time: '45m 52s',
        price: '₹2 Crores'
    },
    {
        id: 3,
        fansCode: 'Fanscode ECS Malta T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png'),
        time: '45m 52s',
        price: '₹2 Crores'
    },
    {
        id: 4,
        fansCode: 'Fanscode ECS Malta T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png'),
        time: '45m 52s',
        price: '₹2 Crores'
    },
    {
        id: 5,
        fansCode: 'Fanscode ECS Malta T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png'),
        time: '45m 52s',
        price: '₹2 Crores'
    }
]

const LiveMatch = [
    {
        id: 1,
        matchName: 'Indian premier league T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png'),
        time: 'Live'
    }
]

const CompleteMatch = [
    {
        id: 1,
        matchName: 'Indian premier league T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png'),
        time: 'Completed'
    }
]



const MyMatchesScreen = () => {
    const navigation = useNavigation()

    const [selected, setSelected] = useState('')
    const [index, setIndex] = useState(1)

    switch (selected) {
        case 'Live':
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
                            <View style={{ height: Height(90), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>My Matches</Text>
                            </View>
                        </DropShadow>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(10) }}>
                            <TouchableOpacity style={{ height: Height(35), width: Width(90), backgroundColor: index === 1 ? '#5556CA' : 'white', justifyContent: 'center', alignItems: 'center', borderRadius: Width(20) }} onPress={() => { setSelected(''), setIndex(1) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: index === 1 ? 'white' : '#5556CA' }}>Upcoming</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: Height(35), width: Width(90), backgroundColor: index === 2 ? '#5556CA' : 'white', justifyContent: 'center', alignItems: 'center', borderRadius: Width(20) }} onPress={() => { setIndex(2) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: index === 2 ? 'white' : '#5556CA' }}>Live</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: Height(35), width: Width(90), backgroundColor: index === 3 ? '#5556CA' : 'white', justifyContent: 'center', alignItems: 'center', borderRadius: Width(20) }} onPress={() => { setSelected('Completed'), setIndex(3) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: index === 3 ? 'white' : '#5556CA' }}>Completed</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            {LiveMatch.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={{ height: Height(180), width: Width(390), backgroundColor: 'white', borderRadius: Width(10), marginTop: Height(20), alignSelf: 'center' }} onPress={() => navigation.navigate('CreateContest')}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(5) }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.matchName}</Text>

                                        </View>
                                        <View style={{ height: Height(1), backgroundColor: '#D9D9D9', marginTop: Height(5), }} />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(10) }}>
                                            <View style={{}}>
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.teamOneName}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(10) }}>
                                                    <Image source={item.teamOneLogo} style={{ width: Width(65), height: Height(48) }} />
                                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginLeft: Width(15) }}>{item.teamOneShortName}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Octicons name='dot-fill' size={Height(20)} color='#FF0707' />
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(8) }}>{item.time}</Text>
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(25) }}>{item.teamTwoName}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(10) }}>
                                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginRight: Width(15) }}>{item.teamTwoShortName}</Text>
                                                    <Image source={item.teamTwoLogo} style={{ width: Width(65), height: Height(48) }} />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ height: Height(40), backgroundColor: '#F9F9F9', marginTop: Height(30), borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(17) }}>1 Team</Text>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(17) }}>1 Contest</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </SafeAreaView>
                </>
            )
        case 'Completed':
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
                            <View style={{ height: Height(90), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>My Matches</Text>
                            </View>
                        </DropShadow>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(10) }}>
                            <TouchableOpacity style={{ height: Height(35), width: Width(90), backgroundColor: index === 1 ? '#5556CA' : 'white', justifyContent: 'center', alignItems: 'center', borderRadius: Width(20) }} onPress={() => { setSelected(''), setIndex(1) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: index === 1 ? 'white' : '#5556CA' }}>Upcoming</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: Height(35), width: Width(90), backgroundColor: index === 2 ? '#5556CA' : 'white', justifyContent: 'center', alignItems: 'center', borderRadius: Width(20) }} onPress={() => { setSelected('Live'), setIndex(2) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: index === 2 ? 'white' : '#5556CA' }}>Live</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: Height(35), width: Width(90), backgroundColor: index === 3 ? '#5556CA' : 'white', justifyContent: 'center', alignItems: 'center', borderRadius: Width(20) }} onPress={() => { setIndex(3) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: index === 3 ? 'white' : '#5556CA', }}>Completed</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            {CompleteMatch.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={{ height: Height(180), width: Width(390), backgroundColor: 'white', borderRadius: Width(10), marginTop: Height(20), alignSelf: 'center' }} onPress={() => navigation.navigate('CompletedMatches', { data: item })}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(5) }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.matchName}</Text>

                                        </View>
                                        <View style={{ height: Height(1), backgroundColor: '#D9D9D9', marginTop: Height(5), }} />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(10) }}>
                                            <View style={{}}>
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.teamOneName}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(10) }}>
                                                    <Image source={item.teamOneLogo} style={{ width: Width(65), height: Height(48) }} />
                                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginLeft: Width(15) }}>{item.teamOneShortName}</Text>
                                                </View>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(8) }}>{item.time}</Text>
                                            </View>
                                            <View>
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(25) }}>{item.teamTwoName}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(10) }}>
                                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginRight: Width(15) }}>{item.teamTwoShortName}</Text>
                                                    <Image source={item.teamTwoLogo} style={{ width: Width(65), height: Height(48) }} />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ height: Height(40), backgroundColor: '#F9F9F9', marginTop: Height(30), borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(17) }}>1 Team</Text>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(17) }}>1 Contest</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
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
                            <View style={{ height: Height(90), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>My Matches</Text>
                            </View>
                        </DropShadow>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(10) }}>
                            <TouchableOpacity style={{ height: Height(35), width: Width(90), backgroundColor: index === 1 ? '#5556CA' : 'white', justifyContent: 'center', alignItems: 'center', borderRadius: Width(20) }} onPress={() => { setIndex(1) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: index === 1 ? 'white' : '#5556CA' }}>Upcoming</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: Height(35), width: Width(90), backgroundColor: index === 2 ? '#5556CA' : 'white', justifyContent: 'center', alignItems: 'center', borderRadius: Width(20) }} onPress={() => { setSelected('Live'), setIndex(2) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: index === 2 ? 'white' : '#5556CA', }}>Live</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: Height(35), width: Width(90), backgroundColor: index === 3 ? '#5556CA' : 'white', justifyContent: 'center', alignItems: 'center', borderRadius: Width(20) }} onPress={() => { setSelected('Completed'), setIndex(3) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: index === 3 ? 'white' : '#5556CA', }}>Completed</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView>
                            {upcomingMatch.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={{ height: Height(180), width: Width(390), backgroundColor: 'white', borderRadius: Width(10), marginTop: Height(20), alignSelf: 'center' }} onPress={() => navigation.navigate('CreateContest')}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(5) }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.fansCode}</Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Feather name='clock' size={Height(15)} color='#5556CA' />
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#5556CA', marginLeft: Width(15) }}>Lineups Out</Text>
                                            </View>
                                        </View>
                                        <View style={{ height: Height(1), backgroundColor: '#D9D9D9', marginTop: Height(5), }} />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(10) }}>
                                            <View style={{}}>
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.teamOneName}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(10) }}>
                                                    <Image source={item.teamOneLogo} style={{ width: Width(65), height: Height(48) }} />
                                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginLeft: Width(15) }}>{item.teamOneShortName}</Text>
                                                </View>
                                            </View>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>{item.time}</Text>
                                            <View>
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(25) }}>{item.teamTwoName}</Text>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(10) }}>
                                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginRight: Width(15) }}>{item.teamTwoShortName}</Text>
                                                    <Image source={item.teamTwoLogo} style={{ width: Width(65), height: Height(48) }} />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ height: Height(40), backgroundColor: '#F9F9F9', marginTop: Height(30), borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(17) }}>1 Team</Text>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(17) }}>1 Contest</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </SafeAreaView>
                </>
            )
        }
    }

}

export default MyMatchesScreen

const styles = StyleSheet.create({})