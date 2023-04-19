import { ImageBackground, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LogoComponent from '../assets/svg/Logo'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from "react-native-image-picker"
import { Avatar } from 'react-native-paper'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import EmailComponent from '../assets/svg/Email'
import UserComponent from '../assets/svg/User'
import { useNavigation } from '@react-navigation/native'
import color from '../utils/color'
import font from '../utils/fonts'
import { globalStyles } from '../utils/globalStyle'
const MoreInfoScreen = () => {
    const [pickerResponse, setPickerResponse] = useState(null);
    const navigation = useNavigation()
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    console.log({ userName });
    console.log({ email });

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

        <ImageBackground style={globalStyles.container} source={require('../assets/images/background.png')}>
            <SafeAreaView style={globalStyles.container}>
                <View style={globalStyles.logo}>
                    <LogoComponent height={Height(100)} width={Width(100)} />
                </View>
                <View style={styles.mainView}>
                    <View style={styles.view}>
                        <Ionicons name='arrow-back' size={Height(35)} color='black' onPress={() => navigation.goBack()} />
                        <Text style={styles.letsPlayText}>Let’s PLAY!!</Text>
                    </View>
                    <Text style={styles.subText}>We Need More Information</Text>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={globalStyles.container}
                        enabled
                        keyboardVerticalOffset={100}
                    >
                        <ScrollView style={styles.scrollView}
                        >
                            <TouchableOpacity style={styles.profilePic} onPress={chooseFile}>
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
                            <View style={globalStyles.textView}>
                                <UserComponent size={Height(35)} />
                                <View style={globalStyles.lineView} />
                                <TextInput style={globalStyles.textInput} value={userName} onChangeText={(val) => setUserName(val)} />
                            </View>
                            <View style={globalStyles.textView}>
                                <EmailComponent size={Height(35)} />
                                <View style={globalStyles.lineView} />
                                <TextInput style={globalStyles.textInput} value={email} onChangeText={(val) => setEmail(val)} />
                            </View>
                            <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('Tab')}>
                                <Text style={globalStyles.buttonText}>Save Detail</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </ImageBackground >
    )
}

export default MoreInfoScreen

const styles = StyleSheet.create({
    mainView: {
        height: Height(800),
        backgroundColor: color.background,
        marginTop: Height(20),
        borderTopLeftRadius: Width(20),
        borderTopRightRadius: Width(20)
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: Height(25),
        marginLeft: Width(24)
    },
    letsPlayText: {
        fontSize: Height(44),
        fontFamily: font.POPPINS_SEMI_BOLD_ITALIC,
        textAlign: 'center',
        marginLeft: Width(40),
        color: color.text
    },
    subText: {
        fontSize: Height(20),
        fontFamily: font.POPPINS_REGULAR,
        textAlign: 'center',
        color: color.text
    },
    scrollView: {
        marginBottom: Height(70)
    },
    profilePic: {
        alignSelf: 'center',
        marginTop: Height(20),
    },
})