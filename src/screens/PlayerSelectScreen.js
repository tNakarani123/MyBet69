import { Alert, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { team1Players, team2Players } from '../utils/data'
import { PlayerCard, SelectedPlayerCard } from '../utils/card'
import Octicons from 'react-native-vector-icons/Octicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
const categories = ['WK', 'BAT', 'AR', 'BOWL'];

const PlayerSelectScreen = () => {
    const navigation = useNavigation()

    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const selectPlayer = (player) => {
        if (selectedPlayers.length < 11) {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    const deselectPlayer = (id) => {
        setSelectedPlayers(selectedPlayers.filter((p) => p.id !== id));
    };

    const [selectedCategory, setSelectedCategory] = useState('WK');


    const filteredTeam1Players = team1Players.filter(
        (player) => player.category === selectedCategory
    );
    const filteredTeam2Players = team2Players.filter(
        (player) => player.category === selectedCategory
    );
    const filteredPlayers = [...filteredTeam1Players, ...filteredTeam2Players];

    console.log({ selectedPlayers });

    const removeAllPlayers = () => {
        setSelectedPlayers([]);
    };


    return (
        <>
            <SafeAreaView
                style={{ flex: 0, backgroundColor: 'white' }}
            />
            <SafeAreaView style={{ flex: 1 }}>
                <DropShadow style={{
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.17,
                    shadowRadius: 3.05,
                    elevation: 4
                }}>
                    <View style={{ height: Height(165), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(20) }}>
                            <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>Create Team</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(15) }}>
                            <Image source={require('../assets/images/gt.png')} style={{ width: Width(65), height: Height(48) }} />
                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: '#FF0000', marginLeft: Width(8) }}>23m</Text>
                            <Image source={require('../assets/images/mi.png')} style={{ width: Width(65), height: Height(48) }} />
                        </View>
                    </View>
                </DropShadow>
                <View style={{ height: Height(145), backgroundColor: '#AEAEE6', }}>
                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Regular', textAlign: 'center', marginTop: Height(10) }}>Maximum of 10 players from a one team</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(15) }}>
                        <View style={{ flexDirection: 'row', width: Width(160), justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#252525' }}>Players</Text>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black' }}>0/11</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: Width(95), justifyContent: 'space-between' }}>
                                <Image source={require('../assets/images/gt.png')} style={{ width: Width(45), height: Height(30) }} />
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: '#252525' }}>GT</Text>
                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Bold', color: 'black' }}>0</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: Width(160), justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', width: Width(95), justifyContent: 'space-between' }}>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: '#252525' }}>MI</Text>
                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Bold', color: 'black' }}>0</Text>
                                </View>
                                <Image source={require('../assets/images/mi.png')} style={{ width: Width(45), height: Height(30), }} />
                            </View>
                            <View style={{ alignItems: 'center', }}>
                                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: '#252525' }}>Credits Left</Text>
                                <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black' }}>91.0</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(20), marginHorizontal: Width(20) }}>

                        <View style={styles.selectedPlayers}>
                            {selectedPlayers.map((player, i) => (
                                <View key={i}>
                                    <SelectedPlayerCard
                                        key={player.id}
                                        player={player}
                                        onDeselect={() => deselectPlayer(player.id)}
                                    />
                                </View>
                            ))}
                        </View>
                        <EvilIcons name='minus' size={Height(30)} style={{}} onPress={removeAllPlayers} />
                    </View>
                </View>
                <View style={styles.categories}>
                    {categories.map((category, i) => {
                        const selectedPlayersInCategory = selectedPlayers.filter((p) => p.category === category);
                        return (
                            <TouchableOpacity onPress={() => setSelectedCategory(category)} style={{ borderBottomWidth: selectedCategory === category ? Height(1) : null, paddingBottom: Width(10), borderColor: 'white', marginHorizontal: Width(25) }} key={i}>
                                <Text
                                    key={category}
                                    style={[
                                        styles.category,
                                        selectedCategory === category && styles.selectedCategory,
                                    ]}
                                >
                                    {category}({selectedPlayersInCategory.length})
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                    }
                </View>
                <View style={{ height: Height(30), backgroundColor: 'black', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: Width(30) }}>
                    <Text style={{ color: 'white', fontSize: Height(10), fontFamily: 'Poppins-Medium' }}>Select 1-8 Wicket-Keepers</Text>
                    <Ionicons name='md-filter' size={Height(20)} color='white' />
                </View>
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
                    <View>
                        <ScrollView>
                            {
                                filteredPlayers.map((item, index) => {
                                    return (
                                        <View key={index}>

                                            <PlayerCard
                                                player={item}
                                                isSelected={selectedPlayers.some((p) => p.id === item.id)}
                                                onSelect={() => selectPlayer(item)}
                                                onDeselect={() => deselectPlayer(item.id)}
                                            />
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </ScrollView>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: Width(15) }}>
                    <TouchableOpacity style={{ height: Height(30), width: Width(140), flexDirection: 'row', backgroundColor: '#8D73BC', alignItems: 'center', borderRadius: Width(20), justifyContent: 'center' }}>
                        <Ionicons name='md-eye' size={Height(20)} color='white' />
                        <Text style={{ fontSize: Height(15), color: 'white', marginLeft: Width(10), fontFamily: 'Poppins-Medium' }}>Preview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: Height(30), width: Width(98), backgroundColor: '#8D73BC', alignItems: 'center', borderRadius: Width(20), justifyContent: 'center', marginLeft: Width(50) }} onPress={() => {
                        if (selectedPlayers.length < 11) {
                            Alert.alert("Please Player")
                        } else {
                            navigation.navigate('ChooseCaptain', { data: selectedPlayers })
                        }
                    }
                    }
                    >
                        <Text style={{ fontSize: Height(15), color: 'white', fontFamily: 'Poppins-Medium' }}>Next</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    )
}

export default PlayerSelectScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    categories: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#6B69D4',
        height: Height(50),
    },
    category: {
        fontSize: Height(14),
        color: 'white',
        fontFamily: 'Poppins-Regular',
        borderBottomWidth: Height(1),
        borderBottomColor: 'white'

    },
    selectedCategory: {
        borderBottomWidth: Height(1),
        fontFamily: 'Poppins-Black',
        color: 'white',
        fontSize: Height(14),
    },
    selectedPlayers: {
        flexDirection: 'row',
    },
    selectedPlayersTitle: {
        height: Height(25), width: Height(25), backgroundColor: '#5556CA', borderRadius: Height(25) / 2
    },
    players: {
        height: Height(25), width: Height(25), backgroundColor: 'white', borderRadius: Height(25) / 2
    }
});