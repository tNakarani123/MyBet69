import { Image, ImageBackground, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Height, Width } from '../utils/responsive'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DropShadow from "react-native-drop-shadow";
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../utils/globalStyle'
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
        <ImageBackground style={globalStyles.container} source={require('../assets/images/background.png')}>
            <SafeAreaView
                style={globalStyles.safeView}
            />
            <SafeAreaView style={globalStyles.container}>
                <View style={styles.firstView}>
                    <MyBetComponent width={Width(102)} height={Height(15)} />
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                        <NotificationComponent size={Height(25)} />
                    </TouchableOpacity>
                </View>
                <View style={styles.view}>
                    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentStyle} showsVerticalScrollIndicator={false}>
                        <View style={styles.scrollSubView}>
                            <Text style={styles.text}>TATA Indian premier league T20</Text>
                            <View style={styles.notiView}>
                                <NotificationComponent size={Height(25)} />
                            </View>
                        </View>

                        <View style={styles.secView} >
                            <DropShadow
                                style={globalStyles.shadow}
                            >
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                                    {
                                        scrollData.map((item, i) => {
                                            return (

                                                <TouchableOpacity key={i} style={[{ marginTop: Height(10) }, styles.mainTochable]} onPress={() => navigation.navigate('CreateContest')}>
                                                    <Text style={styles.matchNameText}>{item.matchName}</Text>
                                                    <View style={styles.lineView} />
                                                    <View style={[styles.thirdView, { marginTop: Height(5) }]}>
                                                        <View>
                                                            <Text style={styles.teamName}>{item.teamOneName}</Text>
                                                            <View style={styles.teamView}>
                                                                <Image source={item.teamOneLogo} style={globalStyles.teamImage} />
                                                                <Text style={[{ marginLeft: Width(15) }, styles.teamShortName]}>{item.teamOneShortName}</Text>
                                                            </View>
                                                        </View>
                                                        <View style={globalStyles.contestItemRowView}>
                                                            <Octicons name='dot-fill' size={Height(20)} color='#FF0707' />
                                                            <Text style={[globalStyles.blackNormalText, { marginLeft: Width(8) }]}>Live</Text>
                                                        </View>
                                                        <View>
                                                            <Text style={[{ marginLeft: Width(25) }, styles.teamName]}>{item.teamTwoName}</Text>
                                                            <View style={styles.teamView}>
                                                                <Text style={[{ marginRight: Width(15) }, styles.teamShortName]}>{item.teamTwoShortName}</Text>
                                                                <Image source={item.teamTwoLogo} style={globalStyles.teamImage} />
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={styles.scrollBottomView}>
                                                        <Text style={styles.teamText}>Team<Text>(2)</Text></Text>
                                                        <Text style={styles.teamText}>Contest<Text>(2)</Text></Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        })
                                    }
                                </ScrollView>
                            </DropShadow>
                        </View>
                        <View style={[{ marginTop: Height(25), }, styles.scrollSubView]}>
                            <Text style={styles.text}>Upcoming Matches</Text>
                            <View style={styles.notiView}>
                                <NotificationComponent size={Height(25)} />
                            </View>
                        </View>
                        <View>
                            <DropShadow
                                style={globalStyles.shadow}
                            >
                                <ScrollView>
                                    {
                                        upcomingMatch.map((item, i) => {
                                            return (
                                                <TouchableOpacity key={i} style={styles.upScrollView} onPress={() => navigation.navigate('CreateContest')}>
                                                    <View style={[{ marginHorizontal: Width(20), marginTop: Height(5) }, styles.scrollSubView]}>
                                                        <Text style={globalStyles.blackNormalText}>{item.fansCode}</Text>
                                                        <View style={globalStyles.contestItemRowView}>
                                                            <Feather name='clock' size={Height(15)} color='#5556CA' />
                                                            <Text style={[{ marginLeft: Width(15) }, styles.lineupText]}>Lineups Out</Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.lineView} />
                                                    <View style={[{ marginTop: Height(10) }, styles.thirdView]}>
                                                        <View style={{}}>
                                                            <Text style={globalStyles.blackNormalText}>{item.teamOneName}</Text>
                                                            <View style={[{ marginTop: Height(10) }, styles.teamView]}>
                                                                <Image source={item.teamOneLogo} style={globalStyles.teamImage} />
                                                                <Text style={[{ marginLeft: Width(15) }, styles.teamShortName]}>{item.teamOneShortName}</Text>
                                                            </View>
                                                        </View>

                                                        <Text style={globalStyles.headerTimeText}>{item.time}</Text>

                                                        <View>
                                                            <Text style={[globalStyles.blackNormalText, { marginLeft: Width(25) }]}>{item.teamTwoName}</Text>
                                                            <View style={[{ marginTop: Height(10) }, styles.teamView]}>
                                                                <Text style={[{ marginRight: Width(15) }, styles.teamShortName]}>{item.teamTwoShortName}</Text>
                                                                <Image source={item.teamTwoLogo} style={globalStyles.teamImage} />
                                                            </View>
                                                        </View>
                                                    </View>
                                                    <View style={styles.megaMainView}>
                                                        <View style={styles.megaView}>
                                                            <Text style={styles.lineupText}>MEGA</Text>
                                                        </View>
                                                        <Text style={[globalStyles.blackNormalText, { marginLeft: Width(17) }]}>{item.price}</Text>
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
                <View style={styles.myMatchView}>
                    <View style={[{ marginHorizontal: Width(50) }, styles.scrollSubView]}>
                        <Text style={styles.myMatchText}>My Matches</Text>
                        <View style={globalStyles.contestItemRowView}>
                            <Text style={styles.viewAllText}>View All</Text>
                            <Ionicons name='arrow-forward' size={Height(20)} color='white' style={{ marginLeft: Width(5) }} onPress={() => navigation.navigate('MyMatches')} />
                        </View>
                    </View>
                    <View style={styles.upView}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: Height(150), }} >
                            {
                                scrollData.map((item, i) => {
                                    return (
                                        <DropShadow
                                            style={globalStyles.shadow}
                                            key={i}  >
                                            <TouchableOpacity style={styles.mainTochable} onPress={() => navigation.navigate('CreateContest')}>
                                                <Text style={styles.matchNameText}>{item.matchName}</Text>
                                                <View style={styles.lineView} />
                                                <View style={[styles.thirdView, { marginTop: Height(5) }]}>
                                                    <View>
                                                        <Text style={styles.teamName}>{item.teamOneName}</Text>
                                                        <View style={[styles.teamView, { marginTop: Height(3) }]}>
                                                            <Image source={item.teamOneLogo} style={globalStyles.teamImage} />
                                                            <Text style={[{ marginLeft: Width(15) }, styles.teamShortName]}>{item.teamOneShortName}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={globalStyles.contestItemRowView}>
                                                        <Octicons name='dot-fill' size={Height(20)} color='#FF0707' />
                                                        <Text style={[globalStyles.blackNormalText, { marginLeft: Width(8) }]}>Live</Text>
                                                    </View>
                                                    <View>
                                                        <Text style={[{ marginLeft: Width(25) }, styles.teamName]}>{item.teamTwoName}</Text>
                                                        <View style={[styles.teamView, { marginTop: Height(3) }]}>
                                                            <Text style={[{ marginRight: Width(15) }, styles.teamShortName]}>{item.teamTwoShortName}</Text>
                                                            <Image source={item.teamTwoLogo} style={globalStyles.teamImage} />
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={styles.scrollBottomView}>
                                                    <Text style={styles.teamText}>Team<Text>(2)</Text></Text>
                                                    <Text style={styles.teamText}>Contest<Text>(2)</Text></Text>
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

const styles = StyleSheet.create({
    mainTochable: {
        height: Height(145), width: Width(335), backgroundColor: 'white', marginLeft: Width(50), borderRadius: Width(10)
    },
    matchNameText: {
        fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'black', marginTop: Height(5), marginLeft: Width(10)
    },
    lineView: {
        height: Height(1), backgroundColor: '#D9D9D9', marginTop: Height(5),
    },
    firstView: {
        height: Height(60), backgroundColor: 'white', borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25)
    },
    view: {
        backgroundColor: 'white', marginTop: Height(107), height: Height(900), borderTopLeftRadius: Width(20), borderTopRightRadius: Width(20)
    },
    scrollView: {
        marginTop: Height(120), marginBottom: Height(200),
    },
    contentStyle: {
        flexGrow: 1, paddingBottom: Height(120)
    },
    scrollSubView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    text: {
        fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(20)
    },
    notiView: {
        height: Height(30), width: Width(40), backgroundColor: '#D9D9D9', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: Width(70), borderBottomLeftRadius: Width(70)
    },
    secView: {
        marginTop: Height(15)
    },
    thirdView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15),
    },
    teamName: {
        fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black'
    },
    teamView: {
        flexDirection: 'row', alignItems: 'center',
    },
    teamShortName: {
        fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black'
    },
    scrollBottomView: {
        height: Height(30), backgroundColor: '#D9D9D9', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), marginTop: Height(22), flexDirection: 'row', alignItems: 'center'
    },
    teamText: {
        fontSize: Height(11), fontFamily: 'Poppins-Regular', color: 'black', marginLeft: Width(25)
    },
    upScrollView: {
        height: Height(180), width: Width(390), backgroundColor: 'white', borderRadius: Width(10), marginTop: Height(20), alignSelf: 'center'
    },
    lineupText: {
        fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#5556CA',
    },
    myMatchText: {
        fontSize: Height(12), fontFamily: 'Poppins-SemiBold', color: 'white'
    },
    viewAllText: {
        fontSize: Height(12), fontFamily: 'Poppins-Regular', color: 'white'
    },
    upView: {
        height: Height(150), marginTop: Height(10)
    },
    myMatchView: {
        position: 'absolute', marginTop: Height(100)
    },
    megaMainView: {
        height: Height(40), backgroundColor: '#F9F9F9', marginTop: Height(30), borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), flexDirection: 'row', alignItems: 'center'
    },
    megaView: {
        height: Height(20), width: Width(55), borderWidth: Height(1), borderColor: '#5556CA', justifyContent: 'center', alignItems: 'center', borderRadius: Width(3), marginLeft: Width(22)
    }
})