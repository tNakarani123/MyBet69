import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { useNavigation } from '@react-navigation/native'
import { Height, Width } from '../utils/responsive'
import LinearGradient from 'react-native-linear-gradient';
import { Avatar } from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import color from '../utils/color'
import font from '../utils/fonts'
import UserComponent from '../assets/svg/User'
import EmailComponent from '../assets/svg/Email'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import PhoneComponent from '../assets/svg/Phone'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DropShadow from "react-native-drop-shadow";
import Octicons from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'
import ReferComponent from '../assets/svg/Refer'
import WhatsAppComponent from '../assets/svg/WhatsApp'
import { globalStyles } from '../utils/globalStyle'
const scrollData = [
    {
        id: 1,
        matchName: 'Indian premier league T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png')
    },
    {
        id: 2,
        matchName: 'Indian premier league T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png')
    },
    {
        id: 3,
        matchName: 'Indian premier league T20',
        teamOneName: 'Gujarat Titans',
        teamOneShortName: 'GT',
        teamOneLogo: require('../assets/images/gt.png'),
        teamTwoName: 'Mumbai Indians',
        teamTwoShortName: 'MI',
        teamTwoLogo: require('../assets/images/mi.png')
    }
]

const ProfileScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView
                style={globalStyles.safeView}
            />
            <SafeAreaView style={globalStyles.container}>
                <View style={{}}>
                    <DropShadow style={globalStyles.shadow}>
                        <View style={{ height: Height(60), backgroundColor: 'white', borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25), zIndex: 0, position: 'absolute', width: '100%' }}>
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                    </DropShadow>
                    <View style={{ height: Height(150), position: 'absolute', zIndex: -1, position: 'relative', }}>
                        <LinearGradient colors={['#5E5ECE', '#A399EF']} style={globalStyles.container} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>
                            <View style={{ alignSelf: 'flex-end', marginTop: Height(120), flexDirection: 'row', marginRight: Width(20) }}>
                                <MaterialCommunityIcons name='cog' size={Height(25)} color={color.background} onPress={() => navigation.navigate('Setting')} />
                                <MaterialCommunityIcons name='share-variant' size={Height(25)} style={{ marginLeft: Width(8) }} color={color.background} />
                                <MaterialCommunityIcons name='pencil' size={Height(25)} style={{ marginLeft: Width(8) }} color={color.background} onPress={() => navigation.navigate('EditProfile')} />
                            </View>
                        </LinearGradient>
                    </View>

                    <Avatar.Image
                        size={Height(100)}
                        source={require('../assets/images/background.png')}
                        style={{ alignSelf: 'center', position: 'absolute', marginTop: Height(100) }}
                    />
                </View>
                <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, marginTop: Height(38), textAlign: 'right', marginRight: Width(20) }}>Skill Score: 2356</Text>
                <ScrollView>
                    <View style={globalStyles.textView}>
                        <UserComponent size={Height(35)} />
                        <View style={globalStyles.lineView} />
                        <Text style={globalStyles.textInput}>Darshan jiyani</Text>
                    </View>
                    <View style={globalStyles.textView}>
                        <EmailComponent size={Height(35)} />
                        <View style={globalStyles.lineView} />
                        <Text style={globalStyles.textInput}>jiyanid9@gmail.com</Text>
                    </View>
                    <View style={globalStyles.textView}>
                        <PhoneComponent size={Height(35)} />
                        <View style={globalStyles.lineView} />
                        <Text style={globalStyles.textInput}>+91 6355126777</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(20) }}>
                        <Text style={globalStyles.contestItemPrizeText}>Recently Played :</Text>
                        <View style={globalStyles.contestItemRowView}>
                            <Text style={globalStyles.contestRegularText}>View All</Text>
                            <Ionicons name='arrow-forward' size={Height(20)} color={color.text} style={{ marginLeft: Width(5) }} onPress={() => navigation.navigate('MyMatches')} />
                        </View>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: Height(150), marginTop: Height(10) }} >
                        {
                            scrollData.map((item, i) => {
                                return (
                                    <DropShadow
                                        style={globalStyles.shadow}
                                        key={i}  >
                                        <TouchableOpacity style={{ height: Height(145), width: Width(335), backgroundColor: 'white', marginLeft: Width(50), borderRadius: Width(10) }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'black', marginTop: Height(5), marginLeft: Width(10) }}>{item.matchName}</Text>
                                            <View style={{ height: Height(1), backgroundColor: '#D9D9D9', marginTop: Height(5), }} />
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(5) }}>
                                                <View style={{}}>
                                                    <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black' }}>{item.teamOneName}</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(3) }}>
                                                        <Image source={item.teamOneLogo} style={globalStyles.teamImage} />
                                                        <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginLeft: Width(15) }}>{item.teamOneShortName}</Text>
                                                    </View>
                                                </View>

                                                <View>
                                                    <Text style={{ fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black', marginLeft: Width(25) }}>{item.teamTwoName}</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Height(3) }}>
                                                        <Text style={{ fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black', marginRight: Width(15) }}>{item.teamTwoShortName}</Text>
                                                        <Image source={item.teamTwoLogo} style={globalStyles.teamImage} />
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ height: Height(30), backgroundColor: '#D9D9D9', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), marginTop: Height(22), flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: 'black', marginLeft: Width(25) }}>Teams Created : 2</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </DropShadow>
                                )
                            })
                        }
                    </ScrollView>
                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text, marginLeft: Width(20), marginTop: Height(20) }}>Career Stats :</Text>
                    <View style={{ height: Height(80), width: Width(390), backgroundColor: color.background, alignSelf: 'center', marginTop: Height(10), borderRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25) }}>
                        <View style={globalStyles.alignCenterView}>
                            <Text style={globalStyles.playerPrizeText}>Contests :</Text>
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: '#5556CA' }}>26</Text>
                        </View>
                        <View style={{
                            height: Height(80),
                            width: 1,
                            backgroundColor: color.text,
                            marginLeft: Width(12)
                        }} />
                        <View style={globalStyles.alignCenterView}>
                            <Text style={globalStyles.playerPrizeText}>Matches :</Text>
                            <Text style={{ fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: '#5556CA' }}>52</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text, marginLeft: Width(20), marginTop: Height(20) }}>Refer And Earn :</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(25) }}>
                        <Text style={{ fontSize: Height(20), width: Width(152), fontFamily: font.POPPINS_SEMI_BOLD }}>Up To ₹198
                            Real cash per
                            Friend</Text>
                        <ReferComponent width={Width(218)} height={Height(160)} />
                    </View>
                    <View style={{ width: Width(375), height: Height(65), backgroundColor: 'rgba(3, 49, 135, 0.2)', alignSelf: 'center', marginTop: Height(20), borderRadius: Width(10), flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text, marginLeft: Width(20) }}>N54V54VVD</Text>
                        <MaterialCommunityIcons name='content-copy' size={Height(20)} color={color.text} style={{ marginLeft: Width(165) }} />
                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text, marginLeft: Width(20) }}>Copy</Text>
                    </View>

                    <View style={globalStyles.contestItemSubView}>
                        <TouchableOpacity style={{ height: Height(54), width: Width(172), backgroundColor: '#5556CA', borderRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(30) }}>
                            <WhatsAppComponent size={Height(22)} />
                            <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>WhatsApp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: Height(54), width: Width(172), backgroundColor: '#5556CA', borderRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(40) }}>
                            <MaterialCommunityIcons name='share-variant' size={Height(25)} color={color.background} />
                            <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
})