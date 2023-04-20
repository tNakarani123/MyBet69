import { Alert, FlatList, Image, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import ClearAllComponent from '../assets/svg/ClearAll'
import font from '../utils/fonts'
import color from '../utils/color'
import { globalStyles } from '../utils/globalStyle'
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
        setModalVisible(!modalVisible)
    };

    const [modalVisible, setModalVisible] = useState(false);
    const [secModalVisible, setSecModalVisible] = useState(false)
    const [index, setIndex] = useState(3)
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
                                <View style={globalStyles.alignCenterView}>
                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: '#252525' }}>GT</Text>
                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Bold', color: 'black' }}>0</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', width: Width(160), justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', width: Width(95), justifyContent: 'space-between' }}>
                                <View style={globalStyles.alignCenterView}>
                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Medium', color: '#252525' }}>MI</Text>
                                    <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-Bold', color: 'black' }}>0</Text>
                                </View>
                                <Image source={require('../assets/images/mi.png')} style={{ width: Width(45), height: Height(30), }} />
                            </View>
                            <View style={globalStyles.alignCenterView}>
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
                        <EvilIcons name='minus' size={Height(30)} style={{}} onPress={() => setModalVisible(true)} />
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
                    <Ionicons name='md-filter' size={Height(20)} color='white' onPress={() => setSecModalVisible(true)} />
                </View>
                <View style={globalStyles.playerSelectHeaderView}>
                    <TouchableOpacity style={[globalStyles.playerSelectedHeaderBtn, { marginLeft: Width(100) }]}>
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

                <View style={globalStyles.playerBottomView}>
                    <TouchableOpacity style={globalStyles.playerBottomBtn}>
                        <Ionicons name='md-eye' size={Height(20)} color='white' />
                        <Text style={globalStyles.playerBottomBtnText}>Preview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.playerBottomSecBtn} onPress={() => {
                        if (selectedPlayers.length < 11) {
                            Alert.alert("Please Player")
                        } else {
                            navigation.navigate('ChooseCaptain', { data: selectedPlayers })
                        }
                    }
                    }
                    >
                        <Text style={globalStyles.playerBottomSecBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
                <View>

                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, marginVertical: Height(20), color: color.text }}>Clear Team?</Text>

                                    <ClearAllComponent size={Height(100)} />
                                    <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6, marginTop: Height(20) }}>Are You Sure Your Want To Clear Your Player Selections?</Text>
                                    <TouchableOpacity style={{ height: Height(50), width: Width(350), backgroundColor: '#5556CA', justifyContent: 'center', alignItems: 'center', borderRadius: Width(10), marginTop: Height(20) }} onPress={removeAllPlayers}>
                                        <Text style={{ fontSize: Height(16), color: color.background, fontFamily: font.POPPINS_MEDIUM }}>Yes, Clear</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ height: Height(50), width: Width(350), justifyContent: 'center', alignItems: 'center', borderRadius: Width(10), marginTop: Height(10), borderWidth: Height(1), borderColor: '#5556CA' }} onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={{ fontSize: Height(16), color: '#5556CA', fontFamily: font.POPPINS_MEDIUM }}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                    </View>
                </View>
                <View>

                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={secModalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setSecModalVisible(!secModalVisible);
                            }}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'flex-end',
                            }}>
                                <View style={{
                                    height: Height(280),
                                    backgroundColor: 'white',
                                    width: '100%',
                                    // alignItems: 'center',
                                    borderTopLeftRadius: Width(20),
                                    borderTopRightRadius: Width(20)
                                }}>
                                    <View style={{
                                        height: Height(50), backgroundColor: '#6B69D4', width: '100%', borderTopLeftRadius: Width(20),
                                        borderTopRightRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25)
                                    }}>
                                        <Ionicons name='close' size={Height(25)} color={color.background} onPress={() => setSecModalVisible(!secModalVisible)} />
                                        <Text style={{ fontSize: Height(16), color: color.background, fontFamily: font.POPPINS_MEDIUM }}>Filter BY Teams</Text>
                                        <Ionicons name='close' size={Height(25)} color='transparent' />
                                    </View>
                                    <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginTop: Height(15), marginHorizontal: Width(25) }} onPress={() => { setIndex(1), setSecModalVisible(!secModalVisible) }}>
                                        <View>
                                            <Text style={globalStyles.playerPrizeText}>GT</Text>
                                            <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_MEDIUM, color: color.text, opacity: 0.6 }}>Gujarat Titans</Text>
                                        </View>
                                        <Ionicons name={index === 1 ? 'radio-button-on' : 'radio-button-off'} size={Height(25)} color='#6B69D4' />
                                    </TouchableOpacity>
                                    <View style={{ height: Height(1), backgroundColor: 'grey', marginTop: Height(15) }} />
                                    <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginTop: Height(15), marginHorizontal: Width(25) }} onPress={() => { setIndex(2), setSecModalVisible(!secModalVisible) }}>
                                        <View>
                                            <Text style={globalStyles.playerPrizeText}>MI</Text>
                                            <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_MEDIUM, color: color.text, opacity: 0.6 }}>Mumbai Indians</Text>
                                        </View>
                                        <Ionicons name={index === 2 ? 'radio-button-on' : 'radio-button-off'} size={Height(25)} color='#6B69D4' />
                                    </TouchableOpacity>
                                    <View style={{ height: Height(1), backgroundColor: 'grey', marginTop: Height(15) }} />
                                    <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', justifyContent: "space-between", marginTop: Height(15), marginHorizontal: Width(25) }} onPress={() => { setIndex(3), setSecModalVisible(!secModalVisible) }}>
                                        <Text style={globalStyles.playerPrizeText}>Both</Text>
                                        <Ionicons name={index === 3 ? 'radio-button-on' : 'radio-button-off'} size={Height(25)} color='#6B69D4' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                    </View>
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        // margin: 20,
        height: Height(350),
        backgroundColor: 'white',
        width: '100%',
        alignItems: 'center',
        borderTopLeftRadius: Width(20),
        borderTopRightRadius: Width(20)
    },
});