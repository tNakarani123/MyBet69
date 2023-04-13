import { Alert, Image, Modal, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import ContestFirstComponent from '../assets/svg/ContestFirst'
import ContestSecondComponent from '../assets/svg/ContestSecond'
import ContestThirdComponent from '../assets/svg/ContestThird'
import color from '../utils/color'
import font from '../utils/fonts'
import * as Progress from 'react-native-progress';
import CreateTeamComponent from '../assets/svg/CreateTeam'
import CreateContestComponent from '../assets/svg/CreateContest'
import Octicons from 'react-native-vector-icons/Octicons'
import ContestCodeComponent from '../assets/svg/ContestCode'
const discount = [
    {
        id: 1,
        entry: '₹49',
        dentry: '₹4',
        prizePool: '₹1 Crore',
        spotsLeft: 2722717,
        spots: 296296,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        contestThird: <ContestThirdComponent width={Width(20)} height={Height(21)} />,
        firstPrice: '2.5 crores',
        secondPercent: '58%',
        guaranteed: 'Guaranteed',
        contestForth: 'M',
        upTo: 'Upto 20'
    },
    {
        id: 2,
        entry: '₹49',
        dentry: '₹4',
        prizePool: '₹1 Crore',
        spotsLeft: 2722717,
        spots: 296296,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        contestThird: <ContestThirdComponent width={Width(20)} height={Height(21)} />,
        firstPrice: '2.5 crores',
        secondPercent: '58%',
        guaranteed: 'Guaranteed',
        contestForth: 'M',
        upTo: 'Upto 20'
    },
    {
        id: 3,
        entry: '₹49',
        dentry: '₹4',
        prizePool: '₹1 Crore',
        spotsLeft: 2722717,
        spots: 296296,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        contestThird: <ContestThirdComponent width={Width(20)} height={Height(21)} />,
        firstPrice: '2.5 crores',
        secondPercent: '58%',
        guaranteed: 'Guaranteed',
        contestForth: 'M',
        upTo: 'Upto 20'
    }
]

const beginners = [
    {
        id: 1,
        prizePool: '₹49',
        dentry: '₹17',
        spotsLeft: 1,
        spots: 3,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '22 Lakhs',
        secondPercent: '68%',
        contestForth: '5',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 2,
        prizePool: '₹49',
        dentry: '₹17',
        spotsLeft: 1,
        spots: 3,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '22 Lakhs',
        secondPercent: '68%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 3,
        prizePool: '₹49',
        dentry: '₹17',
        spotsLeft: 1,
        spots: 3,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '22 Lakhs',
        secondPercent: '68%',
        contestForth: 'S',
        upTo: 'single'
    }
]

const hightEntry = [
    {
        id: 1,
        prizePool: '₹29350',
        dentry: '₹10999',
        spotsLeft: 1,
        spots: 3,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹17850',
        secondPercent: '67%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 2,
        prizePool: '₹29350',
        dentry: '₹10999',
        spotsLeft: 1,
        spots: 3,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹17850',
        secondPercent: '67%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 3,
        prizePool: '₹29350',
        dentry: '₹10999',
        spotsLeft: 1,
        spots: 3,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹17850',
        secondPercent: '67%',
        contestForth: 'S',
        upTo: 'single'
    }
]

const headTohead = [
    {
        id: 1,
        prizePool: '₹10000',
        dentry: '₹5750',
        spotsLeft: 2,
        spots: 2,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹10000',
        secondPercent: '50%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 2,
        prizePool: '₹10000',
        dentry: '₹5750',
        spotsLeft: 2,
        spots: 2,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹10000',
        secondPercent: '50%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 3,
        prizePool: '₹10000',
        dentry: '₹5750',
        spotsLeft: 2,
        spots: 2,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹10000',
        secondPercent: '50%',
        contestForth: 'S',
        upTo: 'single'
    }
]

const lowEntry = [
    {
        id: 1,
        prizePool: '₹70',
        dentry: '₹27',
        spotsLeft: 3,
        spots: 4,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹66',
        secondPercent: '27%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 2,
        prizePool: '₹70',
        dentry: '₹27',
        spotsLeft: 3,
        spots: 4,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹66',
        secondPercent: '27%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 3,
        prizePool: '₹70',
        dentry: '₹27',
        spotsLeft: 3,
        spots: 4,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹66',
        secondPercent: '27%',
        contestForth: 'S',
        upTo: 'single'
    }
]

const bigWinnings = [
    {
        id: 1,
        prizePool: '₹47,777',
        dentry: '₹7777',
        spotsLeft: 3,
        spots: 7,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹10000',
        secondPercent: '71%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 2,
        prizePool: '₹47,777',
        dentry: '₹7777',
        spotsLeft: 3,
        spots: 7,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹10000',
        secondPercent: '71%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 3,
        prizePool: '₹47,777',
        dentry: '₹7777',
        spotsLeft: 3,
        spots: 7,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹10000',
        secondPercent: '71%',
        contestForth: 'S',
        upTo: 'single'
    },
]

const winnersTakes = [
    {
        id: 1,
        prizePool: '₹10000',
        dentry: '₹2999',
        spotsLeft: 1,
        spots: 4,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹10000',
        secondPercent: '25%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 2,
        prizePool: '₹10000',
        dentry: '₹2999',
        spotsLeft: 1,
        spots: 4,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹10000',
        secondPercent: '25%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 3,
        prizePool: '₹10000',
        dentry: '₹2999',
        spotsLeft: 1,
        spots: 4,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹10000',
        secondPercent: '25%',
        contestForth: 'S',
        upTo: 'single'
    },
]

const moreContest = [
    {
        id: 1,
        prizePool: '₹2000',
        dentry: '₹400',
        spotsLeft: 2,
        spots: 6,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹650',
        secondPercent: '29%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 2,
        prizePool: '₹2000',
        dentry: '₹400',
        spotsLeft: 2,
        spots: 6,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹650',
        secondPercent: '29%',
        contestForth: 'S',
        upTo: 'single'
    },
    {
        id: 3,
        prizePool: '₹2000',
        dentry: '₹400',
        spotsLeft: 2,
        spots: 6,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestSecond: <ContestSecondComponent width={Width(16)} height={Height(19)} />,
        firstPrice: '₹650',
        secondPercent: '29%',
        contestForth: 'S',
        upTo: 'single'
    },
]

const practice = [
    {
        id: 1,
        spotsLeft: 2,
        spots: 2,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestThird: <ContestThirdComponent width={Width(20)} height={Height(21)} />,
        contestForth: 'S',
        upTo: 'single',
        guaranteed: 'Guaranteed',
    },
    {
        id: 2,
        spotsLeft: 2,
        spots: 2,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestThird: <ContestThirdComponent width={Width(20)} height={Height(21)} />,
        contestForth: 'S',
        upTo: 'single',
        guaranteed: 'Guaranteed',
    },
    {
        id: 3,
        spotsLeft: 2,
        spots: 2,
        contestFirst: <ContestFirstComponent width={Width(24)} height={Height(18)} />,
        contestThird: <ContestThirdComponent width={Width(20)} height={Height(21)} />,
        contestForth: 'S',
        upTo: 'single',
        guaranteed: 'Guaranteed',
    },
]

const CreateContestScreen = () => {
    const navigation = useNavigation()
    const [select, setSelect] = useState('')
    const [index, setIndex] = useState(1)
    const [modalVisible, setModalVisible] = useState(false);
    const renderItem = (item, i) =>
    (
        <View key={i} style={{ paddingTop: Height(10), }}>
            <TouchableOpacity style={{ height: Platform.OS === 'android' ? Height(175) : Height(155), width: Width(350), backgroundColor: color.background, alignSelf: 'center', borderRadius: Width(10) }} >
                <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(20) }}>
                    <Text style={{ fontSize: Height(8), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Prize Pool</Text>
                    <Text style={{ fontSize: Height(8), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Entry</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(10) }}>
                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text }}>{item.prizePool}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: Height(8), fontFamily: font.POPPINS_REGULAR, textDecorationLine: 'line-through', color: color.greenText }}>{item.entry}</Text>
                        <TouchableOpacity style={{ height: Height(15), width: Width(30), backgroundColor: color.greenText, justifyContent: 'center', alignItems: 'center', borderRadius: Width(3), marginLeft: Width(8) }}>
                            <Text style={{ fontSize: Height(8), fontFamily: font.POPPINS_REGULAR, color: color.background }}>{item.dentry}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Progress.Bar progress={0.3} width={Width(290)} height={Height(4)} style={{ alignSelf: 'center', marginTop: Height(10) }} unfilledColor='#D9D9D9' borderColor='transparent' color='#F99500' />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: Width(30), marginTop: Height(8) }}>
                    <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.spotsLeftText }}>{item.spotsLeft} Spots Left</Text>
                    <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.text }}>{item.spots} Spots</Text>
                </View>
                <View style={{ height: Height(30), backgroundColor: '#D9D9D9', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), marginTop: Platform.OS === 'android' ? Height(33) : Height(25), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {item.contestFirst}
                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5) }}>{item.firstPrice}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {item.contestSecond}
                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5) }}>{item.secondPercent}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: Height(18), width: Height(18), borderRadius: Height(18) / 2, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, }}>{item.contestForth}</Text>
                        </View>
                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5) }}>{item.upTo}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {item.contestThird}
                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5) }}>{item.guaranteed}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )


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
                        <ScrollView>
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginTop: Height(20), marginBottom: Height(10), color: color.text }}>Discount</Text>
                            {
                                discount.map(renderItem)
                            }
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginTop: Height(20), marginBottom: Height(10), color: color.text }}>Only For Beginners</Text>
                            {
                                beginners.map(renderItem)
                            }
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginTop: Height(20), marginBottom: Height(10), color: color.text }}>High Entry = High Rewards</Text>
                            {
                                hightEntry.map(renderItem)
                            }
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginTop: Height(20), marginBottom: Height(10), color: color.text }}>Head-to-Head</Text>
                            {
                                headTohead.map(renderItem)
                            }
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginTop: Height(20), marginBottom: Height(10), color: color.text }}>Low-Entry Contests</Text>
                            {
                                lowEntry.map(renderItem)
                            }
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginTop: Height(20), marginBottom: Height(10), color: color.text }}>Big Winnings</Text>
                            {
                                bigWinnings.map(renderItem)
                            }
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginTop: Height(20), marginBottom: Height(10), color: color.text }}>Winner Takes All</Text>
                            {
                                winnersTakes.map(renderItem)
                            }
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginTop: Height(20), marginBottom: Height(10), color: color.text }}>More Contests</Text>
                            {
                                moreContest.map(renderItem)
                            }
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginTop: Height(20), marginBottom: Height(10), color: color.text }}>Practice Contest</Text>
                            {
                                practice.map((item, i) => {
                                    return (
                                        <View key={i} >
                                            <TouchableOpacity style={{ height: Platform.OS === 'android' ? Height(175) : Height(155), width: Width(350), backgroundColor: color.background, alignSelf: 'center', marginTop: Height(10), borderRadius: Width(10) }} >

                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(30) }}>
                                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text }}>Practice Contest</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={{ fontSize: Height(8), fontFamily: font.POPPINS_REGULAR, textDecorationLine: 'line-through', color: color.greenText }}>{item.entry}</Text>
                                                        <TouchableOpacity style={{ height: Height(15), width: Width(30), backgroundColor: color.greenText, justifyContent: 'center', alignItems: 'center', borderRadius: Width(3), marginLeft: Width(8) }}>
                                                            <Text style={{ fontSize: Height(8), fontFamily: font.POPPINS_REGULAR, color: color.background }}>JOIN</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <Progress.Bar progress={0.3} width={Width(290)} height={Height(4)} style={{ alignSelf: 'center', marginTop: Height(10) }} unfilledColor='#D9D9D9' borderColor='transparent' color='#F99500' />
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: Width(30), marginTop: Height(8) }}>
                                                    <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.spotsLeftText }}>{item.spotsLeft} Spots Left</Text>
                                                    <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.text }}>{item.spots} Spots</Text>
                                                </View>
                                                <View style={{ height: Height(30), backgroundColor: '#D9D9D9', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), marginTop: Platform.OS === 'android' ? Height(47) : Height(35), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25) }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        {item.contestFirst}
                                                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5) }}>Glory awaits!</Text>
                                                    </View>

                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <View style={{ height: Height(18), width: Height(18), borderRadius: Height(18) / 2, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                            <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, }}>{item.contestForth}</Text>
                                                        </View>
                                                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5) }}>{item.upTo}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        {item.contestThird}
                                                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5) }}>{item.guaranteed}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                })
                            }

                            <TouchableOpacity style={{ height: Height(40), width: Width(200), borderWidth: Height(1), borderRadius: Width(5), justifyContent: 'center', alignItems: "center", alignSelf: 'center', marginVertical: Height(20), borderColor: 'grey' }} onPress={() => navigation.navigate('AllContest')}>
                                <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text }}>VIEW ALL 107 CONTESTS</Text>
                            </TouchableOpacity>
                        </ScrollView>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(50), marginBottom: Height(20) }}>
                            <TouchableOpacity style={{ height: Height(30), width: Width(157), backgroundColor: '#5556CA', borderRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <CreateTeamComponent size={Height(18)} />
                                <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.background, marginLeft: Width(5) }}>Create Team</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: Height(30), width: Width(157), backgroundColor: '#5556CA', borderRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} onPress={() => setModalVisible(true)}>
                                <CreateContestComponent size={Height(18)} />
                                <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.background, marginLeft: Width(5) }}>Create Contest</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.centeredView}>
                            <Modal
                                animationType="fade"
                                transparent={true}
                                visible={modalVisible}
                                onRequestClose={() => {
                                    Alert.alert('Modal has been closed.');
                                    setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <TouchableOpacity style={{ height: Height(45), width: Width(240), backgroundColor: '#5556CA', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderRadius: Width(10) }} onPress={() => { navigation.navigate('CreateNewContest'), setModalVisible(!modalVisible) }}>
                                            <Octicons name='plus-circle' size={Height(25)} color='white' />
                                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background, marginLeft: Width(30) }}>Create A Contest</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ height: Height(45), width: Width(240), backgroundColor: '#5556CA', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderRadius: Width(10), marginTop: Height(25) }} onPress={() => { navigation.navigate('EnterContestCode'), setModalVisible(!modalVisible) }}>
                                            <ContestCodeComponent size={Height(25)} />
                                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background, marginLeft: Width(20) }}>Enter Contest Code</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>

                        </View>
                    </SafeAreaView>

                </>
            )
        }
    }


}

export default CreateContestScreen

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottomBottom: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        height: Height(180),
        width: Width(350),
        backgroundColor: 'white',
        borderRadius: Width(20),
        justifyContent: 'center'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})