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

        <ImageBackground style={styles.imageBack} source={require('../assets/images/background.png')}>
            <SafeAreaView style={styles.container}>
                <View style={styles.logo}>
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
                        style={{ flex: 1 }}
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
                            <View style={styles.textView}>
                                <UserComponent size={Height(35)} />
                                <View style={styles.lineView} />
                                <TextInput style={styles.textInput} value={userName} onChangeText={(val) => setUserName(val)} />
                            </View>
                            <View style={styles.textView}>
                                <EmailComponent size={Height(35)} />
                                <View style={styles.lineView} />
                                <TextInput style={styles.textInput} value={email} onChangeText={(val) => setEmail(val)} />
                            </View>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tab')}>
                                <Text style={styles.buttonText}>Save Detail</Text>
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
    imageBack: {
        flex: 1
    },
    container: {
        flex: 1
    },
    logo: {
        alignItems: 'center',
        marginTop: Height(42)
    },
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
    textView: {
        height: Height(60),
        width: Width(390),
        borderWidth: Height(3),
        borderColor: color.primaryBorder,
        borderRadius: Width(10),
        alignSelf: 'center',
        marginTop: Height(25),
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
    button: {
        height: Height(60),
        width: Width(390),
        backgroundColor: color.primaryButton,
        borderRadius: Width(10),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Height(30)
    },
    buttonText: {
        fontSize: Height(20),
        fontFamily: font.POPPINS_SEMI_BOLD,
        color: color.background
    }
})