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
import { globalStyles } from '../utils/globalStyle'

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
                                <Text style={globalStyles.headerText}>Create Team</Text>
                                <View style={globalStyles.contestRowSubView}>
                                    <Image source={require('../assets/images/gt.png')} style={globalStyles.teamImage} />
                                    <Text style={globalStyles.headerTimeText}>23m</Text>
                                    <Image source={require('../assets/images/mi.png')} style={globalStyles.teamImage} />
                                </View>
                            </View>
                        </DropShadow>
                        <View style={styles.leaderboard}>
                            <View style={styles.prizePoolView}>
                                <Text style={styles.prizeText}>Price Pool</Text>
                                <Ionicons name='share-social' size={Height(15)} />
                            </View>
                            <Text style={styles.prizeMainText}>₹ 13 Crores</Text>
                            <Progress.Bar progress={0.3} width={Width(322)} style={globalStyles.contestItemProgress} color='#F99500' unfilledColor='#D9D9D9' borderColor='transparent' height={Height(5)} />
                            <View style={styles.prizePoolView}>
                                <Text style={styles.spotLeftText}>27,22,717  Sports Left</Text>
                                <Text style={styles.spotText}>35,37,414 Sports</Text>
                            </View>
                            <TouchableOpacity style={styles.EntryBtn} onPress={() => navigation.navigate('PlayerSelect')}>
                                <Text style={styles.entryBtnText}>₹4</Text>
                            </TouchableOpacity>
                            <View style={styles.winningsView}>
                                <View style={globalStyles.contestItemRowView}>
                                    <ContestFirstComponent width={Width(24)} height={Height(18)} />
                                    <Text style={styles.winningsText}>2.5 Crores</Text>
                                </View>
                                <View style={globalStyles.contestItemRowView}>
                                    <ContestSecondComponent width={Width(16)} height={Height(19)} />
                                    <Text style={styles.winningsText}>58%</Text>
                                </View>
                                <View style={globalStyles.contestItemRowView}>
                                    <ContestThirdComponent width={Width(20)} height={Height(21)} />
                                    <Text style={styles.winningsText}>Guaranteed</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.headerView}>
                            <TouchableOpacity style={[{ borderColor: index !== 1 ? 'transparent' : '#5556CA', }, styles.header1Btn]} onPress={() => { setSelected(''), setIndex(1) }}>
                                <Text style={[{ color: index !== 1 ? '#666666' : 'black', }, styles.headerText]}>Winnings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ borderBottomColor: index !== 2 ? 'transparent' : '#5556CA', }, styles.header2Btn]} onPress={() => setIndex(2)}>
                                <Text style={[{ color: index !== 2 ? '#666666' : 'black', }, styles.headerText]}>Leaderboard</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            {data.map((item, i) => {
                                return (
                                    <View>
                                        <View key={i} style={styles.scrollView}>
                                            <Image source={require('../assets/images/Profile.png')} style={styles.scrollImage} />
                                            <Text style={styles.scrollText}>{item.playerId}</Text>
                                            <Text style={styles.scrollText}>{item.points}</Text>
                                            <Text style={styles.scrollText}>{item.credit}</Text>
                                        </View>
                                        <View style={styles.view} />
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
                                <Text style={globalStyles.headerText}>Create Team</Text>
                                <View style={globalStyles.contestRowSubView}>
                                    <Image source={require('../assets/images/gt.png')} style={globalStyles.teamImage} />
                                    <Text style={globalStyles.headerTimeText}>23m</Text>
                                    <Image source={require('../assets/images/mi.png')} style={globalStyles.teamImage} />
                                </View>
                            </View>
                        </DropShadow>
                        <View style={styles.leaderboard}>
                            <View style={styles.prizePoolView}>
                                <Text style={styles.prizeText}>Price Pool</Text>
                                <Ionicons name='share-social' size={Height(15)} />
                            </View>
                            <Text style={styles.prizeMainText}>₹ 13 Crores</Text>
                            <Progress.Bar progress={0.3} width={Width(322)} style={globalStyles.contestItemProgress} color='#F99500' unfilledColor='#D9D9D9' borderColor='transparent' height={Height(5)} />
                            <View style={styles.prizePoolView}>
                                <Text style={styles.spotLeftText}>27,22,717  Sports Left</Text>
                                <Text style={styles.spotText}>35,37,414 Sports</Text>
                            </View>
                            <TouchableOpacity style={styles.EntryBtn} onPress={() => navigation.navigate('PlayerSelect')}>
                                <Text style={styles.entryBtnText}>₹4</Text>
                            </TouchableOpacity>
                            <View style={styles.winningsView}>
                                <View style={globalStyles.contestItemRowView}>
                                    <ContestFirstComponent width={Width(24)} height={Height(18)} />
                                    <Text style={styles.winningsText}>2.5 Crores</Text>
                                </View>
                                <View style={globalStyles.contestItemRowView}>
                                    <ContestSecondComponent width={Width(16)} height={Height(19)} />
                                    <Text style={styles.winningsText}>58%</Text>
                                </View>
                                <View style={globalStyles.contestItemRowView}>
                                    <ContestThirdComponent width={Width(20)} height={Height(21)} />
                                    <Text style={styles.winningsText}>Guaranteed</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.headerView}>
                            <TouchableOpacity style={[{ borderColor: index !== 1 ? 'transparent' : '#5556CA', }, styles.header1Btn]} onPress={() => setIndex(1)}>
                                <Text style={[{ color: index !== 1 ? '#666666' : 'black', }, styles.headerText]}>Winnings</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ borderBottomColor: index !== 2 ? 'transparent' : '#5556CA', }, styles.header2Btn]} onPress={() => { setSelected('Leaderboard'), setIndex(2) }}>
                                <Text style={[{ color: index !== 2 ? '#666666' : 'black', }, styles.headerText]}>Leaderboard</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <Text style={styles.winningJoinText}>Be The First In Your Network To Join This Contest</Text>
                            <View style={styles.lineView} />
                            <View style={[{ alignItems: 'center', }, styles.winningRowView]}>
                                <Text style={globalStyles.blackNormalText}>Rank</Text>
                                <Text style={globalStyles.blackNormalText}>Winning</Text>
                            </View>
                            <View style={styles.lineView} />
                            <View style={styles.winningRowView}>
                                <RankOneComponent size={Height(20)} />
                                <Text style={globalStyles.blackNormalText}>10,000</Text>
                            </View>
                            <View style={styles.winningRowView}>
                                <RankTwoComponent size={Height(20)} />
                                <Text style={globalStyles.blackNormalText}>5,000</Text>
                            </View>
                            <View style={styles.winningRowView}>
                                <RankThreeComponent size={Height(20)} />
                                <Text style={globalStyles.blackNormalText}>2,500</Text>
                            </View>
                            <View style={styles.winningRowView}>
                                <Text style={globalStyles.blackNormalText}>#4-5</Text>
                                <Text style={globalStyles.blackNormalText}>500</Text>
                            </View>
                            <View style={styles.winningRowView}>
                                <Text style={globalStyles.blackNormalText}>#6-10</Text>
                                <Text style={globalStyles.blackNormalText}>0</Text>
                            </View>

                        </ScrollView>
                    </SafeAreaView>
                </>
            )
        }
    }

}

export default CreateTeamScreen

const styles = StyleSheet.create({
    leaderboard: {
        width: Width(390), height: Height(242), backgroundColor: '#FFFFFF', alignSelf: 'center', marginTop: Height(25), borderRadius: Width(10)
    },
    prizePoolView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(34), marginTop: Height(10)
    },
    prizeText: {
        fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'black'
    },
    spotLeftText: {
        fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#F96464'
    },
    spotText: {
        fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#6B6B6B'
    },
    EntryBtn: {
        height: Height(45), width: Width(320), backgroundColor: '#5556CA', alignSelf: 'center', borderRadius: Width(10), marginTop: Height(30), justifyContent: 'center', alignItems: 'center'
    },
    entryBtnText: {
        fontSize: Height(16), fontFamily: 'Poppins-SemiBold', color: 'white'
    },
    winningsView: {
        height: Height(35), width: Width(390), backgroundColor: '#D9D9D9', position: "absolute", bottom: 0, borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(34)
    },
    winningsText: {
        fontSize: Height(10), fontFamily: 'Poppins-SemiBold', color: '#565656', marginLeft: Width(5)
    },
    headerView: {
        flexDirection: 'row', alignItems: 'center', height: Height(35), marginLeft: Width(35)
    },
    header1Btn: {
        borderBottomWidth: Width(3),
    },
    header2Btn: {
        marginLeft: Width(50), marginLeft: Width(50), borderBottomWidth: Width(3),
    },
    headerText: {
        fontSize: Height(12), fontFamily: 'Poppins-SemiBold', paddingBottom: Width(5)
    },
    winningJoinText: {
        fontSize: Height(10), fontFamily: 'Poppins-Medium', marginLeft: Width(45), marginTop: Height(10), color: 'black'
    },
    lineView: {
        height: Height(1), backgroundColor: 'black', marginTop: Height(10)
    },
    winningRowView: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: Height(10), marginHorizontal: Width(20),
    },
    prizeMainText: {
        fontSize: Height(14), fontFamily: 'Poppins-SemiBold', marginTop: Height(10), marginLeft: Width(34)
    },
    scrollView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(10), marginHorizontal: Width(30)
    },
    scrollImage: {
        height: Height(50), width: Width(50)
    },
    scrollText: {
        fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'black'
    },
    view: {
        height: Height(1), backgroundColor: 'rgba(0, 0, 0, 0.3)', marginTop: Height(10)
    }
})