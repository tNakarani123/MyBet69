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
import { globalStyles } from '../utils/globalStyle'
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
                        style={globalStyles.safeView}
                    />
                    <SafeAreaView style={globalStyles.container}>
                        <DropShadow style={globalStyles.shadow}>
                            <View style={globalStyles.headerView}>
                                <View style={globalStyles.headerSubView}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={globalStyles.headerText}>My Matches</Text>
                            </View>
                        </DropShadow>

                        <View style={styles.headerView}>
                            <TouchableOpacity style={[{ backgroundColor: index === 1 ? '#5556CA' : 'white' }, styles.headerViewBtn]} onPress={() => { setSelected(''), setIndex(1) }}>
                                <Text style={[{ color: index === 1 ? 'white' : '#5556CA' }, styles.headerText]}>Upcoming</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ backgroundColor: index === 2 ? '#5556CA' : 'white' }, styles.headerViewBtn]} onPress={() => { setIndex(2) }}>
                                <Text style={[{ color: index === 2 ? 'white' : '#5556CA' }, styles.headerText]}>Live</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ backgroundColor: index === 3 ? '#5556CA' : 'white' }, styles.headerViewBtn]} onPress={() => { setSelected('Completed'), setIndex(3) }}>
                                <Text style={[{ color: index === 3 ? 'white' : '#5556CA' }, styles.headerText]}>Completed</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            {LiveMatch.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={styles.view} onPress={() => navigation.navigate('CreateContest')}>
                                        <View style={styles.frontView}>
                                            <Text style={globalStyles.blackNormalText}>{item.matchName}</Text>

                                        </View>
                                        <View style={styles.lineView} />
                                        <View style={styles.subView}>
                                            <View>
                                                <Text style={globalStyles.blackNormalText}>{item.teamOneName}</Text>
                                                <View style={styles.rowView}>
                                                    <Image source={item.teamOneLogo} style={globalStyles.teamImage} />
                                                    <Text style={[{ marginLeft: Width(15) }, styles.teamName]}>{item.teamOneShortName}</Text>
                                                </View>
                                            </View>
                                            <View style={globalStyles.contestItemRowView}>
                                                <Octicons name='dot-fill' size={Height(20)} color='#FF0707' />
                                                <Text style={[globalStyles.blackNormalText, { marginLeft: Width(8) }]}>{item.time}</Text>
                                            </View>
                                            <View>
                                                <Text style={[globalStyles.blackNormalText, { marginLeft: Width(25) }]}>{item.teamTwoName}</Text>
                                                <View style={styles.rowView}>
                                                    <Text style={[{ marginRight: Width(15) }, styles.teamName]}>{item.teamTwoShortName}</Text>
                                                    <Image source={item.teamTwoLogo} style={globalStyles.teamImage} />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.bottomView}>
                                            <Text style={[globalStyles.blackNormalText, { marginLeft: Width(17) }]}>1 Team</Text>
                                            <Text style={[globalStyles.blackNormalText, { marginLeft: Width(17) }]}>1 Contest</Text>
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
                        style={globalStyles.safeView}
                    />
                    <SafeAreaView style={{ flex: 1 }}>
                        <DropShadow style={globalStyles.shadow}>
                            <View style={globalStyles.headerView}>
                                <View style={globalStyles.headerSubView}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={globalStyles.headerText}>My Matches</Text>
                            </View>
                        </DropShadow>

                        <View style={styles.headerView}>
                            <TouchableOpacity style={[{ backgroundColor: index === 1 ? '#5556CA' : 'white' }, styles.headerViewBtn]} onPress={() => { setSelected(''), setIndex(1) }}>
                                <Text style={[{ color: index === 1 ? 'white' : '#5556CA' }, styles.headerText]}>Upcoming</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ backgroundColor: index === 2 ? '#5556CA' : 'white' }, styles.headerViewBtn]} onPress={() => { setSelected('Live'), setIndex(2) }}>
                                <Text style={[{ color: index === 2 ? 'white' : '#5556CA' }, styles.headerText]}>Live</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ backgroundColor: index === 3 ? '#5556CA' : 'white' }, styles.headerViewBtn]} onPress={() => { setIndex(3) }}>
                                <Text style={[{ color: index === 3 ? 'white' : '#5556CA', }, styles.headerText]}>Completed</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            {CompleteMatch.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={styles.view} onPress={() => navigation.navigate('CompletedMatches', { data: item })}>
                                        <View style={styles.frontView}>
                                            <Text style={globalStyles.blackNormalText}>{item.matchName}</Text>

                                        </View>
                                        <View style={styles.lineView} />
                                        <View style={styles.subView}>
                                            <View style={{}}>
                                                <Text style={globalStyles.blackNormalText}>{item.teamOneName}</Text>
                                                <View style={styles.rowView}>
                                                    <Image source={item.teamOneLogo} style={globalStyles.teamImage} />
                                                    <Text style={[{ marginLeft: Width(15) }, styles.teamName]}>{item.teamOneShortName}</Text>
                                                </View>
                                            </View>
                                            <View style={globalStyles.contestItemRowView}>
                                                <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                                <Text style={[globalStyles.blackNormalText, { marginLeft: Width(8) }]}>{item.time}</Text>
                                            </View>
                                            <View>
                                                <Text style={[globalStyles.blackNormalText, { marginLeft: Width(25) }]}>{item.teamTwoName}</Text>
                                                <View style={styles.rowView}>
                                                    <Text style={[{ marginRight: Width(15) }, styles.teamName]}>{item.teamTwoShortName}</Text>
                                                    <Image source={item.teamTwoLogo} style={globalStyles.teamImage} />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.bottomView}>
                                            <Text style={[globalStyles.blackNormalText, { marginLeft: Width(17) }]}>1 Team</Text>
                                            <Text style={[globalStyles.blackNormalText, { marginLeft: Width(17) }]}>1 Contest</Text>
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
                        style={globalStyles.safeView}
                    />
                    <SafeAreaView style={{ flex: 1 }}>
                        <DropShadow style={globalStyles.shadow}>
                            <View style={globalStyles.headerView}>
                                <View style={globalStyles.headerSubView}>
                                    <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                                    <MyBetComponent width={Width(102)} height={Height(15)} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                        <NotificationComponent size={Height(25)} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={globalStyles.headerText}>My Matches</Text>
                            </View>
                        </DropShadow>

                        <View style={styles.headerView}>
                            <TouchableOpacity style={[{ backgroundColor: index === 1 ? '#5556CA' : 'white', }, styles.headerViewBtn]} onPress={() => { setIndex(1) }}>
                                <Text style={[{ color: index === 1 ? 'white' : '#5556CA' }, styles.headerText]}>Upcoming</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ backgroundColor: index === 2 ? '#5556CA' : 'white' }, styles.headerViewBtn]} onPress={() => { setSelected('Live'), setIndex(2) }}>
                                <Text style={[{ color: index === 2 ? 'white' : '#5556CA', }, styles.headerText]}>Live</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[{ backgroundColor: index === 3 ? '#5556CA' : 'white' }, styles.headerViewBtn]} onPress={() => { setSelected('Completed'), setIndex(3) }}>
                                <Text style={[{ color: index === 3 ? 'white' : '#5556CA', }, styles.headerText]}>Completed</Text>
                            </TouchableOpacity>
                        </View>

                        <ScrollView>
                            {upcomingMatch.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={styles.view} onPress={() => navigation.navigate('CreateContest')}>
                                        <View style={styles.frontView}>
                                            <Text style={globalStyles.blackNormalText}>{item.fansCode}</Text>
                                            <View style={globalStyles.contestItemRowView}>
                                                <Feather name='clock' size={Height(15)} color='#5556CA' />
                                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#5556CA', marginLeft: Width(15) }}>Lineups Out</Text>
                                            </View>
                                        </View>
                                        <View style={styles.lineView} />
                                        <View style={styles.subView}>
                                            <View style={{}}>
                                                <Text style={globalStyles.blackNormalText}>{item.teamOneName}</Text>
                                                <View style={styles.rowView}>
                                                    <Image source={item.teamOneLogo} style={globalStyles.teamImage} />
                                                    <Text style={[{ marginLeft: Width(15) }, styles.teamName]}>{item.teamOneShortName}</Text>
                                                </View>
                                            </View>
                                            <Text style={globalStyles.headerTimeText}>{item.time}</Text>
                                            <View>
                                                <Text style={[globalStyles.blackNormalText, { marginLeft: Width(25) }]}>{item.teamTwoName}</Text>
                                                <View style={styles.rowView}>
                                                    <Text style={[{ marginRight: Width(15) }, styles.teamName]}>{item.teamTwoShortName}</Text>
                                                    <Image source={item.teamTwoLogo} style={globalStyles.teamImage} />
                                                </View>
                                            </View>
                                        </View>
                                        <View style={styles.bottomView}>
                                            <Text style={[globalStyles.blackNormalText, { marginLeft: Width(17) }]}>1 Team</Text>
                                            <Text style={[globalStyles.blackNormalText, { marginLeft: Width(17) }]}>1 Contest</Text>
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

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(10)
    },
    headerViewBtn: {
        height: Height(35), width: Width(90), justifyContent: 'center', alignItems: 'center', borderRadius: Width(20)
    },
    headerText: {
        fontSize: Height(12), fontFamily: 'Poppins-Medium',
    },
    view: {
        height: Height(180), width: Width(390), backgroundColor: 'white', borderRadius: Width(10), marginTop: Height(20), alignSelf: 'center'
    },
    frontView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(5)
    },
    lineView: {
        height: Height(1), backgroundColor: '#D9D9D9', marginTop: Height(5),
    },
    subView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(10)
    },
    rowView: {
        flexDirection: 'row', alignItems: 'center', marginTop: Height(10)
    },
    teamName: {
        fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black'
    },
    bottomView: {
        height: Height(40), backgroundColor: '#F9F9F9', marginTop: Height(30), borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), flexDirection: 'row', alignItems: 'center'
    }
})