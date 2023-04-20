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
    <View key={i} style={globalStyles.contestItemMainView}>
        <TouchableOpacity style={globalStyles.contestItemMainBtn} >
            <View style={globalStyles.contestItemFrontView}>
                <Text style={globalStyles.contestItemFrontText}>Prize Pool</Text>
                <Text style={globalStyles.contestItemFrontText}>Entry</Text>
            </View>
            <View style={globalStyles.contestItemSubView}>
                <Text style={globalStyles.contestItemPrizeText}>{item.prizePool}</Text>
                <View style={globalStyles.contestItemRowView}>
                    <Text style={globalStyles.contestItemEntryText}>{item.entry}</Text>
                    <TouchableOpacity style={globalStyles.contestItemEntryBtn}>
                        <Text style={globalStyles.contestItemEntryBtnText}>{item.dentry}</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Progress.Bar progress={0.3} width={Width(290)} height={Height(4)} style={globalStyles.contestItemProgress} unfilledColor='#D9D9D9' borderColor='transparent' color='#F99500' />
            <View style={globalStyles.contestItemSpotView}>
                <Text style={globalStyles.contestItemSpotLeftText}>{item.spotsLeft} Spots Left</Text>
                <Text style={globalStyles.contestItemSpotText}>{item.spots} Spots</Text>
            </View>
            <View style={globalStyles.contestItemEndView}>
                <View style={globalStyles.contestItemRowView}>
                    {item.contestFirst}
                    <Text style={globalStyles.contestItemEndText}>{item.firstPrice}</Text>
                </View>
                <View style={globalStyles.contestItemRowView}>
                    {item.contestSecond}
                    <Text style={globalStyles.contestItemEndText}>{item.secondPercent}</Text>
                </View>
                <View style={globalStyles.contestItemRowView}>
                    <View style={globalStyles.contestItemEndSubView}>
                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, }}>{item.contestForth}</Text>
                    </View>
                    <Text style={globalStyles.contestItemEndText}>{item.upTo}</Text>
                </View>
                <View style={globalStyles.contestItemRowView}>
                    {item.contestThird}
                    <Text style={globalStyles.contestItemEndText}>{item.guaranteed}</Text>
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
                    <View style={globalStyles.allContestHeaderView}>
                        <View style={globalStyles.contestRowView}>
                            <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                        <View style={globalStyles.contestRowSubView}>
                            <Image source={require('../assets/images/gt.png')} style={globalStyles.teamImage} />
                            <Text style={globalStyles.headerTimeText}>23m</Text>
                            <Image source={require('../assets/images/mi.png')} style={globalStyles.teamImage} />
                        </View>
                    </View>
                </DropShadow>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>All Contests</Text>
                    {
                        allContest.map(renderItem)
                    }

                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default AllContestScreen

const styles = StyleSheet.create({
    text: {
        fontSize: Height(16),
        fontFamily: font.POPPINS_BOLD,
        marginLeft: Width(20),
        marginBottom: Height(10),
        color: color.text
    },
    scrollView: {
        marginTop: Height(150),
    }
})