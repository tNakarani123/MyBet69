import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Height, Width } from '../utils/responsive'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DropShadow from "react-native-drop-shadow";
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
const scrollData = [
    {
        id: 1,
        matchName: 'Indian premier league T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png')
    },
    {
        id: 2,
        matchName: 'Indian premier league T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png')
    },
    {
        id: 3,
        matchName: 'Indian premier league T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png')
    }
]

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

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <ImageBackground style={{ flex: 1 }} source={require('../assets/images/background.png')}>
            <SafeAreaView

                style={{ flex: 0, backgroundColor: 'white' }}
            />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: Height(60), backgroundColor: 'white', borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25) }}>
                    <MyBetComponent width={Width(102)} height={Height(15)} />
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <NotificationComponent size={Height(25)} />
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'white', marginTop: Height(107), height: Height(800), borderTopLeftRadius: Width(20), borderTopRightRadius: Width(20) }}>
                    <ScrollView style={{ marginTop: Height(135), marginBottom: Height(200) }} showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(20) }}>TATA Indian premier league T20</Text>
                            <View style={{ height: Height(30), width: Width(40), backgroundColor: '#D9D9D9', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: Width(70), borderBottomLeftRadius: Width(70) }}>
                                <NotificationComponent size={Height(25)} />
                            </View>
                        </View>

                        <View style={{ marginTop: Height(15) }} >
                            <DropShadow
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                }}
                            >
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                    {
                                        scrollData.map((item, i) => {
                                            return (

                                                <TouchableOpacity key={i} style={{ height: Height(145), width: Width(335), backgroundColor: 'white', marginLeft: Width(50), borderRadius: Width(10), marginTop: Height(10) }} onPress={() => navigation.navigate('CreateContest')}>
                                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'black', marginTop: Height(5), marginLeft: Width(10) }}>{item.matchName}</Text>
                                                    <View style={{ height: Height(1), backgroundColor: '#D9D9D9', marginTop: Height(5), }} />
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(5) }}>
                                                        <View style={{}}>
                                                            <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.teamOneName}</Text>
                                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(3) }}>
                                                                <Image source={item.teamOneLogo} style={{ width: Width(65), height: Height(48) }} />
                                                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginLeft: Width(15) }}>{item.teamOneShortName}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                            <Octicons name='dot-fill' size={Height(20)} color='#FF0707' />
                                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(8) }}>Live</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(25) }}>{item.teamTwoName}</Text>
                                                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(3) }}>
                                                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginRight: Width(15) }}>{item.teamTwoShortName}</Text>
                                                                <Image source={item.teamTwoLogo} style={{ width: Width(65), height: Height(48) }} />
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={{ height: Height(30), backgroundColor: '#D9D9D9', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), marginTop: Height(22), flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={{ fontSize: Height(11), fontFamily: 'Poppins-Regular', color: 'black', marginLeft: Width(25) }}>Team<Text>(2)</Text></Text>
                                                        <Text style={{ fontSize: Height(11), fontFamily: 'Poppins-Regular', color: 'black', marginLeft: Width(25) }}>Contest<Text>(2)</Text></Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </ScrollView>
                            </DropShadow>
                        </View>
                        <View style={{ marginTop: Height(25), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(20) }}>Upcoming Matches</Text>
                            <View style={{ height: Height(30), width: Width(40), backgroundColor: '#D9D9D9', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: Width(70), borderBottomLeftRadius: Width(70) }}>
                                <NotificationComponent size={Height(25)} />
                            </View>
                        </View>
                        <View>
                            <DropShadow
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,

                                }}
                            >
                                <ScrollView>
                                    {
                                        upcomingMatch.map((item, i) => {
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
                                                        <View style={{ height: Height(20), width: Width(55), borderWidth: Height(1), borderColor: '#5556CA', justifyContent: 'center', alignItems: 'center', borderRadius: Width(3), marginLeft: Width(22) }}>
                                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#5556CA' }}>MEGA</Text>
                                                        </View>
                                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(17) }}>{item.price}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </ScrollView>
                            </DropShadow>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ position: 'absolute', marginTop: Height(100) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(50) }}>
                        <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-SemiBold', color: 'white' }}>My Matches</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Regular', color: 'white' }}>View All</Text>
                            <Ionicons name='arrow-forward' size={Height(20)} color='white' style={{ marginLeft: Width(5) }} />
                        </View>
                    </View>
                    <View style={{ height: Height(150), marginTop: Height(10) }}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: Height(150), }} >
                            {
                                scrollData.map((item, i) => {
                                    return (
                                        <DropShadow
                                            style={{
                                                shadowColor: "#000",
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 2,
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 3.84,
                                            }}
                                        >
                                            <TouchableOpacity key={i} style={{ height: Height(145), width: Width(335), backgroundColor: 'white', marginLeft: Width(50), borderRadius: Width(10) }} onPress={() => navigation.navigate('CreateContest')}>
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'black', marginTop: Height(5), marginLeft: Width(10) }}>{item.matchName}</Text>
                                                <View style={{ height: Height(1), backgroundColor: '#D9D9D9', marginTop: Height(5), }} />
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(5) }}>
                                                    <View style={{}}>
                                                        <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.teamOneName}</Text>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(3) }}>
                                                            <Image source={item.teamOneLogo} style={{ width: Width(65), height: Height(48) }} />
                                                            <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginLeft: Width(15) }}>{item.teamOneShortName}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Octicons name='dot-fill' size={Height(20)} color='#FF0707' />
                                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(8) }}>Live</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(25) }}>{item.teamTwoName}</Text>
                                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(3) }}>
                                                            <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginRight: Width(15) }}>{item.teamTwoShortName}</Text>
                                                            <Image source={item.teamTwoLogo} style={{ width: Width(65), height: Height(48) }} />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={{ height: Height(30), backgroundColor: '#D9D9D9', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), marginTop: Height(22), flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: Height(11), fontFamily: 'Poppins-Regular', color: 'black', marginLeft: Width(25) }}>Team<Text>(2)</Text></Text>
                                                    <Text style={{ fontSize: Height(11), fontFamily: 'Poppins-Regular', color: 'black', marginLeft: Width(25) }}>Contest<Text>(2)</Text></Text>
                                                </View>
                                            </TouchableOpacity>
                                        </DropShadow>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})