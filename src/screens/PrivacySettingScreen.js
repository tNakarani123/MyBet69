import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import color from '../utils/color'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NotificationComponent from '../assets/svg/Notification'
import font from '../utils/fonts'
import { globalStyles } from '../utils/globalStyle'
const PrivacySettingScreen = () => {
    const navigation = useNavigation()
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
                        <Text style={globalStyles.headerText}>Privacy Setting</Text>
                    </View>
                </DropShadow>
                <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, color: color.text, marginLeft: Width(20), marginTop: Height(20) }}>Privacy Settings</Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(50), width: Width(390), borderWidth: Height(3), marginTop: Height(20), alignSelf: 'center', borderRadius: Width(10), borderColor: '#9F9F9F', justifyContent: 'space-between', paddingHorizontal: Width(20) }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Allow SMS Notification</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                    />
                </TouchableOpacity>
                <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_BOLD, color: color.text, marginLeft: Width(20), marginTop: Height(20) }}>Gameplay</Text>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(50), width: Width(390), borderWidth: Height(3), marginTop: Height(20), alignSelf: 'center', borderRadius: Width(10), borderColor: '#9F9F9F', justifyContent: 'space-between', paddingHorizontal: Width(20) }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Allow SMS Notification</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(50), width: Width(390), borderWidth: Height(3), marginTop: Height(20), alignSelf: 'center', borderRadius: Width(10), borderColor: '#9F9F9F', justifyContent: 'space-between', paddingHorizontal: Width(20) }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Allow SMS Notification</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(50), width: Width(390), borderWidth: Height(3), marginTop: Height(20), alignSelf: 'center', borderRadius: Width(10), borderColor: '#9F9F9F', justifyContent: 'space-between', paddingHorizontal: Width(20) }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Allow SMS Notification</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', height: Height(50), width: Width(390), borderWidth: Height(3), marginTop: Height(20), alignSelf: 'center', borderRadius: Width(10), borderColor: '#9F9F9F', justifyContent: 'space-between', paddingHorizontal: Width(20) }}>
                    <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_REGULAR, color: color.text }}>Allow SMS Notification</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: .8 }, { scaleY: .8 }] }}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        </>
    )
}

export default PrivacySettingScreen

const styles = StyleSheet.create({})