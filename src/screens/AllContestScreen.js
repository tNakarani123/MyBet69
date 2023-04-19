import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DropShadow from 'react-native-drop-shadow'
import { Height, Width } from '../utils/responsive'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import ContestFirstComponent from '../assets/svg/ContestFirst'
import ContestSecondComponent from '../assets/svg/ContestSecond'
import ContestThirdComponent from '../assets/svg/ContestThird'
import * as Progress from 'react-native-progress';
import font from '../utils/fonts'
import color from '../utils/color'
import { globalStyles } from '../utils/globalStyle'


const allContest = [
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
    }, {
        id: 4,
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


const renderItem = (item, i) =>
(
    <View key={i} style={{ paddingTop: Height(10) }}>
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



const AllContestScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView
                style={globalStyles.safeView}
            />
            <SafeAreaView style={globalStyles.container}>
                <DropShadow style={globalStyles.shadow}>
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
                <ScrollView style={{ marginTop: Height(150), }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginBottom: Height(10), color: color.text }}>All Contests</Text>
                    {
                        allContest.map(renderItem)
                    }

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default AllContestScreen

const styles = StyleSheet.create({})