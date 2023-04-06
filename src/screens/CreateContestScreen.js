import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import DropShadow from 'react-native-drop-shadow'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as Progress from 'react-native-progress';
import ContestFirstComponent from '../assets/svg/ContestFirst'
import ContestSecondComponent from '../assets/svg/ContestSecond'
import ContestThirdComponent from '../assets/svg/ContestThird'
import CreateTeamComponent from '../assets/svg/CreateTeam'
import CreateContestComponent from '../assets/svg/CreateContest'
import { useNavigation } from '@react-navigation/native'

const data = [
    {
        id: 1,
        price: '₹ 13 Crores',
        realPrice: '₹49',
        dPrice: '₹4',
        sportsLeft: '27,22,717  Sports Left',
        sports: '35,37,414 Sports',
        contestFirst: '2.5 Crores',
        contestSecond: '58%',
        contestThird: 'Guaranteed'
    },
    {
        id: 2,
        price: '₹ 13 Crores',
        realPrice: '₹49',
        dPrice: '₹4',
        sportsLeft: '27,22,717  Sports Left',
        sports: '35,37,414 Sports',
        contestFirst: '2.5 Crores',
        contestSecond: '58%',
        contestThird: 'Guaranteed'
    },
    {
        id: 3,
        price: '₹ 13 Crores',
        realPrice: '₹49',
        dPrice: '₹4',
        sportsLeft: '27,22,717  Sports Left',
        sports: '35,37,414 Sports',
        contestFirst: '2.5 Crores',
        contestSecond: '58%',
        contestThird: 'Guaranteed'
    },
    {
        id: 4,
        price: '₹ 13 Crores',
        realPrice: '₹49',
        dPrice: '₹4',
        sportsLeft: '27,22,717  Sports Left',
        sports: '35,37,414 Sports',
        contestFirst: '2.5 Crores',
        contestSecond: '58%',
        contestThird: 'Guaranteed'
    },
    {
        id: 5,
        price: '₹ 13 Crores',
        realPrice: '₹49',
        dPrice: '₹4',
        sportsLeft: '27,22,717  Sports Left',
        sports: '35,37,414 Sports',
        contestFirst: '2.5 Crores',
        contestSecond: '58%',
        contestThird: 'Guaranteed'
    }
]


const CreateContestScreen = () => {
    const navigation = useNavigation()
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
                        <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>CONTESTS</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(15) }}>
                            <Image source={require('../assets/images/gt.png')} style={{ width: Width(65), height: Height(48) }} />
                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>23m</Text>
                            <Image source={require('../assets/images/mi.png')} style={{ width: Width(65), height: Height(48) }} />
                        </View>
                    </View>
                </DropShadow>
                <ScrollView style={{ marginTop: Height(20) }}>
                    {
                        data.map((item, i) => {
                            return (
                                <TouchableOpacity key={i} style={{ height: Height(155), width: Width(350), backgroundColor: 'white', alignSelf: 'center', marginTop: Height(10), borderRadius: Width(10), borderWidth: Width(1), borderColor: '#B8B8B8' }} onPress={() => navigation.navigate('CreateTeam')}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(34), marginTop: Height(10) }}>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'black' }}>Price Pool</Text>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'black' }}>Entry</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(34), marginTop: Height(5) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold' }}>{item.price}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#3EB54A' }}>{item.realPrice}</Text>
                                            <TouchableOpacity style={{ height: Height(15), width: Width(30), backgroundColor: '#3EB54A', justifyContent: 'center', alignItems: 'center', borderRadius: Width(3), marginLeft: Width(10) }}>
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'white' }}>{item.dPrice}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Progress.Bar progress={0.3} width={Width(290)} style={{ alignSelf: "center", marginTop: Height(12) }} color='#F99500' unfilledColor='#D9D9D9' borderColor='transparent' height={Height(5)} />
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(34), marginTop: Height(10) }}>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#F96464' }}>{item.sportsLeft}</Text>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#6B6B6B' }}>{item.sports}</Text>
                                    </View>
                                    <View style={{ height: Height(30), width: Width(350), backgroundColor: '#D9D9D9', position: "absolute", bottom: 0, borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(34) }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <ContestFirstComponent width={Width(24)} height={Height(18)} />
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-SemiBold', color: '#565656', marginLeft: Width(5) }}>{item.contestFirst}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <ContestSecondComponent width={Width(16)} height={Height(19)} />
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-SemiBold', color: '#565656', marginLeft: Width(5) }}>{item.contestSecond}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <ContestThirdComponent width={Width(20)} height={Height(21)} />
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-SemiBold', color: '#565656', marginLeft: Width(5) }}>{item.contestThird}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(55) }}>
                    <TouchableOpacity style={{ height: Height(30), width: Width(155), backgroundColor: '#5556CA', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: Width(20) }} onPress={() => navigation.navigate('CreateTeam')}>
                        <CreateTeamComponent size={Height(18)} />
                        <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white', marginLeft: Width(12) }}>Create Team</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: Height(30), width: Width(155), backgroundColor: '#5556CA', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: Width(20) }}>
                        <CreateContestComponent size={Height(18)} />
                        <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white', marginLeft: Width(12) }}>Contest</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default CreateContestScreen

const styles = StyleSheet.create({})