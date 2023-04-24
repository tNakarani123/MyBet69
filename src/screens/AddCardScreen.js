import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../utils/globalStyle'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import AddCardComponent from '../assets/svg/AddCard'
import font from '../utils/fonts'
import color from '../utils/color'
import CardComponent from '../assets/svg/Card'
import NewCardComponent from '../assets/svg/NewCard'
import CalendarComponent from '../assets/svg/Calendar'
const AddCardScreen = () => {
    const navigation = useNavigation()
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
                        <Text style={globalStyles.headerText}>
                            Add Card</Text>
                    </View>
                </DropShadow>

                <View style={{ alignSelf: 'center', marginTop: Height(25) }}>
                    <AddCardComponent width={Width(335)} height={Height(208)} />
                </View>
                <View style={styles.notLinkedView}>
                    <NewCardComponent size={Height(28)} />
                    <TextInput placeholder='Card Holder Name ' style={styles.notLinkedTextInput} />
                </View>
                <View style={styles.notLinkedView}>
                    <NewCardComponent size={Height(28)} />
                    <TextInput placeholder='Card Number' style={styles.notLinkedTextInput} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20) }}>
                    <View style={styles.cardView}>
                        <CalendarComponent size={Height(25)} />
                        <TextInput placeholder='Expiry Date' style={styles.cardTextInput} />
                    </View>
                    <View style={styles.cardView}>
                        <NewCardComponent size={Height(28)} />
                        <TextInput placeholder='CVV' style={styles.cardTextInput} />
                    </View>
                </View>
                <TouchableOpacity style={globalStyles.button}>
                    <Text style={globalStyles.buttonText}>Save</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default AddCardScreen

const styles = StyleSheet.create({
    notLinkedView: {
        height: Height(60),
        width: Width(390),
        borderWidth: Height(1),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Width(20),
        borderRadius: Width(10),
        borderColor: '#B0B0B0',
        marginTop: Height(20)
    },
    notLinkedTextInput: {
        marginLeft: Width(22),
        fontSize: Height(16),
        fontFamily: font.POPPINS_SEMI_BOLD,
        width: Width(300),
        color: color.text
    },
    cardView: {
        height: Height(60),
        width: Width(185),
        borderWidth: Height(1),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Width(20),
        borderRadius: Width(10),
        borderColor: '#B0B0B0',
        marginTop: Height(20)
    },
    cardTextInput: {
        marginLeft: Width(22),
        fontSize: Height(16),
        fontFamily: font.POPPINS_SEMI_BOLD,
        width: Width(100),
        color: color.text
    }
})