import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import color from '../utils/color'
import font from '../utils/fonts'
import { globalStyles } from '../utils/globalStyle'
const SettingScreen = () => {
    const navigation = useNavigation()

    const data = [
        {
            id: 1,
            title: 'Community Guideline',
            navigate: 'CommunityGuideline'
        },
        {
            id: 2,
            title: 'Notification',
            navigate: 'NotificationSetting'
        },
        {
            id: 3,
            title: 'Legality',
            navigate: 'Legality'
        },
        {
            id: 4,
            title: 'About Us',
            navigate: 'AboutUs'
        },
        {
            id: 5,
            title: 'Privacy Setting',
            navigate: 'PrivacySetting'
        },
        {
            id: 6,
            title: 'Terms & Conditions',
            navigate: 'TermsCondition'
        },
        {
            id: 7,
            title: 'Responsible Play',
            navigate: 'ResponsiblePay'
        }
    ]

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
                        <Text style={globalStyles.headerText}>Settings</Text>
                    </View>
                </DropShadow>
                <View>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <View>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(50), width: Width(390), borderWidth: Height(3), marginTop: Height(20), alignSelf: 'center', borderRadius: Width(10), borderColor: '#9F9F9F', justifyContent: 'space-between', paddingHorizontal: Width(20) }} onPress={() => navigation.navigate(item.navigate)}>
                                        <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_REGULAR, color: color.text }}>{item.title}</Text>
                                        <MaterialIcons name='arrow-right' size={Height(25)} color={color.text} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>
                <TouchableOpacity style={{ alignItems: 'center', height: Height(50), width: Width(390), marginTop: Height(20), alignSelf: 'center', borderRadius: Width(10), justifyContent: 'center', backgroundColor: '#FF8A8A' }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>Logout</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default SettingScreen

const styles = StyleSheet.create({})