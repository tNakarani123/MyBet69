import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../utils/responsive'
import * as Progress from 'react-native-progress';
import ContestFirstComponent from '../assets/svg/ContestFirst'
import ContestSecondComponent from '../assets/svg/ContestSecond'
import ContestThirdComponent from '../assets/svg/ContestThird'
import RankOneComponent from '../assets/svg/RankOne'
import RankTwoComponent from '../assets/svg/RankTwo'
import RankThreeComponent from '../assets/svg/RankThree'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: 1,
        playerId: 'Player`s Id',
        points: 181,
        credit: '2-'
    },
    {
        id: 2,
        playerId: 'Player`s Id',
        points: 181,
        credit: '2-'
    },
    {
        id: 3,
        playerId: 'Player`s Id',
        points: 181,
        credit: '2-'
    },
    {
        id: 4,
        playerId: 'Player`s Id',
        points: 181,
        credit: '2-'
    },
    {
        id: 5,
        playerId: 'Player`s Id',
        points: 181,
        credit: '2-'
    },
    {
        id: 6,
        playerId: 'Player`s Id',
        points: 181,
        credit: '2-'
    },
    {
        id: 7,
        playerId: 'Player`s Id',
        points: 181,
        credit: '2-'
    },
    {
        id: 8,
        playerId: 'Player`s Id',
        points: 181,
        credit: '2-'
    },
    {
        id: 9,
        playerId: 'Player`s Id',
        points: 181,
        credit: '2-'
    },
    {
        id: 10,
        playerId: 'Player`s Id',
        points: 181,
        credit: '2-'
    }
]

const CreateTeamScreen = () => {
    const [selected, setSelected] = useState('');
    const [index, setIndex] = useState(1)
    const navigation = useNavigation()

    switch (selected) {
        case 'Leaderboard':
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
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>Create Team</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(15) }}>
                                    <Image source={require('../assets/images/gt.png')} style={{ width: Width(65), height: Height(48) }} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>23m</Text>
                                    <Image source={require('../assets/images/mi.png')} style={{ width: Width(65), height: Height(48) }} />
                                </View>
                            </View>
                        </DropShadow>
                        <View style={{ width: Width(390), height: Height(242), backgroundColor: '#FFFFFF', alignSelf: 'center', marginTop: Height(25), borderRadius: Width(10) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(34), marginTop: Height(10) }}>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'black' }}>Price Pool</Text>
                                <Ionicons name='share-social' size={Height(15)} />
                            </View>
                            <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', marginTop: Height(10), marginLeft: Width(34) }}>₹ 13 Crores</Text>
                            <Progress.Bar progress={0.3} width={Width(322)} style={{ alignSelf: "center", marginTop: Height(12) }} color='#F99500' unfilledColor='#D9D9D9' borderColor='transparent' height={Height(5)} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(34), marginTop: Height(10) }}>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#F96464' }}>27,22,717  Sports Left</Text>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#6B6B6B' }}>35,37,414 Sports</Text>
                            </View>
                            <TouchableOpacity style={{ height: Height(45), width: Width(320), backgroundColor: '#5556CA', alignSelf: 'center', borderRadius: Width(10), marginTop: Height(30), justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('PlayerSelect')}>
                                <Text style={{ fontSize: Height(16), fontFamily: 'Poppins-SemiBold', color: 'white' }}>₹4</Text>
                            </TouchableOpacity>
                            <View style={{ height: Height(35), width: Width(390), backgroundColor: '#D9D9D9', position: "absolute", bottom: 0, borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(34) }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <ContestFirstComponent width={Width(24)} height={Height(18)} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-SemiBold', color: '#565656', marginLeft: Width(5) }}>2.5 Crores</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <ContestSecondComponent width={Width(16)} height={Height(19)} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-SemiBold', color: '#565656', marginLeft: Width(5) }}>58%</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <ContestThirdComponent width={Width(20)} height={Height(21)} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-SemiBold', color: '#565656', marginLeft: Width(5) }}>Guaranteed</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: Height(35), marginLeft: Width(35) }}>
                            <TouchableOpacity style={{ borderBottomWidth: Width(3), borderColor: index !== 1 ? 'transparent' : '#5556CA', }} onPress={() => { setSelected(''), setIndex(1) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-SemiBold', color: index !== 1 ? '#666666' : 'black', paddingBottom: Width(5) }}>Winnings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: Width(50), borderBottomWidth: Width(3), borderBottomColor: index !== 2 ? 'transparent' : '#5556CA', }} onPress={() => setIndex(2)}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-SemiBold', color: index !== 2 ? '#666666' : 'black', paddingBottom: Width(5) }}>Leaderboard</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            {data.map((item, i) => {
                                return (
                                    <View>
                                        <View key={i} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(10), marginHorizontal: Width(30) }}>
                                            <Image source={require('../assets/images/Profile.png')} style={{ height: Height(50), width: Width(50) }} />
                                            <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.playerId}</Text>
                                            <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.points}</Text>
                                            <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.credit}</Text>
                                        </View>
                                        <View style={{ height: Height(1), backgroundColor: 'rgba(0, 0, 0, 0.3)', marginTop: Height(10) }} />
                                    </View>
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
                            <View style={{ height: Height(165), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>Create Team</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(15) }}>
                                    <Image source={require('../assets/images/gt.png')} style={{ width: Width(65), height: Height(48) }} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>23m</Text>
                                    <Image source={require('../assets/images/mi.png')} style={{ width: Width(65), height: Height(48) }} />
                                </View>
                            </View>
                        </DropShadow>
                        <View style={{ width: Width(390), height: Height(242), backgroundColor: '#FFFFFF', alignSelf: 'center', marginTop: Height(25), borderRadius: Width(10) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(34), marginTop: Height(10) }}>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'black' }}>Price Pool</Text>
                                <Ionicons name='share-social' size={Height(15)} />
                            </View>
                            <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', marginTop: Height(10), marginLeft: Width(34) }}>₹ 13 Crores</Text>
                            <Progress.Bar progress={0.3} width={Width(322)} style={{ alignSelf: "center", marginTop: Height(12) }} color='#F99500' unfilledColor='#D9D9D9' borderColor='transparent' height={Height(5)} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(34), marginTop: Height(10) }}>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#F96464' }}>27,22,717  Sports Left</Text>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#6B6B6B' }}>35,37,414 Sports</Text>
                            </View>
                            <TouchableOpacity style={{ height: Height(45), width: Width(320), backgroundColor: '#5556CA', alignSelf: 'center', borderRadius: Width(10), marginTop: Height(30), justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('PlayerSelect')}>
                                <Text style={{ fontSize: Height(16), fontFamily: 'Poppins-SemiBold', color: 'white' }}>₹4</Text>
                            </TouchableOpacity>
                            <View style={{ height: Height(35), width: Width(390), backgroundColor: '#D9D9D9', position: "absolute", bottom: 0, borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(34) }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <ContestFirstComponent width={Width(24)} height={Height(18)} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-SemiBold', color: '#565656', marginLeft: Width(5) }}>2.5 Crores</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <ContestSecondComponent width={Width(16)} height={Height(19)} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-SemiBold', color: '#565656', marginLeft: Width(5) }}>58%</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <ContestThirdComponent width={Width(20)} height={Height(21)} />
                                    <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-SemiBold', color: '#565656', marginLeft: Width(5) }}>Guaranteed</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', height: Height(35), marginLeft: Width(35) }}>
                            <TouchableOpacity style={{ borderBottomWidth: Width(3), borderColor: index !== 1 ? 'transparent' : '#5556CA', }} onPress={() => setIndex(1)}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-SemiBold', color: index !== 1 ? '#666666' : 'black', paddingBottom: Width(5) }}>Winnings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: Width(50), marginLeft: Width(50), borderBottomWidth: Width(3), borderBottomColor: index !== 2 ? 'transparent' : '#5556CA', }} onPress={() => { setSelected('Leaderboard'), setIndex(2) }}>
                                <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-SemiBold', color: index !== 2 ? '#666666' : 'black', paddingBottom: Width(5) }}>Leaderboard</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', marginLeft: Width(45), marginTop: Height(10), color: 'black' }}>Be The First In Your Network To Join This Contest</Text>
                            <View style={{ height: Height(1), backgroundColor: 'black', marginTop: Height(10) }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(10) }}>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>Rank</Text>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>Winning</Text>
                            </View>
                            <View style={{ height: Height(1), backgroundColor: 'black', marginTop: Height(10) }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Height(10), marginHorizontal: Width(20), }}>
                                <RankOneComponent size={Height(20)} />
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>10,000</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Height(10), marginHorizontal: Width(20), }}>
                                <RankTwoComponent size={Height(20)} />
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>5,000</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Height(10), marginHorizontal: Width(20), }}>
                                <RankThreeComponent size={Height(20)} />
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>2,500</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Height(10), marginHorizontal: Width(20), }}>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>#4-5</Text>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>500</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: Height(10), marginHorizontal: Width(20), }}>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>#6-10</Text>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>0</Text>
                            </View>

                        </ScrollView>
                    </SafeAreaView>
                </>
            )
        }
    }

}

export default CreateTeamScreen

const styles = StyleSheet.create({})