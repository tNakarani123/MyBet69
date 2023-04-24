import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import font from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../utils/globalStyle'
import * as ImagePicker from "react-native-image-picker"
const CardDetailsScreen = () => {
    const navigation = useNavigation()
    const [pickerResponse, setPickerResponse] = useState(null);
    const chooseFile = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.1,
            maxHeight: 500, maxWidth: 500,
        };
        ImagePicker.launchImageLibrary(options, setPickerResponse);

    };
    const profilepic = pickerResponse?.assets && pickerResponse.assets[0].uri;
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
                <Text style={globalStyles.walletHeaderText}>Enter Your PAN Card Details</Text>
                <Text style={globalStyles.walletHeaderSubText}>
                    Please Enter Your PAN Card Details Below As They Appear On Your Card And Click On 'Submit'.
                </Text>
                {
                    profilepic
                        ?
                        <Image style={styles.view} source={{
                            uri: profilepic,
                        }} />
                        :
                        <View style={styles.view}>

                        </View>
                }
                <TouchableOpacity style={[styles.btn1, { marginTop: Height(40) }]} onPress={chooseFile}>
                    <Text style={styles.btn1Text}>Upload Image</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('UploadCardImage')}>
                    <Text style={globalStyles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default CardDetailsScreen

const styles = StyleSheet.create({
    view: {
        height: Height(250),
        width: Width(390),
        backgroundColor: '#D9D9D9',
        borderRadius: Width(20),
        alignSelf: 'center',
        marginTop: Height(30)
    },
    btn1: {
        height: Height(60),
        width: Width(315),
        borderWidth: Height(2),
        borderRadius: Width(10),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#5556CA',
    },
    btn1Text: {
        fontSize: Height(16),
        fontFamily: font.POPPINS_SEMI_BOLD,
        color: '#5556CA'
    }
})