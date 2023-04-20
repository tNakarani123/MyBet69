import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import { useNavigation, useRoute } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import font from '../utils/fonts'
import color from '../utils/color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { globalStyles } from '../utils/globalStyle'
const JoinContestScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()
    console.log({ route });
    return (
        <>
            <SafeAreaView
                style={globalStyles.safeView}
            />
            <SafeAreaView style={globalStyles.container}>
                <DropShadow style={globalStyles.shadow}>
                    <View style={globalStyles.contestHeaderView}>
                        <View style={globalStyles.contestRowView}>
                            <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                        <Text style={globalStyles.headerText}>Join Contest</Text>
                        <View style={globalStyles.contestRowSubView}>
                            <Image source={require('../assets/images/gt.png')} style={globalStyles.teamImage} />
                            <Text style={globalStyles.headerTimeText}>23m</Text>
                            <Image source={require('../assets/images/mi.png')} style={globalStyles.teamImage} />
                        </View>
                    </View>
                </DropShadow>
                <View style={globalStyles.joinContestFrontView}>
                    <View style={globalStyles.alignCenterView}>
                        <Text style={globalStyles.contestRegularText}>Max Prize Pool</Text>
                        <Text style={globalStyles.playerPrizeText}>₹{route.params?.data.params.prize}</Text>
                    </View>
                    <View style={globalStyles.alignCenterView}>
                        <Text style={globalStyles.contestRegularText}>Spots</Text>
                        <Text style={globalStyles.playerPrizeText}>5</Text>
                    </View>
                    <View style={globalStyles.alignCenterView}>
                        <Text style={globalStyles.contestRegularText}>Entry</Text>
                        <Text style={globalStyles.playerPrizeText}>{route.params?.data.params.size}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text style={globalStyles.playerPrizeText}> Share Contest Code</Text>
                    <MaterialIcons name='content-copy' size={Height(24)} color='black' />
                </View>
                <TouchableOpacity style={styles.btn}>
                    <MaterialIcons name='share' size={Height(24)} color='black' />
                    <Text style={[{ marginLeft: Width(5) }, globalStyles.playerPrizeText]}> More option</Text>
                </TouchableOpacity>
                < Text style={[{ alignSelf: 'center', marginTop: Height(20) }, globalStyles.playerPrizeText]}> Share On My Bet 69</Text>
            </SafeAreaView>
        </>
    )
}

export default JoinContestScreen

const styles = StyleSheet.create({
    view: {
        height: Height(50), width: Width(350), borderWidth: Height(1), borderStyle: 'dashed', borderRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(12), alignSelf: 'center', marginTop: Height(10)
    },
    btn: {
        height: Height(50), width: Width(350), borderWidth: Height(1), borderRadius: Width(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: Width(12), alignSelf: 'center', marginTop: Height(10)
    }
})