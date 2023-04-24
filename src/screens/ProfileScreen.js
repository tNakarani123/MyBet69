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
                <View>
                    <DropShadow style={globalStyles.shadow}>
                        <View style={styles.headerView}>
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                    </DropShadow>
                    <View style={styles.linearView}>
                        <LinearGradient colors={['#5E5ECE', '#A399EF']} style={globalStyles.container} start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}>
                            <View style={styles.iconView}>
                                <MaterialCommunityIcons name='cog' size={Height(25)} color={color.background} onPress={() => navigation.navigate('Setting')} />
                                <MaterialCommunityIcons name='share-variant' size={Height(25)} style={{ marginLeft: Width(8) }} color={color.background} />
                                <MaterialCommunityIcons name='pencil' size={Height(25)} style={{ marginLeft: Width(8) }} color={color.background} onPress={() => navigation.navigate('EditProfile')} />
                            </View>
                        </LinearGradient>
                    </View>

                    <Avatar.Image
                        size={Height(100)}
                        source={require('../assets/images/background.png')}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.skillText}>Skill Score: 2356</Text>
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
                    <View style={styles.reView}>
                        <Text style={globalStyles.contestItemPrizeText}>Recently Played :</Text>
                        <View style={globalStyles.contestItemRowView}>
                            <Text style={globalStyles.contestRegularText}>View All</Text>
                            <Ionicons name='arrow-forward' size={Height(20)} color={color.text} style={styles.reicon} onPress={() => navigation.navigate('MyMatches')} />
                        </View>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ height: Height(150), marginTop: Height(10) }} >
                        {
                            scrollData.map((item, i) => {
                                return (
                                    <DropShadow
                                        style={globalStyles.shadow}
                                        key={i}>
                                        <TouchableOpacity style={styles.scrollBtn}>
                                            <Text style={styles.matchName}>{item.matchName}</Text>
                                            <View style={styles.lineView} />
                                            <View style={[styles.thirdView, { marginTop: Height(5) }]}>
                                                <View>
                                                    <Text style={styles.teamName}>{item.teamOneName}</Text>
                                                    <View style={[styles.teamView, { marginTop: Height(3) }]}>
                                                        <Image source={item.teamOneLogo} style={globalStyles.teamImage} />
                                                        <Text style={[{ marginLeft: Width(15) }, styles.teamShortName]}>{item.teamOneShortName}</Text>
                                                    </View>
                                                </View>
                                                <View style={globalStyles.contestItemRowView}>
                                                    <Octicons name='dot-fill' size={Height(20)} color='#FF0707' />
                                                    <Text style={[globalStyles.blackNormalText, { marginLeft: Width(8) }]}>Live</Text>
                                                </View>
                                                <View>
                                                    <Text style={[{ marginLeft: Width(25) }, styles.teamName]}>{item.teamTwoName}</Text>
                                                    <View style={[styles.teamView, { marginTop: Height(3) }]}>
                                                        <Text style={[{ marginRight: Width(15) }, styles.teamShortName]}>{item.teamTwoShortName}</Text>
                                                        <Image source={item.teamTwoLogo} style={globalStyles.teamImage} />
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={styles.creView}>
                                                <Text style={styles.creText}>Teams Created : 2</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </DropShadow>
                                )
                            })
                        }
                    </ScrollView>
                    <Text style={styles.carText}>Career Stats :</Text>
                    <View style={styles.carView}>
                        <View style={globalStyles.alignCenterView}>
                            <Text style={globalStyles.playerPrizeText}>Contests :</Text>
                            <Text style={styles.carSubText}>26</Text>
                        </View>
                        <View style={styles.vline} />
                        <View style={globalStyles.alignCenterView}>
                            <Text style={globalStyles.playerPrizeText}>Matches :</Text>
                            <Text style={styles.carSubText}>52</Text>
                        </View>
                    </View>
                    <Text style={styles.carText}>Refer And Earn :</Text>
                    <View style={styles.cView}>
                        <Text style={styles.cText}>Up To ₹198
                            Real cash per
                            Friend</Text>
                        <ReferComponent width={Width(218)} height={Height(160)} />
                    </View>
                    <View style={styles.coView}>
                        <Text style={styles.coText}>N54V54VVD</Text>
                        <MaterialCommunityIcons name='content-copy' size={Height(20)} color={color.text} style={styles.coIcon} />
                        <Text style={styles.coText}>Copy</Text>
                    </View>

                    <View style={globalStyles.contestItemSubView}>
                        <TouchableOpacity style={styles.btn}>
                            <WhatsAppComponent size={Height(22)} />
                            <Text style={styles.btnText}>WhatsApp</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <MaterialCommunityIcons name='share-variant' size={Height(25)} color={color.background} />
                            <Text style={styles.btnText}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    headerView: {
        height: Height(60), backgroundColor: 'white', borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25), zIndex: 0, position: 'absolute', width: '100%'
    },
    linearView: {
        height: Height(150), position: 'absolute', zIndex: -1, position: 'relative',
    },
    iconView: {
        alignSelf: 'flex-end', marginTop: Height(120), flexDirection: 'row', marginRight: Width(20)
    },
    image: {
        alignSelf: 'center', position: 'absolute', marginTop: Height(100)
    },
    skillText: {
        fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, marginTop: Height(38), textAlign: 'right', marginRight: Width(20)
    },
    reView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(20)
    },
    reicon: {
        marginLeft: Width(5)
    },
    scrollBtn: {
        height: Height(145), width: Width(335), backgroundColor: 'white', marginLeft: Width(50), borderRadius: Width(10)
    },
    matchName: {
        fontSize: Height(10), fontFamily: 'Poppins-Regular', color: 'black', marginTop: Height(5), marginLeft: Width(10)
    },
    lineView: {
        height: Height(1), backgroundColor: '#D9D9D9', marginTop: Height(5),
    },
    scrollSubView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15), marginTop: Height(5)
    },
    teamName: {
        fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black'
    },
    teamView: {
        flexDirection: 'row', alignItems: 'center', marginTop: Height(3)
    },
    teamShortName: {
        fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black',
    },
    creView: {
        height: Height(30), backgroundColor: '#D9D9D9', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), marginTop: Height(22), flexDirection: 'row', alignItems: 'center'
    },
    creText: {
        fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: 'black', marginLeft: Width(25)
    },
    carText: {
        fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text, marginLeft: Width(20), marginTop: Height(20)
    },
    carView: {
        height: Height(80), width: Width(390), backgroundColor: color.background, alignSelf: 'center', marginTop: Height(10), borderRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25)
    },
    carSubText: {
        fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: '#5556CA'
    },
    vline: {
        height: Height(80),
        width: 1,
        backgroundColor: color.text,
        marginLeft: Width(12)
    },
    cView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(25)
    },
    cText: {
        fontSize: Height(20), width: Width(152), fontFamily: font.POPPINS_SEMI_BOLD
    },
    coView: {
        width: Width(375), height: Height(65), backgroundColor: 'rgba(3, 49, 135, 0.2)', alignSelf: 'center', marginTop: Height(20), borderRadius: Width(10), flexDirection: 'row', alignItems: 'center'
    },
    coText: {
        fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text, marginLeft: Width(20)
    },
    coIcon: {
        marginLeft: Width(165)
    },
    btn: {
        height: Height(54), width: Width(172), backgroundColor: '#5556CA', borderRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(30)
    },
    btnText: {
        fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background
    },
    thirdView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(15),
    },
    teamName: {
        fontSize: Height(8), fontFamily: 'Poppins-Medium', color: 'black'
    },
    teamView: {
        flexDirection: 'row', alignItems: 'center',
    },
    teamShortName: {
        fontSize: Height(14), fontFamily: 'Poppins-SemiBold', color: 'black'
    },
    scrollBottomView: {
        height: Height(30), backgroundColor: '#D9D9D9', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), marginTop: Height(22), flexDirection: 'row', alignItems: 'center'
    },
    teamText: {
        fontSize: Height(11), fontFamily: 'Poppins-Regular', color: 'black', marginLeft: Width(25)
    },
})