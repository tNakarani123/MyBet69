import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Height, Width } from './responsive';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Octicons from 'react-native-vector-icons/Octicons'
const PlayerCard = ({ player, isSelected, onSelect, onDeselect }) => {
    const { id, name, category, points, team, image, selby, credit } = player;

    return (
        <TouchableOpacity style={{ height: Height(70), width: Width(390), borderWidth: Height(1), borderColor: isSelected ? 'black' : '#BEBEBE', alignSelf: 'center', marginTop: Height(10), flexDirection: 'row', alignItems: 'center', borderRadius: Width(10), backgroundColor: isSelected ? 'rgba(167, 156, 241, 0.5)' : null, opacity: '' }} onPress={isSelected ? onDeselect : onSelect}>
            <Image source={image} style={{ height: Height(65), width: Width(70), resizeMode: 'contain' }} />
            <View style={{ marginLeft: Width(10), width: Width(100) }}>
                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black' }}>{name}</Text>
                <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Regular', marginTop: Height(5), color: 'rgba(126, 126, 126, 1)' }}>Sel By {selby}</Text>
                <View style={{ flexDirection: 'row', marginTop: Height(5), alignItems: 'center' }}>
                    <Octicons name='dot-fill' size={Height(10)} color='rgba(107, 105, 212, 1)' />
                    <Text style={{ fontSize: Height(6), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)', marginLeft: Width(5) }}>played last match</Text>
                </View>
            </View>
            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', marginLeft: Width(50) }}>{points}</Text>
            <View style={{ marginLeft: Width(100), flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Medium', marginRight: Width(5) }}>{credit}</Text>
                <EvilIcons name={isSelected ? 'minus' : 'plus'} size={Height(20)} />
            </View>
        </TouchableOpacity >
    );
};

const SelectedPlayerCard = ({ player, onDeselect, style, }) => {
    const { id, name, category, points } = player;

    // if (player === 11) {
    //     console.log('11');
    // }


    return (
        // <TouchableOpacity style={styles.selectedContainer} >
        //     <View style={styles.playerInfo}>
        //         <Text style={styles.playerName}>{name}</Text>
        //         <Text style={styles.playerCategory}>{category}</Text>
        //     </View>
        //     <Text style={styles.playerPoints}>{name}</Text>
        // </TouchableOpacity>
        <View style={{ height: Height(25), width: Height(25), backgroundColor: '#5556CA', borderRadius: Height(25) / 2, marginLeft: Width(2) }}>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        margin: 5,
    },
    selected: {
        backgroundColor: 'gray',
    },
    playerName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    playerCategory: {
        fontSize: 14,
        color: 'gray',
    },
    playerPoints: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    selectedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'gray',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        margin: 5,
    },
    playerInfo: {
        flex: 1,
    },
});

export { PlayerCard, SelectedPlayerCard };
