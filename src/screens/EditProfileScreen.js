import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { useNavigation } from '@react-navigation/native'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from "react-native-image-picker"
import { Avatar } from 'react-native-paper'
import font from '../utils/fonts'
import color from '../utils/color'
import UserComponent from '../assets/svg/User'
import EmailComponent from '../assets/svg/Email'
import PhoneComponent from '../assets/svg/Phone'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { globalStyles } from '../utils/globalStyle'
const EditProfileScreen = () => {
    const navigation = useNavigation()
    const [pickerResponse, setPickerResponse] = useState(null);
    const [userName, setUserName] = useState('Darshan Jiyani')
    const [email, setEmail] = useState()
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

    const removePhoto = () => {
        setPickerResponse(null)
    }

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
                        <Text style={globalStyles.headerText}>Edit Profile</Text>
                    </View>
                </DropShadow>
                <TouchableOpacity style={{
                    alignSelf: 'center',
                    marginTop: Height(20),
                }} >
                    {
                        profilepic ?
                            <Avatar.Image
                                size={Height(100)}
                                source={{
                                    uri: profilepic,
                                }}
                                style={styles.avatar}

                            />
                            :
                            <Avatar.Image
                                size={Height(100)}
                                source={require('../assets/images/background.png')}
                                style={styles.avatar}
                            />
                    }
                </TouchableOpacity>
                <TouchableOpacity style={styles.firstBtn} onPress={chooseFile}>
                    <Text style={styles.firstBtnText}>Change Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondBtn} onPress={removePhoto}>
                    <Text style={styles.secondBtnText}>Remove Photo</Text>
                </TouchableOpacity>
                <View style={globalStyles.textView}>
                    <UserComponent size={Height(35)} />
                    <View style={globalStyles.lineView} />
                    <TextInput style={globalStyles.textInput} value={userName} onChangeText={(val) => setUserName(val)} />
                </View>
                <View style={globalStyles.textView}>
                    <EmailComponent size={Height(35)} />
                    <View style={globalStyles.lineView} />
                    <Text style={globalStyles.textInput}>jiyanid9@gmail.com</Text>
                    <MaterialIcons name='edit' size={Height(20)} onPress={() => navigation.navigate('NewInfoEmail')} />
                </View>
                <View style={globalStyles.textView}>
                    <PhoneComponent size={Height(35)} />
                    <View style={globalStyles.lineView} />
                    <Text style={globalStyles.textInput}>+91 6355126777</Text>
                    <MaterialIcons name='edit' size={Height(20)} onPress={() => navigation.navigate('NewInfoMobile')} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    firstBtn: {
        height: Height(50), width: Width(185), backgroundColor: '#A097EE', alignSelf: 'center', justifyContent: 'center', borderRadius: Width(10), marginTop: Height(20)
    },
    secondBtn: {
        height: Height(50), width: Width(185), alignSelf: 'center', justifyContent: 'center', borderRadius: Width(10), marginTop: Height(10), borderWidth: Height(3), borderColor: '#A097EE'
    },
    firstBtnText: {
        textAlign: 'center', fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.background
    },
    secondBtnText: {
        textAlign: 'center', fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text
    }
})