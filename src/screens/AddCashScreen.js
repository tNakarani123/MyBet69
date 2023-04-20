import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import font from '../utils/fonts'
import { globalStyles } from '../utils/globalStyle'
const AddCashScreen = () => {
    const navigation = useNavigation()
    const [inputText, setInputText] = useState('');
    const data = [
        {
            id: 1,
            amount: ' ₹ 100/-'
        },
        {
            id: 2,
            amount: ' ₹ 500/-'
        },
        {
            id: 3,
            amount: ' ₹ 1000/-'
        },
        {
            id: 4,
            amount: ' ₹ 5000/-'
        }
    ]


    const handleButtonPress = (text) => {
        setInputText(text);
    };
    const handleTextChange = (text) => {
        setInputText(text);
    };
    return (
        <>
            <SafeAreaView
                style={globalStyles.safeView}
            />
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={globalStyles.container}>


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
                                Add Cash</Text>
                        </View>
                    </DropShadow>

                    <TextInput
                        style={styles.textInput}
                        placeholder='Amount Enter'
                        keyboardType='number-pad'
                        placeholderTextColor='#9F9F9F'
                        value={inputText}
                        onChangeText={handleTextChange}
                    />
                    <ScrollView horizontal={true}>
                        {
                            data.map((item, i) => {
                                return (
                                    <DropShadow style={globalStyles.shadow}>
                                        <TouchableOpacity key={i} style={styles.btn} onPress={() => handleButtonPress(item.amount)}>
                                            <Text style={styles.btnText}>{item.amount}</Text>
                                        </TouchableOpacity>
                                    </DropShadow>
                                )
                            })
                        }
                    </ScrollView>

                    <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('QuickKYC')}>
                        <Text style={globalStyles.buttonText}>Add Cash</Text>
                    </TouchableOpacity>

                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    )
}

export default AddCashScreen

const styles = StyleSheet.create({
    textInput: {
        height: Height(50),
        width: Width(390),
        borderWidth: Height(3),
        alignSelf: 'center',
        marginTop: Height(25),
        borderRadius: Width(10),
        borderColor: '#9F9F9F',
        fontSize: Height(16),
        fontFamily: font.POPPINS_REGULAR,
        paddingLeft: Width(20)
    },
    btn: {
        height: Height(30),
        width: Width(75),
        backgroundColor: color.background,
        borderRadius: Width(20),
        marginLeft: Width(30),
        marginTop: Height(15),
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: Height(1),
        borderColor: '#B8B8B8'
    },
    btnText: {
        fontSize: Height(12),
        fontFamily: font.POPPINS_SEMI_BOLD,
        color: color.text
    }
})