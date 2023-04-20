import { Alert, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Octicons from 'react-native-vector-icons/Octicons'
import { globalStyles } from '../utils/globalStyle'
const ChooseCaptainScreen = () => {


    const navigation = useNavigation()

    const route = useRoute()
    console.log({ route });

    const selectedPlayers = route.params?.data
    const [selectedCaptainId, setSelectedCaptainId] = useState(null);
    const [selectedViceCaptainId, setSelectedViceCaptainId] = useState(null);
    const getSelectedPlayersByCategory = (category) =>
        selectedPlayers.filter((player) => player.category === category);


    console.log({ selectedPlayers });
    console.log({ selectedCaptainId });
    console.log({ selectedViceCaptainId });



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

                <View style={globalStyles.playerSelectHeaderView}>
                    <TouchableOpacity style={[globalStyles.plyaerSelectedHeaderBtn, { marginLeft: Width(100) }]}>
                        <Text style={globalStyles.blackNormalText}>Selected By</Text>
                        <Octicons name='arrow-down' size={Height(15)} style={{ marginLeft: Width(2) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.playerSelectedHeaderBtn, { marginLeft: Width(70) }]}>
                        <Text style={globalStyles.blackNormalText}>Points</Text>
                        <Octicons name='arrow-down' size={Height(15)} style={{ marginLeft: Width(2) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={[globalStyles.playerSelectedHeaderBtn, { marginLeft: Width(70) }]}>
                        <Text style={globalStyles.blackNormalText}>Credits</Text>
                        <Octicons name='arrow-down' size={Height(15)} style={{ marginLeft: Width(2) }} />
                    </TouchableOpacity>
                </View>
                <ScrollView>

                    <View style={globalStyles.catView}>
                        <Text style={globalStyles.catText}>Wicket Keeper</Text>
                    </View>
                    {getSelectedPlayersByCategory('WK').map((item, i) => {
                        const isCaptainSelected = item.id === selectedCaptainId;
                        const isViceCaptainSelected = item.id === selectedViceCaptainId;
                        return (
                            <View style={{}} key={i}>
                                <View style={styles.catMainView}>
                                    <Image source={item.image} style={globalStyles.playerImage} />
                                    <View style={globalStyles.playerView}>
                                        <Text style={globalStyles.blackNormalText}>{item.name}</Text>
                                        <Text style={globalStyles.selByText}>Sel By {item.selby}</Text>
                                        <View style={globalStyles.CaptainRowView}>
                                            <Octicons name='dot-fill' size={Height(10)} color='rgba(107, 105, 212, 1)' />
                                            <Text style={globalStyles.playedText}>played last match</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rowView}>

                                        <TouchableOpacity
                                            style={[{ backgroundColor: isCaptainSelected ? '#5556CA' : '#D9D9D9', }, styles.btn]}
                                            onPress={() => {
                                                if (isCaptainSelected) {
                                                    setSelectedCaptainId(null);
                                                } else {
                                                    setSelectedCaptainId(item.id, item);
                                                }
                                                if (item.id === selectedViceCaptainId) {
                                                    setSelectedViceCaptainId(null);
                                                }
                                            }}
                                        >
                                            <Text style={[{ color: isCaptainSelected ? 'white' : 'black', }, styles.btnText]}>C</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.percentText}>52%</Text>
                                    </View>

                                    <View style={{ marginLeft: Width(70), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={[{ backgroundColor: isViceCaptainSelected ? '#5556CA' : '#D9D9D9', }, styles.btn]}
                                            onPress={() => {
                                                if (isViceCaptainSelected) {
                                                    setSelectedViceCaptainId(null);
                                                } else {
                                                    setSelectedViceCaptainId(item.id, item);
                                                }
                                                if (item.id === selectedCaptainId) {
                                                    setSelectedCaptainId(null);
                                                }
                                            }}
                                        >
                                            <Text style={[{ color: isViceCaptainSelected ? 'white' : 'black', }, styles.btnText]}>VC</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.percentText}>5%</Text>
                                    </View>

                                </View>
                            </View>
                        )
                    })}

                    <View style={[globalStyles.catView, { marginTop: Height(10) }]}>
                        <Text style={globalStyles.catText}>Batsman</Text>
                    </View>
                    {getSelectedPlayersByCategory('BAT').map((item, i) => {
                        const isCaptainSelected = item.id === selectedCaptainId;
                        const isViceCaptainSelected = item.id === selectedViceCaptainId;
                        return (
                            <View style={{}} key={i}>
                                <View style={styles.catMainView}>
                                    <Image source={item.image} style={globalStyles.playerImage} />
                                    <View style={globalStyles.playerView}>
                                        <Text style={globalStyles.blackNormalText}>{item.name}</Text>
                                        <Text style={globalStyles.selByText}>Sel By {item.selby}</Text>
                                        <View style={globalStyles.CaptainRowView}>
                                            <Octicons name='dot-fill' size={Height(10)} color='rgba(107, 105, 212, 1)' />
                                            <Text style={globalStyles.playedText}>played last match</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rowView}>

                                        <TouchableOpacity
                                            style={[{ backgroundColor: isCaptainSelected ? '#5556CA' : '#D9D9D9', }, styles.btn]}
                                            onPress={() => {
                                                if (isCaptainSelected) {
                                                    setSelectedCaptainId(null);
                                                } else {
                                                    setSelectedCaptainId(item.id, item);
                                                }
                                                if (item.id === selectedViceCaptainId) {
                                                    setSelectedViceCaptainId(null);
                                                }
                                            }}
                                        >
                                            <Text style={[{ color: isCaptainSelected ? 'white' : 'black', }, styles.btnText]}>C</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.percentText}>52%</Text>
                                    </View>

                                    <View style={{ marginLeft: Width(70), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={[{ backgroundColor: isViceCaptainSelected ? '#5556CA' : '#D9D9D9', }, styles.btn]}
                                            onPress={() => {
                                                if (isViceCaptainSelected) {
                                                    setSelectedViceCaptainId(null);
                                                } else {
                                                    setSelectedViceCaptainId(item.id, item);
                                                }
                                                if (item.id === selectedCaptainId) {
                                                    setSelectedCaptainId(null);
                                                }
                                            }}
                                        >
                                            <Text style={[styles.btnText, { color: isViceCaptainSelected ? 'white' : 'black', }]}>VC</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.percentText}>5%</Text>
                                    </View>

                                </View>
                            </View>
                        )
                    })}

                    <View style={[globalStyles.catView, { marginTop: Height(10) }]}>
                        <Text style={globalStyles.catText}>Bowler</Text>
                    </View>
                    {getSelectedPlayersByCategory('BOWL').map((item, i) => {
                        const isCaptainSelected = item.id === selectedCaptainId;
                        const isViceCaptainSelected = item.id === selectedViceCaptainId;
                        return (
                            <View style={{}} key={i}>
                                <View style={styles.catMainView}>
                                    <Image source={item.image} style={globalStyles.playerImage} />
                                    <View style={globalStyles.playerView}>
                                        <Text style={globalStyles.blackNormalText}>{item.name}</Text>
                                        <Text style={globalStyles.selByText}>Sel By {item.selby}</Text>
                                        <View style={globalStyles.CaptainRowView}>
                                            <Octicons name='dot-fill' size={Height(10)} color='rgba(107, 105, 212, 1)' />
                                            <Text style={globalStyles.playedText}>played last match</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rowView}>

                                        <TouchableOpacity
                                            style={[{ backgroundColor: isCaptainSelected ? '#5556CA' : '#D9D9D9', }, styles.btn]}
                                            onPress={() => {
                                                if (isCaptainSelected) {
                                                    setSelectedCaptainId(null);
                                                } else {
                                                    setSelectedCaptainId(item.id, item);
                                                }
                                                if (item.id === selectedViceCaptainId) {
                                                    setSelectedViceCaptainId(null);
                                                }
                                            }}
                                        >
                                            <Text style={[{ color: isCaptainSelected ? 'white' : 'black', }, styles.btnText]}>C</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.percentText}>52%</Text>
                                    </View>

                                    <View style={{ marginLeft: Width(70), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={[{ backgroundColor: isViceCaptainSelected ? '#5556CA' : '#D9D9D9', }, styles.btn]}
                                            onPress={() => {
                                                if (isViceCaptainSelected) {
                                                    setSelectedViceCaptainId(null);
                                                } else {
                                                    setSelectedViceCaptainId(item.id, item);
                                                }
                                                if (item.id === selectedCaptainId) {
                                                    setSelectedCaptainId(null);
                                                }
                                            }}
                                        >
                                            <Text style={[{ color: isViceCaptainSelected ? 'white' : 'black', }, styles.btnText]}>VC</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.percentText}>5%</Text>
                                    </View>

                                </View>
                            </View>
                        )
                    })}


                    <View style={[globalStyles.catView, { marginTop: Height(10) }]}>
                        <Text style={globalStyles.catText}>All Rounder</Text>
                    </View>
                    {getSelectedPlayersByCategory('AR').map((item, i) => {
                        const isCaptainSelected = item.id === selectedCaptainId;
                        const isViceCaptainSelected = item.id === selectedViceCaptainId;
                        return (
                            <View style={{}} key={i}>
                                <View style={styles.catMainView}>
                                    <Image source={item.image} style={globalStyles.playerImage} />
                                    <View style={globalStyles.playerView}>
                                        <Text style={globalStyles.blackNormalText}>{item.name}</Text>
                                        <Text style={globalStyles.selByText}>Sel By {item.selby}</Text>
                                        <View style={globalStyles.CaptainRowView}>
                                            <Octicons name='dot-fill' size={Height(10)} color='rgba(107, 105, 212, 1)' />
                                            <Text style={globalStyles.playedText}>played last match</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rowView}>

                                        <TouchableOpacity
                                            style={[{ backgroundColor: isCaptainSelected ? '#5556CA' : '#D9D9D9', }, styles.btn]}
                                            onPress={() => {
                                                if (isCaptainSelected) {
                                                    setSelectedCaptainId(null);
                                                } else {
                                                    setSelectedCaptainId(item.id, item);
                                                }
                                                if (item.id === selectedViceCaptainId) {
                                                    setSelectedViceCaptainId(null);
                                                }
                                            }}
                                        >
                                            <Text style={[{ color: isCaptainSelected ? 'white' : 'black', }, styles.btnText]}>C</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.percentText}>52%</Text>
                                    </View>

                                    <View style={{ marginLeft: Width(70), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={[{ backgroundColor: isViceCaptainSelected ? '#5556CA' : '#D9D9D9', }, styles.btn]}
                                            onPress={() => {
                                                if (isViceCaptainSelected) {
                                                    setSelectedViceCaptainId(null);
                                                } else {
                                                    setSelectedViceCaptainId(item.id, item);
                                                }
                                                if (item.id === selectedCaptainId) {
                                                    setSelectedCaptainId(null);
                                                }
                                            }}
                                        >
                                            <Text style={[{ color: isViceCaptainSelected ? 'white' : 'black', }, styles.btnText]}>VC</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.percentText}>5%</Text>
                                    </View>

                                </View>
                            </View>
                        )
                    })}
                </ScrollView>

                <View style={globalStyles.playerBottomView}>
                    <TouchableOpacity style={globalStyles.playerBottomBtn} onPress={() => navigation.navigate('Preview', { players: selectedPlayers, captain: selectedCaptainId, viceCaptain: selectedViceCaptainId })}>
                        <Ionicons name='md-eye' size={Height(20)} color='white' />
                        <Text style={globalStyles.playerBottomBtnText}>Preview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.playerBottomSecBtn} onPress={
                        () => {
                            if (selectedCaptainId === null) {
                                Alert.alert("Please Select Captain ")
                            }
                            else if (selectedViceCaptainId === null) {
                                Alert.alert("Please Select Vice Captain")
                            }
                            else {
                                navigation.navigate('CreateContest', { data: selectedPlayers, captain: selectedCaptainId, viceCaptain: selectedViceCaptainId })
                            }
                        }
                    }>
                        <Text style={globalStyles.playerBottomSecBtnText}>Save</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    )
}

export default ChooseCaptainScreen

const styles = StyleSheet.create({
    catMainView: {
        height: Height(70), width: Width(390), borderWidth: Height(1), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderRadius: Width(10), marginTop: Height(10), borderColor: '#BEBEBE'
    },
    rowView: {
        marginLeft: Width(50), alignItems: 'center'
    },
    btn: {
        height: Height(30), width: Height(30), borderRadius: Height(30) / 2, justifyContent: 'center', alignItems: 'center',
    },
    btnText: {
        fontSize: Height(10), fontFamily: 'Poppins-Medium'
    },
    percentText: {
        fontSize: Height(6), marginTop: Height(10), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)'
    }
})

