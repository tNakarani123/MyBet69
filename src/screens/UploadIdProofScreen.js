import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'
import DropShadow from 'react-native-drop-shadow'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import font from '../utils/fonts'
import LinkedComponent from '../assets/svg/Linked'
import CardComponent from '../assets/svg/Card'
import { globalStyles } from '../utils/globalStyle'
const UploadIdProofScreen = () => {
    const navigation = useNavigation()
    const [index, setIndex] = useState(1)
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
                            Upload ID Proof</Text>
                    </View>
                </DropShadow>
                <Text style={{ fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, textAlign: 'center', marginTop: Height(25) }}>Upload ID Proof</Text>
                <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, textAlign: 'center', marginTop: Height(25) }}>Verify To Continue Playing For Cash</Text>
                <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, textAlign: 'center', marginTop: Height(10), opacity: 0.6 }}>Ensures You're Not From A Restricted State.</Text>
                <TouchableOpacity style={{ height: Height(65), width: Width(390), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderRadius: Width(10), borderColor: '#CECECE', paddingHorizontal: Width(22), alignSelf: 'center', marginTop: Height(35), backgroundColor: color.background }} onPress={() => setIndex(1)}>
                    <LinkedComponent size={Height(28)} />
                    <View style={{ marginLeft: Width(22) }}>
                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Aadhaar Card or Letter</Text>
                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6 }}>Front and Back View</Text>
                    </View>
                    <Ionicons name={index !== 1 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} style={{ marginLeft: Width(90) }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: Height(65), width: Width(390), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderRadius: Width(10), borderColor: '#CECECE', paddingHorizontal: Width(22), alignSelf: 'center', marginTop: Height(22), backgroundColor: color.background }} onPress={() => setIndex(2)}>
                    <CardComponent size={Height(28)} />
                    <View style={{ marginLeft: Width(22) }}>
                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Aadhaar Card or Letter</Text>
                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6 }}>Front and Back View</Text>
                    </View>
                    <Ionicons name={index !== 2 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} style={{ marginLeft: Width(90) }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ height: Height(65), width: Width(390), flexDirection: 'row', alignItems: 'center', borderWidth: Height(1), borderRadius: Width(10), borderColor: '#CECECE', paddingHorizontal: Width(22), alignSelf: 'center', marginTop: Height(22), backgroundColor: color.background }} onPress={() => setIndex(3)}>
                    <CardComponent size={Height(28)} />
                    <View style={{ marginLeft: Width(22) }}>
                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Aadhaar Card or Letter</Text>
                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6 }}>Front and Back View</Text>
                    </View>
                    <Ionicons name={index !== 3 ? 'radio-button-off' : 'radio-button-on'} size={Height(25)} style={{ marginLeft: Width(90) }} />
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate('AdharCardNumber')}>
                    <Text style={globalStyles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default UploadIdProofScreen

const styles = StyleSheet.create({
})