import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { globalStyles } from '../utils/globalStyle'
const PreviewScreen = () => {


    const navigation = useNavigation()

    const route = useRoute()
    console.log({ route });

    const players = route.params?.players

    const captain = route.params?.captain

    const viceCaptain = route.params?.viceCaptain

    console.log({ players });

    console.log({ captain });

    console.log({ viceCaptain });

    const updatedPlayers = players.map((player) => {
        if (player.id === captain) {
            return { ...player, captain: true };
        }
        if (player.id === viceCaptain) {
            return { ...player, viceCaptain: true };
        }
        return player;
    });

    console.log({ updatedPlayers });


    const getSelectedPlayersByCategory = (category) =>
        updatedPlayers.filter((player) => player.category === category);

    console.log(getSelectedPlayersByCategory('BOWL'));

    const findTeam = (team) =>
        updatedPlayers.filter((player) => player.team === team)


    console.log(findTeam('Mumbai Indians').length);
    console.log(findTeam('Gujrat Titans').length);
    return (
        <ImageBackground source={require('../assets/images/preview.png')} style={globalStyles.container}>
            <SafeAreaView
                style={globalStyles.safeView}
            />
            <SafeAreaView style={globalStyles.container}>

                <View style={{}}>
                    <DropShadow style={globalStyles.shadow}>
                        <View style={styles.headerView}>
                            <View style={globalStyles.contestRowView}>
                                <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} color='black' />
                                <MyBetComponent width={Width(102)} height={Height(15)} />
                                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                    <Ionicons name='arrow-back' size={Height(30)} color='white' />
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
                    <View style={styles.view}>
                        <View style={globalStyles.alignCenterView}>
                            <Text style={styles.text}>GT</Text>
                            <Text style={styles.text}>{findTeam('Gujrat Titans').length}</Text>
                        </View>
                        <View style={globalStyles.alignCenterView}>
                            <Text style={styles.text}>Players</Text>
                            <Text style={styles.text}>11</Text>
                        </View>
                        <View style={globalStyles.alignCenterView}>
                            <Text style={styles.text}>MI</Text>
                            <Text style={styles.text}>{findTeam('Mumbai Indians').length}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.line} />
                <View style={globalStyles.catView}>
                    <Text style={globalStyles.catText}>Wicket Keeper</Text>
                </View>

                <View style={styles.playerView}>
                    {getSelectedPlayersByCategory('WK').map((item, i) => {
                        return (
                            <View key={i} >
                                <View style={styles.subView}>
                                    <Image source={item.image} style={globalStyles.playerImage} />
                                    <Text style={[{ marginTop: Height(5) }, styles.text]}>{item.points}</Text>
                                </View>
                                {item.captain ?
                                    <View style={styles.captainView}>
                                        <Text style={styles.captainText}>C</Text>
                                    </View> : null}
                                {
                                    item.viceCaptain ?
                                        <View style={styles.captainView}>
                                            <Text style={styles.captainText}>VC</Text>
                                        </View> : null
                                }
                            </View>
                        )
                    })
                    }
                </View>

                <View style={[globalStyles.catView, { marginTop: Height(10) }]}>
                    <Text style={globalStyles.catText}>Batsman</Text>
                </View>

                <View style={styles.playerView}>
                    {getSelectedPlayersByCategory('BAT').map((item, i) => {
                        return (
                            <View key={i} >
                                <View style={styles.subView}>
                                    <Image source={item.image} style={globalStyles.playerImage} />
                                    <Text style={[{ marginTop: Height(5) }, styles.text]}>{item.points}</Text>
                                </View>
                                {item.captain ?
                                    <View style={styles.captainView}>
                                        <Text style={styles.captainText}>C</Text>
                                    </View> : null}
                                {
                                    item.viceCaptain ?
                                        <View style={styles.captainView}>
                                            <Text style={styles.captainText}>VC</Text>
                                        </View> : null
                                }
                            </View>
                        )
                    })
                    }
                </View>


                <View style={[globalStyles.catView, { marginTop: Height(10) }]}>
                    <Text style={globalStyles.catText}>All Rounder</Text>
                </View>
                <View style={styles.playerView}>
                    {getSelectedPlayersByCategory('AR').map((item, i) => {
                        return (
                            <View key={i} >
                                <View style={styles.subView}>
                                    <Image source={item.image} style={globalStyles.playerImage} />
                                    <Text style={[{ marginTop: Height(5) }, styles.text]}>{item.points}</Text>
                                </View>
                                {item.captain ?
                                    <View style={styles.captainView}>
                                        <Text style={styles.captainText}>C</Text>
                                    </View> : null}
                                {
                                    item.viceCaptain ?
                                        <View style={styles.captainView}>
                                            <Text style={styles.captainText}>VC</Text>
                                        </View> : null
                                }
                            </View>
                        )
                    })
                    }
                </View>
                <View style={[globalStyles.catView, { marginTop: Height(10) }]}>
                    <Text style={globalStyles.catText}>Bowler</Text>
                </View>
                <View style={styles.playerView}>
                    {getSelectedPlayersByCategory('BOWL').map((item, i) => {
                        return (
                            <View key={i} >
                                <View style={styles.subView}>
                                    <Image source={item.image} style={globalStyles.playerImage} />
                                    <Text style={[{ marginTop: Height(5) }, styles.text]}>{item.points}</Text>
                                </View>
                                {item.captain ?
                                    <View style={styles.captainView}>
                                        <Text style={styles.captainText}>C</Text>
                                    </View> : null}
                                {
                                    item.viceCaptain ?
                                        <View style={styles.captainView}>
                                            <Text style={styles.captainText}>VC</Text>
                                        </View> : null
                                }
                            </View>
                        )
                    })
                    }
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default PreviewScreen

const styles = StyleSheet.create({
    playerView: {
        flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginHorizontal: Width(25), marginTop: Height(15)
    },
    headerView: {
        height: Height(165), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white', zIndex: 0, position: 'absolute', width: Width(430)
    },
    view: {
        height: Height(70), backgroundColor: '#636363', zIndex: -1, position: 'relative', marginTop: Height(150), paddingTop: Height(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(50)
    },
    text: {
        fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white'
    },
    captainView: {
        height: Height(22), width: Height(22), borderRadius: Height(22) / 2, backgroundColor: '#5556CA', justifyContent: 'center', alignItems: 'center', position: 'absolute', marginRight: Width(50), alignSelf: 'flex-end',
    },
    captainText: {
        fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'white'
    },
    line: {
        height: Height(1), backgroundColor: '#515151'
    },
    subView: {
        alignItems: 'center', marginTop: Height(8)
    }
})