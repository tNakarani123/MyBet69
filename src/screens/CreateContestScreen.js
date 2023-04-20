import { Alert, Image, ImageBackground, Modal, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Height, Width } from '../utils/responsive'
import { useNavigation, useRoute } from '@react-navigation/native'
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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { team1Players, team2Players } from '../utils/data'
import { globalStyles } from '../utils/globalStyle'
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
    const [teamDown, setTeamDown] = useState(true);
    const route = useRoute()
    const [selectedCategory, setSelectedCategory] = useState();
    console.log({ route });

    console.log({ Captain: route.params?.captain })
    console.log({ Data: route.params?.data })
    console.log({ ViceCaptain: route.params?.viceCaptain })

    const filteredTeam1Players = team1Players.filter(
        (player) => player.category === selectedCategory
    );
    const filteredTeam2Players = team2Players.filter(
        (player) => player.category === selectedCategory
    );

    const filteredPlayers = [...filteredTeam1Players, ...filteredTeam2Players];
    console.log({ filteredPlayers });

    let captainName = '';
    let viceCaptainName = '';
    let captainImage = ''
    let viceCaptainImage = ''
    const Data = route.params?.data
    const dataLength = Data?.length || 0;
    console.log({ dataLength });
    const captainId = route.params?.captain
    const viceCaptainId = route.params?.viceCaptain
    for (let i = 0; i < dataLength; i++) {
        if (Data[i].id === captainId) {
            captainName = Data[i].name;
            captainImage = Data[i].image
        } else if (Data[i].id === viceCaptainId) {
            viceCaptainName = Data[i].name;
            viceCaptainImage = Data[i].image
        }

        // break out of the loop early if both captain and vice captain names have been found
        if (captainName !== '' && viceCaptainName !== '' && captainImage !== '' && viceCaptainImage !== '') {
            break;
        }
    }

    console.log('Captain Name:', captainName);
    console.log('Vice Captain Name:', viceCaptainName);
    console.log({ captainImage });
    console.log({ viceCaptainImage });
    // const getSelectedPlayersByCategory = []

    // const updatedPlayers = []

    // const getSelectedPlayersByCategory = (category) =>
    //     Data.filter((player) => player.category === category);

    // const selectedPlayersInCategory = filteredPlayers.filter((p) => p.category === category);
    // console.log({ selectedPlayersInCategory });


    // console.log(getSelectedPlayersByCategory('WK').length);
    // console.log(getSelectedPlayersByCategory('BAT').length);
    // console.log(getSelectedPlayersByCategory('AR').length);
    // console.log(getSelectedPlayersByCategory('BOWL').length);

    const renderItem = (item, i) =>
    (
        <View key={i} style={globalStyles.contestItemMainView}>
            <TouchableOpacity style={globalStyles.contestItemMainBtn} onPress={() => navigation.navigate('CreateTeam')} >
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
                            <Text style={styles.contestEndText}>{item.contestForth}</Text>
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


    switch (select) {
        case 'MyContest':
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

                        <View style={styles.headerView}>
                            <TouchableOpacity style={[{ borderBottomWidth: index === 1 ? Height(3) : null }, styles.headerBtn]} onPress={() => { setSelect(''), setIndex(1) }}>
                                <Text style={[{ color: index === 1 ? 'white' : 'rgba(255, 255, 255, 0.6)' }, styles.headerBtnText]}>Join Contests</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ borderBottomWidth: index === 2 ? Height(3) : null }, styles.headerBtn]} onPress={() => setIndex(2)}>
                                <Text style={[{ color: index === 2 ? 'white' : 'rgba(255, 255, 255, 0.6)' }, styles.headerBtnText]}>My Contest </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ borderBottomWidth: index === 3 ? Height(3) : null }, styles.headerBtn]} onPress={() => { setSelect('MyTeams'), setIndex(3) }}>
                                <Text style={[{ color: index === 3 ? 'white' : 'rgba(255, 255, 255, 0.6)' }, styles.headerBtnText]}>My Teams</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={[{ height: teamDown ? Height(198) : Height(300), }, styles.MyTeamView]}>
                            <Text style={[{ marginLeft: Width(25), marginTop: Height(10) }, globalStyles.playerPrizeText]}>Practice Contest</Text>
                            <Progress.Bar progress={0.5} width={Width(300)} height={Height(4)} style={globalStyles.contestItemProgress} unfilledColor='#D9D9D9' borderColor='transparent' color='#F99500' />
                            <View style={styles.contestFullView}>
                                <Text style={styles.contestFullText}>Contest Full</Text>
                                <Text style={styles.spotsText}>3 Spots</Text>
                            </View>
                            <View style={styles.myContestView}>
                                <View style={globalStyles.contestItemRowView}>
                                    <ContestFirstComponent width={Width(24)} height={Height(18)} />
                                    <Text style={globalStyles.contestItemEndText}>Glory awaits!</Text>
                                </View>

                                <View style={globalStyles.contestItemRowView}>
                                    <View style={globalStyles.contestItemEndSubView}>
                                        <Text style={styles.contestEndText}>S</Text>
                                    </View>
                                    <Text style={globalStyles.contestItemEndText}>Single</Text>
                                </View>
                                <View style={globalStyles.contestItemRowView}>
                                    <ContestThirdComponent width={Width(20)} height={Height(21)} />
                                    <Text style={globalStyles.contestItemEndText}>Guaranteed</Text>
                                </View>
                            </View>
                            <View style={[{ height: teamDown ? Height(85) : Height(185) }, styles.myContestBottomView]}>
                                <View style={styles.bottomSubView}>
                                    <View style={globalStyles.contestItemRowView}>
                                        <Text style={[{ marginRight: Width(20), }, globalStyles.contestRegularText]}>HBJHBCBB554</Text>
                                        <Text style={globalStyles.contestRegularText}>T1</Text>
                                    </View>
                                    <View style={globalStyles.contestItemRowView}>
                                        <Text style={styles.myContestPointText}>181</Text>
                                        <Text style={[{ marginLeft: Width(60), }, styles.myContestPointText]}>#2 -</Text>
                                    </View>
                                </View>
                                <View style={styles.myContestLine} />
                                <View style={styles.muContestSubView}>
                                    <View>
                                        <Text style={globalStyles.contestRegularText}>Joined With 1 Team</Text>
                                        <View style={styles.t1View}>
                                            <Text style={globalStyles.contestRegularText}>T1</Text>
                                        </View>
                                    </View>
                                    <MaterialIcons name={teamDown ? 'keyboard-arrow-down' : 'keyboard-arrow-up'} size={Height(25)} onPress={() => setTeamDown(!teamDown)} />
                                </View>
                                {!teamDown ? <View style={styles.lowView}>
                                    <View style={styles.lowSubView}>
                                        <Text style={globalStyles.contestRegularText}>Team 1</Text>
                                        <View style={globalStyles.contestItemRowView}>
                                            <MaterialIcons name='edit' size={Height(20)} onPress={() => navigation.navigate('PlayerSelect')} />
                                            <Ionicons name='repeat-sharp' size={Height(20)} style={styles.myContestViceView} />
                                        </View>
                                    </View>
                                    <View style={globalStyles.contestItemRowView}>
                                        <View style={styles.myContestCaptainView}>
                                            <Text style={globalStyles.contestRegularText}>Captain</Text>
                                            <Text style={styles.myContestCaptainText}>{captainName}</Text>
                                        </View>
                                        <View style={styles.myContestViceView}>
                                            <Text style={globalStyles.contestRegularText}>Vice Captain</Text>
                                            <Text style={styles.myContestCaptainText}>{viceCaptainName}</Text>
                                        </View>
                                    </View>
                                </View> : null}
                            </View>
                        </TouchableOpacity>
                    </SafeAreaView>
                </>
            )
        case 'MyTeams':
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

                        <View style={styles.headerView}>
                            <TouchableOpacity style={[{ borderBottomWidth: index === 1 ? Height(3) : null }, styles.headerBtn]} onPress={() => { setSelect(''), setIndex(1) }}>
                                <Text style={[{ color: index === 1 ? 'white' : 'rgba(255, 255, 255, 0.6)' }, styles.headerBtnText]}>Join Contests</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ borderBottomWidth: index === 2 ? Height(3) : null }, styles.headerBtn]} onPress={() => { setSelect('MyContest'), setIndex(2) }}>
                                <Text style={[{ color: index === 2 ? 'white' : 'rgba(255, 255, 255, 0.6)' }, styles.headerBtnText]}>My Contest </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ borderBottomWidth: index === 3 ? Height(3) : null }, styles.headerBtn]} onPress={() => setIndex(3)}>
                                <Text style={[{ color: index === 3 ? 'white' : 'rgba(255, 255, 255, 0.6)' }, styles.headerBtnText]}>My Teams</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.myTeamMainBtn} >
                            <ImageBackground source={require('../assets/images/myteam.png')} style={styles.imgBack}>
                                <View style={styles.myTeamView}>
                                    <Text style={styles.codeText}>CSCJ656546 (T1)</Text>
                                    <View style={globalStyles.contestItemRowView}>
                                        <MaterialIcons name='content-copy' size={Height(20)} color={color.background} />
                                        <MaterialIcons name='edit' size={Height(20)} color={color.background} style={styles.icon} onPress={() => navigation.navigate('PlayerSelect')} />
                                        <MaterialIcons name='share' size={Height(20)} color={color.background} style={styles.icon} />
                                    </View>
                                </View>
                                <View style={styles.MyteamsSubView}>
                                    <View>
                                        <Text style={styles.codeText}>Points</Text>
                                        <Text style={styles.pointText}>299</Text>
                                    </View>
                                    <View style={globalStyles.contestItemRowView}>
                                        <View>
                                            <Image source={captainImage} style={styles.img} />
                                            <View style={styles.captainView}>
                                                <Text style={styles.captainText}>{captainName}</Text>
                                            </View>
                                            <View style={styles.rndView}>
                                                <Text style={styles.captainText}>C</Text>
                                            </View>
                                        </View>
                                        <View style={styles.cMainView}>
                                            <Image source={viceCaptainImage} style={styles.img} />
                                            <View style={styles.captainView}>
                                                <Text style={styles.captainText}>{viceCaptainName}</Text>
                                            </View>
                                            <View style={styles.rndView}>
                                                <Text style={styles.captainText}>VC</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.myTeamBottomView}>
                                    {/* <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: color.text, opacity: 0.6 }}>WK<Text> {getSelectedPlayersByCategory('WK').length}</Text></Text>
                                    <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: color.text, opacity: 0.6 }}>BAT<Text> {getSelectedPlayersByCategory('BAT').length}</Text></Text>
                                    <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: color.text, opacity: 0.6 }}>AR<Text> {getSelectedPlayersByCategory('AR').length}</Text> </Text>
                                    <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: color.text, opacity: 0.6 }}>BOWL<Text> {getSelectedPlayersByCategory('BOWL').length}</Text></Text> */}
                                    <Text style={styles.myTeamText}>WK<Text>0 </Text></Text>
                                    <Text style={styles.myTeamText}>BAT<Text> 0</Text></Text>
                                    <Text style={styles.myTeamText}>AR<Text>0 </Text> </Text>
                                    <Text style={styles.myTeamText}>BOWL<Text> 0</Text></Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
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

                        <View style={styles.headerView}>
                            <TouchableOpacity style={[{ borderBottomWidth: index === 1 ? Height(3) : null }, styles.headerBtn]} onPress={() => setIndex(1)}>
                                <Text style={[{ color: index === 1 ? 'white' : 'rgba(255, 255, 255, 0.6)' }, styles.headerBtnText]}>Join Contests</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ borderBottomWidth: index === 2 ? Height(3) : null }, styles.headerBtn]} onPress={() => { setSelect('MyContest'), setIndex(2) }}>
                                <Text style={[{ color: index === 2 ? 'white' : 'rgba(255, 255, 255, 0.6)' }, styles.headerBtnText]}>My Contest </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ borderBottomWidth: index === 3 ? Height(3) : null }, styles.headerBtn]} onPress={() => { setSelect('MyTeams'), setIndex(3) }}>
                                <Text style={[{ color: index === 3 ? 'white' : 'rgba(255, 255, 255, 0.6)' }, styles.headerBtnText]}>My Teams</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <Text style={styles.text}>Discount</Text>
                            {
                                discount.map(renderItem)
                            }
                            <Text style={styles.text}>Only For Beginners</Text>
                            {
                                beginners.map(renderItem)
                            }
                            <Text style={styles.text}>High Entry = High Rewards</Text>
                            {
                                hightEntry.map(renderItem)
                            }
                            <Text style={styles.text}>Head-to-Head</Text>
                            {
                                headTohead.map(renderItem)
                            }
                            <Text style={styles.text}>Low-Entry Contests</Text>
                            {
                                lowEntry.map(renderItem)
                            }
                            <Text style={styles.text}>Big Winnings</Text>
                            {
                                bigWinnings.map(renderItem)
                            }
                            <Text style={styles.text}>Winner Takes All</Text>
                            {
                                winnersTakes.map(renderItem)
                            }
                            <Text style={styles.text}>More Contests</Text>
                            {
                                moreContest.map(renderItem)
                            }
                            <Text style={styles.text}>Practice Contest</Text>
                            {
                                practice.map((item, i) => {
                                    return (
                                        <View key={i} >
                                            <TouchableOpacity style={styles.practiceContestBtn} >

                                                <View style={styles.practiceContestView}>
                                                    <Text style={globalStyles.contestItemPrizeText}>Practice Contest</Text>
                                                    <View style={globalStyles.contestItemRowView}>
                                                        <Text style={globalStyles.contestItemEntryText}>{item.entry}</Text>
                                                        <TouchableOpacity style={globalStyles.contestItemEntryBtn}>
                                                            <Text style={globalStyles.contestItemEntryBtnText}>JOIN</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <Progress.Bar progress={0.3} width={Width(290)} height={Height(4)} style={globalStyles.contestItemProgress} unfilledColor='#D9D9D9' borderColor='transparent' color='#F99500' />
                                                <View style={globalStyles.contestItemSpotView}>
                                                    <Text style={globalStyles.contestItemSpotLeftText}>{item.spotsLeft} Spots Left</Text>
                                                    <Text style={globalStyles.contestItemSpotText}>{item.spots} Spots</Text>
                                                </View>
                                                <View style={styles.practiceContestSubView}>
                                                    <View style={globalStyles.contestItemRowView}>
                                                        {item.contestFirst}
                                                        <Text style={globalStyles.contestItemEndText}>Glory awaits!</Text>
                                                    </View>

                                                    <View style={globalStyles.contestItemRowView}>
                                                        <View style={globalStyles.contestItemEndSubView}>
                                                            <Text style={styles.contestEndText}>{item.contestForth}</Text>
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
                                })
                            }

                            <TouchableOpacity style={styles.viewAllBtn} onPress={() => navigation.navigate('AllContest')}>
                                <Text style={globalStyles.contestItemPrizeText}>VIEW ALL 107 CONTESTS</Text>
                            </TouchableOpacity>
                        </ScrollView>
                        <View style={styles.createContestView}>
                            <TouchableOpacity style={styles.createContestBtn} onPress={() => navigation.navigate('CreateTeam')}>
                                <CreateTeamComponent size={Height(18)} />
                                <Text style={styles.createContestBtnText}>Create Team</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.createContestBtn} onPress={() => setModalVisible(true)}>
                                <CreateContestComponent size={Height(18)} />
                                <Text style={styles.createContestBtnText}>Create Contest</Text>
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
                                        <TouchableOpacity style={styles.modalBtn} onPress={() => { navigation.navigate('CreateNewContest'), setModalVisible(!modalVisible) }}>
                                            <Octicons name='plus-circle' size={Height(25)} color='white' />
                                            <Text style={[{ marginLeft: Width(30) }, styles.modalBtnText]}>Create A Contest</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[{ marginTop: Height(25) }, styles.modalBtn]} onPress={() => { navigation.navigate('EnterContestCode'), setModalVisible(!modalVisible) }}>
                                            <ContestCodeComponent size={Height(25)} />
                                            <Text style={[{ marginLeft: Width(20) }, styles.modalBtnText]}>Enter Contest Code</Text>
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
    contestEndText: {
        fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText,
    },
    headerView: {
        height: Height(100), backgroundColor: '#6B69D4', zIndex: -1, position: 'relative', marginTop: Height(90), paddingTop: Height(50), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Width(20), alignItems: 'center'
    },
    headerBtn: {
        paddingBottom: Height(5), borderRadius: Width(3), borderColor: 'white'
    },
    headerBtnText: {
        fontSize: Height(14), fontFamily: 'Poppins-Medium',
    },
    text: {
        fontSize: Height(16), fontFamily: font.POPPINS_BOLD, marginLeft: Width(20), marginTop: Height(20), marginBottom: Height(10), color: color.text
    },
    practiceContestBtn: {
        height: Platform.OS === 'android' ? Height(175) : Height(155), width: Width(350), backgroundColor: color.background, alignSelf: 'center', marginTop: Height(10), borderRadius: Width(10)
    },
    practiceContestView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(30)
    },
    practiceContestSubView: {
        height: Height(30), backgroundColor: '#D9D9D9', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), marginTop: Platform.OS === 'android' ? Height(47) : Height(35), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25)
    },
    contestEndText: {
        fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText,
    },
    viewAllBtn: {
        height: Height(40), width: Width(200), borderWidth: Height(1), borderRadius: Width(5), justifyContent: 'center', alignItems: "center", alignSelf: 'center', marginVertical: Height(20), borderColor: 'grey'
    },
    createContestView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(50), marginBottom: Height(20)
    },
    createContestBtn: {
        height: Height(30), width: Width(157), backgroundColor: '#5556CA', borderRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
    },
    createContestBtnText: {
        fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.background, marginLeft: Width(5)
    },
    modalBtn: {
        height: Height(45), width: Width(240), backgroundColor: '#5556CA', flexDirection: 'row', alignItems: 'center', alignSelf: 'center', justifyContent: 'center', borderRadius: Width(10)
    },
    modalBtnText: {
        fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background,
    },
    MyTeamView: {
        width: Width(350), backgroundColor: color.background, alignSelf: 'center', borderRadius: Width(10), marginTop: Height(15), borderWidth: Height(1)
    },
    contestFullView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginHorizontal: Width(25), marginTop: Height(5)
    },
    contestFullText: {
        fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: '#F96464'
    },
    spotsText: {
        fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: 'grey'
    },
    MyteamsSubView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(10)
    },
    imgBack: {
        height: Height(160), width: Width(350), alignSelf: 'center'
    },
    myTeamMainBtn: {
        marginTop: Height(15)
    },
    myTeamView: {
        height: Height(35), backgroundColor: 'rgba(0, 0, 0, 0.3)', borderTopLeftRadius: Width(10), borderTopRightRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20)
    },
    codeText: {
        fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.background
    },
    icon: {
        marginLeft: Width(10)
    },
    pointText: {
        fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background
    },
    img: {
        height: Height(70), width: Width(70)
    },
    captainView: {
        height: Height(20), width: Width(65), backgroundColor: color.background, justifyContent: 'center', alignItems: 'center', borderRadius: Width(5)
    },
    captainText: {
        fontSize: Height(8), fontFamily: font.POPPINS_MEDIUM, color: color.text
    },
    rndView: {
        height: Height(22), width: Height(22), borderRadius: Height(22) / 2, backgroundColor: color.background, justifyContent: 'center', alignItems: 'center', position: 'absolute', marginRight: Width(50),
    },
    cMainView: {
        marginLeft: Width(15)
    },
    myTeamBottomView: {
        height: Height(35), backgroundColor: color.background, borderBottomRightRadius: Width(10), borderBottomLeftRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20), marginTop: Height(5)
    },
    myTeamText: {
        fontSize: Height(12), fontFamily: 'Poppins-Medium', color: color.text, opacity: 0.6
    },
    myContestPointText: {
        fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6
    },
    myContestLine: {
        height: Height(1), backgroundColor: '#C8C8C8', marginTop: Height(10)
    },
    muContestSubView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(5)
    },
    myContestView: {
        height: Height(30), backgroundColor: '#E5E5E5', marginTop: Platform.OS === 'android' ? Height(10) : Height(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25), opacity: 0.5, width: Width(345)
    },
    myContestBottomView: {
        backgroundColor: '#FEFAEF', width: Width(345), borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10)
    },
    bottomSubView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(10)
    },
    myContestCaptainText: {
        fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.text
    },
    myContestCaptainView: {
        marginLeft: Width(30),
    },
    myContestViceView: {
        marginLeft: Width(20)
    },
    lowView: {
        height: Height(70), width: Width(300), backgroundColor: color.background, alignSelf: 'center', marginTop: Height(20), borderRadius: Width(10), borderWidth: Height(1), borderColor: '#CBCBCB'
    },
    lowSubView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(5)
    },
    t1View: {
        height: Height(18), width: Width(36), backgroundColor: '#D9D9D9', justifyContent: 'center', alignItems: "center", borderRadius: Width(5), marginTop: Height(5)
    }

})