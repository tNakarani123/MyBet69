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
                        <View style={{ height: Height(165), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white', zIndex: 0, position: 'absolute', width: Width(430) }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
                                <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} color='black' />
                                <MyBetComponent width={Width(102)} height={Height(15)} />
                                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                    <Ionicons name='arrow-back' size={Height(30)} color='white' />
                                </TouchableOpacity>
                            </View>
                            <Text style={globalStyles.headerText}>Create Team</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(15) }}>
                                <Image source={require('../assets/images/gt.png')} style={{ width: Width(65), height: Height(48) }} />
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>23m</Text>
                                <Image source={require('../assets/images/mi.png')} style={{ width: Width(65), height: Height(48) }} />
                            </View>
                        </View>
                    </DropShadow>
                    <View style={{ height: Height(70), backgroundColor: '#636363', zIndex: -1, position: 'relative', marginTop: Height(150), paddingTop: Height(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(50) }}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white' }}>GT</Text>
                            <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white' }}>{findTeam('Gujrat Titans').length}</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white' }}>Players</Text>
                            <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white' }}>11</Text>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white' }}>MI</Text>
                            <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white' }}>{findTeam('Mumbai Indians').length}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ height: Height(1), backgroundColor: '#515151' }} />
                <View style={{ height: Height(30), backgroundColor: '#636363', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'white' }}>Wicket Keeper</Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginHorizontal: Width(25), marginTop: Height(15) }}>
                    {getSelectedPlayersByCategory('WK').map((item, i) => {
                        return (
                            <View key={i} >
                                <View style={{ alignItems: 'center', marginTop: Height(8) }}>
                                    <Image source={item.image} style={{ height: Height(65), width: Width(70), resizeMode: 'contain' }} />
                                    <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white', marginTop: Height(5) }}>{item.points}</Text>
                                </View>
                                {item.captain ?
                                    <View style={{ height: Height(22), width: Height(22), borderRadius: Height(22) / 2, backgroundColor: '#5556CA', justifyContent: 'center', alignItems: 'center', position: 'absolute', marginRight: Width(50), alignSelf: 'flex-end', }}>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'white' }}>C</Text>
                                    </View> : null}
                                {
                                    item.viceCaptain ?
                                        <View style={{ height: Height(22), width: Height(22), borderRadius: Height(22) / 2, backgroundColor: '#5556CA', justifyContent: 'center', alignItems: 'center', position: 'absolute', marginRight: Width(50), alignSelf: 'flex-end', }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'white' }}>VC</Text>
                                        </View> : null
                                }
                            </View>
                        )
                    })
                    }
                </View>

                <View style={{ height: Height(30), backgroundColor: '#636363', justifyContent: 'center', alignItems: 'center', marginTop: Height(10) }}>
                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'white' }}>Batsman</Text>
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginHorizontal: Width(25), marginTop: Height(15) }}>
                    {getSelectedPlayersByCategory('BAT').map((item, i) => {
                        return (
                            <View key={i} >
                                <View style={{ alignItems: 'center', marginTop: Height(8) }}>
                                    <Image source={item.image} style={{ height: Height(65), width: Width(70), resizeMode: 'contain' }} />
                                    <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white', marginTop: Height(5) }}>{item.points}</Text>
                                </View>
                                {item.captain ?
                                    <View style={{ height: Height(22), width: Height(22), borderRadius: Height(22) / 2, backgroundColor: '#5556CA', justifyContent: 'center', alignItems: 'center', position: 'absolute', marginRight: Width(50), alignSelf: 'flex-end', }}>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'white' }}>C</Text>
                                    </View> : null}
                                {
                                    item.viceCaptain ?
                                        <View style={{ height: Height(22), width: Height(22), borderRadius: Height(22) / 2, backgroundColor: '#5556CA', justifyContent: 'center', alignItems: 'center', position: 'absolute', marginRight: Width(50), alignSelf: 'flex-end', }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'white' }}>VC</Text>
                                        </View> : null
                                }
                            </View>
                        )
                    })
                    }
                </View>


                <View style={{ height: Height(30), backgroundColor: '#636363', justifyContent: 'center', alignItems: 'center', marginTop: Height(10) }}>
                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'white' }}>All Rounder</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginHorizontal: Width(25), marginTop: Height(15) }}>
                    {getSelectedPlayersByCategory('AR').map((item, i) => {
                        return (
                            <View key={i} >
                                <View style={{ alignItems: 'center', marginTop: Height(8) }}>
                                    <Image source={item.image} style={{ height: Height(65), width: Width(70), resizeMode: 'contain' }} />
                                    <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white', marginTop: Height(5) }}>{item.points}</Text>
                                </View>
                                {item.captain ?
                                    <View style={{ height: Height(22), width: Height(22), borderRadius: Height(22) / 2, backgroundColor: '#5556CA', justifyContent: 'center', alignItems: 'center', position: 'absolute', marginRight: Width(50), alignSelf: 'flex-end', }}>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'white' }}>C</Text>
                                    </View> : null}
                                {
                                    item.viceCaptain ?
                                        <View style={{ height: Height(22), width: Height(22), borderRadius: Height(22) / 2, backgroundColor: '#5556CA', justifyContent: 'center', alignItems: 'center', position: 'absolute', marginRight: Width(50), alignSelf: 'flex-end', }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'white' }}>VC</Text>
                                        </View> : null
                                }
                            </View>
                        )
                    })
                    }
                </View>
                <View style={{ height: Height(30), backgroundColor: '#636363', justifyContent: 'center', alignItems: 'center', marginTop: Height(10) }}>
                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'white' }}>Bowler</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', marginHorizontal: Width(25), marginTop: Height(15) }}>
                    {getSelectedPlayersByCategory('BOWL').map((item, i) => {
                        return (
                            <View key={i} >
                                <View style={{ alignItems: 'center', marginTop: Height(8) }}>
                                    <Image source={item.image} style={{ height: Height(65), width: Width(70), resizeMode: 'contain' }} />
                                    <Text style={{ fontSize: Height(12), fontFamily: 'Poppins-Medium', color: 'white', marginTop: Height(5) }}>{item.points}</Text>
                                </View>
                                {item.captain ?
                                    <View style={{ height: Height(22), width: Height(22), borderRadius: Height(22) / 2, backgroundColor: '#5556CA', justifyContent: 'center', alignItems: 'center', position: 'absolute', marginRight: Width(50), alignSelf: 'flex-end', }}>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'white' }}>C</Text>
                                    </View> : null}
                                {
                                    item.viceCaptain ?
                                        <View style={{ height: Height(22), width: Height(22), borderRadius: Height(22) / 2, backgroundColor: '#5556CA', justifyContent: 'center', alignItems: 'center', position: 'absolute', marginRight: Width(50), alignSelf: 'flex-end', }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'white' }}>VC</Text>
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

const styles = StyleSheet.create({})