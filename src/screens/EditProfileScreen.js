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
                    <View style={{ height: Height(90), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>Edit Profile</Text>
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
                <TouchableOpacity style={{ height: Height(50), width: Width(185), backgroundColor: '#A097EE', alignSelf: 'center', justifyContent: 'center', borderRadius: Width(10), marginTop: Height(20) }} onPress={chooseFile}>
                    <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>Change Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ height: Height(50), width: Width(185), alignSelf: 'center', justifyContent: 'center', borderRadius: Width(10), marginTop: Height(10), borderWidth: Height(3), borderColor: '#A097EE' }} onPress={removePhoto}>
                    <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text }}>Remove Photo</Text>
                </TouchableOpacity>
                <View style={styles.textView}>
                    <UserComponent size={Height(35)} />
                    <View style={styles.lineView} />
                    <TextInput style={styles.textInput} value={userName} onChangeText={(val) => setUserName(val)} />
                </View>
                <View style={styles.textView}>
                    <EmailComponent size={Height(35)} />
                    <View style={styles.lineView} />
                    <Text style={styles.textInput}>jiyanid9@gmail.com</Text>
                    <MaterialIcons name='edit' size={Height(20)} onPress={() => navigation.navigate('NewInfoEmail')} />
                </View>
                <View style={styles.textView}>
                    <PhoneComponent size={Height(35)} />
                    <View style={styles.lineView} />
                    <Text style={styles.textInput}>+91 6355126777</Text>
                    <MaterialIcons name='edit' size={Height(20)} onPress={() => navigation.navigate('NewInfoMobile')} />
                </View>
            </SafeAreaView>
        </>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    textView: {
        height: Height(60),
        width: Width(390),
        borderWidth: Height(3),
        borderColor: color.primaryBorder,
        borderRadius: Width(10),
        alignSelf: 'center',
        marginTop: Height(15),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Width(28)
    },
    lineView: {
        height: Height(35),
        width: 1,
        backgroundColor: color.text,
        marginLeft: Width(12)
    },
    textInput: {
        marginLeft: Width(25),
        fontSize: Height(20),
        fontFamily: font.POPPINS_REGULAR,
        color: color.text,
        width: Width(250)
    },
})