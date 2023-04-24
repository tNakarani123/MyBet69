import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../utils/globalStyle'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SuccessComponent from '../assets/svg/Success'
import font from '../utils/fonts'
import color from '../utils/color'
import { useNavigation } from '@react-navigation/native'


const data = [
    {
        id: 1,
        suc: 'Success',
        pay: 150,
        color: color.greenText
    },
    {
        id: 2,
        suc: 'Success',
        pay: 150,
        color: color.redText
    },
    {
        id: 3,
        suc: 'Success',
        pay: 150,
        color: color.redText
    },
    {
        id: 4,
        suc: 'Success',
        pay: 150,
        color: color.redText
    },
    {
        id: 5,
        suc: 'Success',
        pay: 150,
        color: color.redText
    }
]

const MyTransactionScreen = () => {
    const navigation = useNavigation()
    const [open, setOpen] = useState(true);
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
                        <Text style={globalStyles.headerText}>My Transaction</Text>
                    </View>
                </DropShadow>

                <TouchableOpacity style={[styles.btn, { height: open ? Height(60) : Height(450) }]} onPress={() => setOpen(!open)}>
                    <View style={styles.subView}>
                        <Text style={styles.text}>02 March 2023</Text>
                        <Ionicons name='ios-caret-down' size={Height(25)} color={color.text} />
                    </View>
                    {
                        !open ?
                            <View>
                                <View style={styles.lineView} />
                                {
                                    data.map((item, i) => {
                                        return (
                                            <View key={i} style={styles.view}>
                                                <SuccessComponent size={25} color={item.color} />
                                                <Text style={[styles.successText, { color: item.color }]}>{item.suc}</Text>
                                                <Text style={styles.subText}>₹{item.pay}/-</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                            : null
                    }
                </TouchableOpacity>


            </SafeAreaView>
        </>
    )
}

export default MyTransactionScreen

const styles = StyleSheet.create({
    text: {
        fontSize: Height(18),
        fontFamily: font.POPPINS_MEDIUM,
        color: color.text
    },
    btn: {
        height: Height(60),
        width: Width(390),

        borderWidth: Height(3),
        borderRadius: Width(10),

        paddingHorizontal: Width(25),
        alignSelf: 'center',
        marginTop: Height(25),
        borderColor: '#9F9F9F'
    },
    view: {
        height: Height(60),
        width: Width(330),
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: Height(3),
        marginTop: Height(15),
        paddingLeft: Width(20),
        borderRadius: Width(10),
        borderColor: '#9F9F9F'
    },
    subView: {
        flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between', marginTop: Height(12)
    },
    lineView: {
        height: Height(1), backgroundColor: '#9F9F9F', marginTop: Height(12)
    },
    successText: {
        fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, marginLeft: Width(25)
    },
    subText: {
        fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text, marginLeft: Width(120)
    }
})