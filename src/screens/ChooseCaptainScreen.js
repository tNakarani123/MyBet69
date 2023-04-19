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
                    <View style={{ height: Height(165), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
                            <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
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

                <View style={{ height: Height(30), flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: Width(100) }}>
                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>Selected By</Text>
                        <Octicons name='arrow-down' size={Height(15)} style={{ marginLeft: Width(2) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: Width(70) }}>
                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>Points</Text>
                        <Octicons name='arrow-down' size={Height(15)} style={{ marginLeft: Width(2) }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: Width(70) }}>
                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>Credits</Text>
                        <Octicons name='arrow-down' size={Height(15)} style={{ marginLeft: Width(2) }} />
                    </TouchableOpacity>
                </View>
                <ScrollView>

                    <View style={{ height: Height(30), backgroundColor: '#636363', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'white' }}>Wicket Keeper</Text>
                    </View>
                    {getSelectedPlayersByCategory('WK').map((item, i) => {
                        const isCaptainSelected = item.id === selectedCaptainId;
                        const isViceCaptainSelected = item.id === selectedViceCaptainId;
                        return (
                            <View style={{}} key={i}>
                                <View style={{ height: Height(70), width: Width(390), borderWidth: Height(1), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderRadius: Width(10), marginTop: Height(10), borderColor: '#BEBEBE' }}>
                                    <Image source={item.image} style={{ height: Height(65), width: Width(70), resizeMode: 'contain' }} />
                                    <View style={{ marginLeft: Width(10), width: Width(100) }}>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.name}</Text>
                                        <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Regular', marginTop: Height(5), color: 'rgba(126, 126, 126, 1)' }}>Sel By {item.selby}</Text>
                                        <View style={{ flexDirection: 'row', marginTop: Height(5), alignItems: 'center' }}>
                                            <Octicons name='dot-fill' size={Height(10)} color='rgba(107, 105, 212, 1)' />
                                            <Text style={{ fontSize: Height(6), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)', marginLeft: Width(5) }}>played last match</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: Width(50), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={{ backgroundColor: isCaptainSelected ? '#5556CA' : '#D9D9D9', height: Height(30), width: Height(30), borderRadius: Height(30) / 2, justifyContent: 'center', alignItems: 'center', }}
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
                                            <Text style={{ color: isCaptainSelected ? 'white' : 'black', fontSize: Height(10), fontFamily: 'Poppins-Medium' }}>C</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: Height(6), marginTop: Height(10), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)' }}>52%</Text>
                                    </View>

                                    <View style={{ marginLeft: Width(70), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={{ backgroundColor: isViceCaptainSelected ? '#5556CA' : '#D9D9D9', height: Height(30), width: Height(30), borderRadius: Height(30) / 2, justifyContent: 'center', alignItems: 'center', }}
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
                                            <Text style={{ color: isViceCaptainSelected ? 'white' : 'black', fontSize: Height(10), fontFamily: 'Poppins-Medium' }}>VC</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: Height(6), marginTop: Height(10), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)' }}>5%</Text>
                                    </View>

                                </View>
                            </View>
                        )
                    })}

                    <View style={{ height: Height(30), backgroundColor: '#636363', justifyContent: 'center', alignItems: 'center', marginTop: Height(10) }}>
                        <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'white' }}>Batsman</Text>
                    </View>
                    {getSelectedPlayersByCategory('BAT').map((item, i) => {
                        const isCaptainSelected = item.id === selectedCaptainId;
                        const isViceCaptainSelected = item.id === selectedViceCaptainId;
                        return (
                            <View style={{}} key={i}>
                                <View style={{ height: Height(70), width: Width(390), borderWidth: Height(1), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderRadius: Width(10), marginTop: Height(10), borderColor: '#BEBEBE' }}>
                                    <Image source={item.image} style={{ height: Height(65), width: Width(70), resizeMode: 'contain' }} />
                                    <View style={{ marginLeft: Width(10), width: Width(100) }}>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.name}</Text>
                                        <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Regular', marginTop: Height(5), color: 'rgba(126, 126, 126, 1)' }}>Sel By {item.selby}</Text>
                                        <View style={{ flexDirection: 'row', marginTop: Height(5), alignItems: 'center' }}>
                                            <Octicons name='dot-fill' size={Height(10)} color='rgba(107, 105, 212, 1)' />
                                            <Text style={{ fontSize: Height(6), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)', marginLeft: Width(5) }}>played last match</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: Width(50), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={{ backgroundColor: isCaptainSelected ? '#5556CA' : '#D9D9D9', height: Height(30), width: Height(30), borderRadius: Height(30) / 2, justifyContent: 'center', alignItems: 'center', }}
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
                                            <Text style={{ color: isCaptainSelected ? 'white' : 'black', fontSize: Height(10), fontFamily: 'Poppins-Medium' }}>C</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: Height(6), marginTop: Height(10), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)' }}>52%</Text>
                                    </View>

                                    <View style={{ marginLeft: Width(70), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={{ backgroundColor: isViceCaptainSelected ? '#5556CA' : '#D9D9D9', height: Height(30), width: Height(30), borderRadius: Height(30) / 2, justifyContent: 'center', alignItems: 'center', }}
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
                                            <Text style={{ color: isViceCaptainSelected ? 'white' : 'black', fontSize: Height(10), fontFamily: 'Poppins-Medium' }}>VC</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: Height(6), marginTop: Height(10), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)' }}>5%</Text>
                                    </View>

                                </View>
                            </View>
                        )
                    })}

                    <View style={{ height: Height(30), backgroundColor: '#636363', justifyContent: 'center', alignItems: 'center', marginTop: Height(10) }}>
                        <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'white' }}>Bowler</Text>
                    </View>
                    {getSelectedPlayersByCategory('BOWL').map((item, i) => {
                        const isCaptainSelected = item.id === selectedCaptainId;
                        const isViceCaptainSelected = item.id === selectedViceCaptainId;
                        return (
                            <View style={{}} key={i}>
                                <View style={{ height: Height(70), width: Width(390), borderWidth: Height(1), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderRadius: Width(10), marginTop: Height(10), borderColor: '#BEBEBE' }}>
                                    <Image source={item.image} style={{ height: Height(65), width: Width(70), resizeMode: 'contain' }} />
                                    <View style={{ marginLeft: Width(10), width: Width(100) }}>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.name}</Text>
                                        <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Regular', marginTop: Height(5), color: 'rgba(126, 126, 126, 1)' }}>Sel By {item.selby}</Text>
                                        <View style={{ flexDirection: 'row', marginTop: Height(5), alignItems: 'center' }}>
                                            <Octicons name='dot-fill' size={Height(10)} color='rgba(107, 105, 212, 1)' />
                                            <Text style={{ fontSize: Height(6), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)', marginLeft: Width(5) }}>played last match</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: Width(50), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={{ backgroundColor: isCaptainSelected ? '#5556CA' : '#D9D9D9', height: Height(30), width: Height(30), borderRadius: Height(30) / 2, justifyContent: 'center', alignItems: 'center', }}
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
                                            <Text style={{ color: isCaptainSelected ? 'white' : 'black', fontSize: Height(10), fontFamily: 'Poppins-Medium' }}>C</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: Height(6), marginTop: Height(10), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)' }}>52%</Text>
                                    </View>

                                    <View style={{ marginLeft: Width(70), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={{ backgroundColor: isViceCaptainSelected ? '#5556CA' : '#D9D9D9', height: Height(30), width: Height(30), borderRadius: Height(30) / 2, justifyContent: 'center', alignItems: 'center', }}
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
                                            <Text style={{ color: isViceCaptainSelected ? 'white' : 'black', fontSize: Height(10), fontFamily: 'Poppins-Medium' }}>VC</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: Height(6), marginTop: Height(10), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)' }}>5%</Text>
                                    </View>

                                </View>
                            </View>
                        )
                    })}


                    <View style={{ height: Height(30), backgroundColor: '#636363', justifyContent: 'center', alignItems: 'center', marginTop: Height(10) }}>
                        <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'white' }}>All Rounder</Text>
                    </View>
                    {getSelectedPlayersByCategory('AR').map((item, i) => {
                        const isCaptainSelected = item.id === selectedCaptainId;
                        const isViceCaptainSelected = item.id === selectedViceCaptainId;
                        return (
                            <View style={{}} key={i}>
                                <View style={{ height: Height(70), width: Width(390), borderWidth: Height(1), alignSelf: 'center', flexDirection: 'row', alignItems: 'center', borderRadius: Width(10), marginTop: Height(10), borderColor: '#BEBEBE' }}>
                                    <Image source={item.image} style={{ height: Height(65), width: Width(70), resizeMode: 'contain' }} />
                                    <View style={{ marginLeft: Width(10), width: Width(100) }}>
                                        <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.name}</Text>
                                        <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Regular', marginTop: Height(5), color: 'rgba(126, 126, 126, 1)' }}>Sel By {item.selby}</Text>
                                        <View style={{ flexDirection: 'row', marginTop: Height(5), alignItems: 'center' }}>
                                            <Octicons name='dot-fill' size={Height(10)} color='rgba(107, 105, 212, 1)' />
                                            <Text style={{ fontSize: Height(6), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)', marginLeft: Width(5) }}>played last match</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: Width(50), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={{ backgroundColor: isCaptainSelected ? '#5556CA' : '#D9D9D9', height: Height(30), width: Height(30), borderRadius: Height(30) / 2, justifyContent: 'center', alignItems: 'center', }}
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
                                            <Text style={{ color: isCaptainSelected ? 'white' : 'black', fontSize: Height(10), fontFamily: 'Poppins-Medium' }}>C</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: Height(6), marginTop: Height(10), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)' }}>52%</Text>
                                    </View>

                                    <View style={{ marginLeft: Width(70), alignItems: 'center' }}>

                                        <TouchableOpacity
                                            style={{ backgroundColor: isViceCaptainSelected ? '#5556CA' : '#D9D9D9', height: Height(30), width: Height(30), borderRadius: Height(30) / 2, justifyContent: 'center', alignItems: 'center', }}
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
                                            <Text style={{ color: isViceCaptainSelected ? 'white' : 'black', fontSize: Height(10), fontFamily: 'Poppins-Medium' }}>VC</Text>
                                        </TouchableOpacity>
                                        <Text style={{ fontSize: Height(6), marginTop: Height(10), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)' }}>5%</Text>
                                    </View>

                                </View>
                            </View>
                        )
                    })}
                </ScrollView>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: Width(15) }}>
                    <TouchableOpacity style={{ height: Height(30), width: Width(140), flexDirection: 'row', backgroundColor: '#8D73BC', alignItems: 'center', borderRadius: Width(20), justifyContent: 'center' }} onPress={() => navigation.navigate('Preview', { players: selectedPlayers, captain: selectedCaptainId, viceCaptain: selectedViceCaptainId })}>
                        <Ionicons name='md-eye' size={Height(20)} color='white' />
                        <Text style={{ fontSize: Height(15), color: 'white', marginLeft: Width(10), fontFamily: 'Poppins-Medium' }}>Preview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: Height(30), width: Width(98), backgroundColor: '#8D73BC', alignItems: 'center', borderRadius: Width(20), justifyContent: 'center', marginLeft: Width(50) }} onPress={
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
                        <Text style={{ fontSize: Height(15), color: 'white', fontFamily: 'Poppins-Medium' }}>Save</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    )
}

export default ChooseCaptainScreen

const styles = StyleSheet.create({})

