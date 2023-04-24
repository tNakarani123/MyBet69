import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyles } from '../utils/globalStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import DropShadow from 'react-native-drop-shadow'
import NotLinkedComponent from '../assets/svg/NotLinked'
import font from '../utils/fonts'
import color from '../utils/color'
import { useNavigation } from '@react-navigation/native'
const UploadCardImageScreen = () => {
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
                            Pan Card Details</Text>
                    </View>
                </DropShadow>
                <View style={styles.notLinkedView}>
                    <NotLinkedComponent size={Height(28)} />
                    <TextInput placeholder='Name As Per PAN Card' style={styles.notLinkedTextInput} />
                </View>
                <View style={styles.notLinkedView}>
                    <NotLinkedComponent size={Height(28)} />
                    <TextInput placeholder='Father’s Name As PAN Card' style={styles.notLinkedTextInput} />
                </View>
                <View style={styles.notLinkedView}>
                    <NotLinkedComponent size={Height(28)} />
                    <TextInput placeholder='Father’s Name As PAN Card' style={styles.notLinkedTextInput} />
                </View>
                <View style={styles.notLinkedView}>
                    <NotLinkedComponent size={Height(28)} />
                    <TextInput placeholder='PAN Card Number' style={styles.notLinkedTextInput} />
                </View>
                <View style={styles.notLinkedView}>
                    <NotLinkedComponent size={Height(28)} />
                    <TextInput placeholder='PAN Card Number' style={styles.notLinkedTextInput} />
                </View>
                <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('SelectPaymentMethod')}>
                    <Text style={globalStyles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default UploadCardImageScreen

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
})