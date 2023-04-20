import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../utils/color'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import font from '../utils/fonts'
import NotLinkedComponent from '../assets/svg/NotLinked'
import { useNavigation } from '@react-navigation/native'
import { globalStyles } from '../utils/globalStyle'
const AdharCardNumberScreen = () => {
    const navigation = useNavigation()
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
                                Add Aadhaar Number</Text>
                        </View>
                    </DropShadow>
                    <Text style={globalStyles.walletHeaderText}>Aadhaar No.</Text>
                    <Text style={globalStyles.walletHeaderSubText}>
                        You are about to link your DigiLocker account with Digital Onboarding application of Baldor Technologies Private Limited. You will be signed up for DigiLocker account if it does not exist.
                    </Text>
                    <View style={styles.notLinkedView}>
                        <NotLinkedComponent size={Height(28)} />
                        <TextInput placeholder='Aadhaar Number' style={styles.notLinkedTextInput} />
                    </View>
                    <Text style={styles.text}>Please enter the following text in the box below:</Text>
                    <View style={globalStyles.rowView}>
                        <View style={styles.view}>
                            <Text style={styles.viewText}>vghjk jkdn jkd</Text>
                        </View>
                        <TextInput
                            placeholder='Enter side box Number*'
                            style={styles.textInput}
                            placeholderTextColor='#B0B0B0'
                        />
                    </View>
                    <Text style={styles.text}>Unable to read the above image?<Text style={{ color: '#5556CA' }}>Try another!</Text> </Text>
                    <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('DigitalOnboarding')}>
                        <Text style={globalStyles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </KeyboardAvoidingView>
        </>
    )
}

export default AdharCardNumberScreen

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
    text: {
        fontSize: Height(14),
        fontFamily: font.POPPINS_MEDIUM,
        color: color.text,
        marginLeft: Width(20),
        marginTop: Height(20)
    },
    view: {
        height: Height(45),
        width: Width(135),
        backgroundColor: '#D9D9D9',
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewText: {
        fontSize: Height(14),
        fontFamily: 'PostNoBillsColombo-ExtraBold'
    },
    textInput: {
        fontSize: Height(16),
        fontFamily: font.POPPINS_MEDIUM,
        color: color.text,
        height: Height(45),
        borderBottomWidth: Height(1),
        width: Width(220)
    }
})