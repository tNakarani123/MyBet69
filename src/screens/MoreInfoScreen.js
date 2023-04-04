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
const MoreInfoScreen = () => {
    const [pickerResponse, setPickerResponse] = useState(null);
    const [index, setIndex] = useState(0)
    const navigation = useNavigation()
    const chooseFile = () => {
        const options = {
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: true,
            quality: 0.1,
            maxHeight: 500, maxWidth: 500,
            // quality:0.1,mediaType:'photo',
        };
        ImagePicker.launchImageLibrary(options, setPickerResponse);

    };
    const profilepic = pickerResponse?.assets && pickerResponse.assets[0].uri;
    return (

        <ImageBackground style={{ flex: 1 }} source={require('../assets/images/background.png')}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ alignItems: 'center', marginTop: Height(42) }}>
                    <LogoComponent height={Height(100)} width={Width(100)} />
                </View>
                <View style={{ height: Height(800), backgroundColor: 'white', marginTop: Height(20), borderTopLeftRadius: Width(20), borderTopRightRadius: Width(20) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(25), marginLeft: Width(24) }}>
                        <Ionicons name='arrow-back' size={Height(35)} color='black' />
                        <Text style={{ fontSize: Height(44), fontFamily: 'Poppins-SemiBoldItalic', textAlign: 'center', marginLeft: Width(40), color: 'black' }}>Let’s PLAY!!</Text>
                    </View>
                    <Text style={{ fontSize: Height(20), fontFamily: 'Poppins-Regular', textAlign: 'center', color: 'black' }}>We Need More Information</Text>

                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{ flex: 1 }}
                        enabled
                        keyboardVerticalOffset={100}
                    >
                        <ScrollView style={{ marginBottom: Height(70) }}>
                            <TouchableOpacity style={{ alignSelf: 'center', marginTop: Height(20), }} onPress={chooseFile}>
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

                            <View style={{ height: Height(60), width: Width(390), borderWidth: Height(3), borderColor: '#9F9F9F', borderRadius: Width(10), alignSelf: 'center', marginTop: Height(25), flexDirection: 'row', alignItems: 'center', paddingHorizontal: Width(28) }}>
                                <UserComponent size={Height(35)} />
                                <View style={{
                                    height: Height(35),
                                    width: 1,
                                    backgroundColor: 'black', marginLeft: Width(12)
                                }}

                                />
                                <TextInput style={{ marginLeft: Width(25), fontSize: Height(20), fontFamily: 'Poppins-Regular', color: 'black', width: Width(250) }} />
                            </View>
                            <View style={{ height: Height(60), width: Width(390), borderWidth: Height(3), borderColor: '#9F9F9F', borderRadius: Width(10), alignSelf: 'center', marginTop: Height(25), flexDirection: 'row', alignItems: 'center', paddingHorizontal: Width(28) }}>
                                <EmailComponent size={Height(35)} />
                                <View style={{
                                    height: Height(35),
                                    width: 1,
                                    backgroundColor: 'black', marginLeft: Width(12)
                                }}

                                />
                                <TextInput style={{ marginLeft: Width(25), fontSize: Height(20), fontFamily: 'Poppins-Regular', color: 'black', width: Width(250) }} />
                            </View>
                            <TouchableOpacity style={{ height: Height(60), width: Width(390), backgroundColor: '#6B69D4', borderRadius: Width(10), alignSelf: 'center', justifyContent: 'center', alignItems: 'center', marginTop: Height(30) }} onPress={() => navigation.navigate('Tab')}>
                                <Text style={{ fontSize: Height(20), fontFamily: 'Poppins-SemiBold', color: 'white' }}>Save Detail</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </View>
            </SafeAreaView>
        </ImageBackground >
    )
}

export default MoreInfoScreen

const styles = StyleSheet.create({})