import { Button, Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'
import font from '../utils/fonts'
import color from '../utils/color'
import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { globalStyles } from '../utils/globalStyle'
const ChooseNewContestPrizeScreen = () => {
    const navigation = useNavigation()
    const [winnersToShow, setWinnersToShow] = useState(0);
    const [selectedButtonId, setSelectedButtonId] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const route = useRoute()
    console.log({ route });
    console.log(route.params?.name);
    console.log(route.params?.size);
    console.log(route.params?.prize);
    const Winners = [
        {
            id: 1,
            rank: '# 1',
            prizePool: '40%',
            winnings: '₹180'
        },
        {
            id: 2,
            rank: '# 2',
            prizePool: '23%',
            winnings: '₹104'
        },
        {
            id: 3,
            rank: '# 3',
            prizePool: '15%',
            winnings: '₹68'
        },
        {
            id: 4,
            rank: '# 4',
            prizePool: '12%',
            winnings: '₹50'
        },
        {
            id: 5,
            rank: '# 4-5',
            prizePool: '11%',
            winnings: '₹10'
        }
    ];


    const WinnerDisplay = ({ winnersToShow, i }) => {
        const winners = Winners.slice(0, winnersToShow);

        return (
            <View style={styles.winMainView} key={i}>
                <View style={styles.winSubView}>
                    <Text style={styles.comnText}>Rank</Text>
                    <Text style={styles.comnText}>%of Prize Pool</Text>
                    <Text style={styles.comnText}>Winnings</Text>
                </View>
                <View style={styles.winLine} />
                {winners.map(winner => (
                    <View>
                        <View key={winner.id} style={styles.winSubView}>
                            <Text style={styles.comnText}>{winner.rank}</Text>
                            <Text style={styles.comnText}>{winner.prizePool}</Text>
                            <Text style={styles.comnText}>{winner.winnings}</Text>
                        </View>
                        <View style={styles.winLine} />
                    </View>
                ))}
            </View>
        );
    };


    const handleSelectWinners = numWinners => {
        setWinnersToShow(numWinners);
    };

    const handleButtonPress = id => {
        setSelectedButtonId(id);
    };

    return (
        <>
            <SafeAreaView
                style={globalStyles.safeView}
            />
            <SafeAreaView>
                <DropShadow style={globalStyles.shadow}>
                    <View style={globalStyles.contestHeaderView}>
                        <View style={globalStyles.contestRowView}>
                            <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                        <Text style={globalStyles.headerText}>Create New Contest</Text>
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
                        <Text style={globalStyles.playerPrizeText}>₹{route.params?.prize}</Text>
                    </View>
                    <View style={globalStyles.alignCenterView}>
                        <Text style={globalStyles.contestRegularText}>Spots</Text>
                        <Text style={globalStyles.playerPrizeText}>5</Text>
                    </View>
                    <View style={globalStyles.alignCenterView}>
                        <Text style={globalStyles.contestRegularText}>Entry</Text>
                        <Text style={globalStyles.playerPrizeText}>{route.params?.size}</Text>
                    </View>
                </View>

                <View style={styles.lineView} />
                <Text style={styles.selectText}>Select the Number of Winners</Text>

                <View style={styles.mainView}>
                    {
                        Winners.map((item, i) => {

                            return (
                                <View key={i}>
                                    <TouchableOpacity onPress={() => { handleSelectWinners(i + 1), handleButtonPress(item.id) }} style={[styles.winnerBtn, { backgroundColor: selectedButtonId === i + 1 ? '#5556CA' : 'transparent', borderColor: selectedButtonId === i + 1 ? '#5556CA' : '#9F9F9F' }]} >
                                        <Text style={[{ color: selectedButtonId === i + 1 ? 'white' : 'black' }, styles.winnerBTnText]}>{(i + 1).toString()}</Text>
                                    </TouchableOpacity>
                                </View>

                            )
                        })
                    }
                </View>

                <WinnerDisplay winnersToShow={winnersToShow} />
                <TouchableOpacity style={styles.createContestBtn} onPress={() => setModalVisible(true)} >
                    <Text style={styles.createContestBtnText}>Create A Contest</Text>
                </TouchableOpacity>
                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.modalMAinView}>
                                    <View>
                                        <Text style={styles.confirmText}>Confirmation</Text>
                                        <Text style={styles.winningsText}>Amount Added (Unitialised) + Winnings= ₹0</Text>
                                    </View>
                                    <AntDesign name='closecircleo' size={Height(20)} color='#828282' onPress={() => setModalVisible(!modalVisible)} />
                                </View>
                                <View style={[{ marginTop: Height(25) }, styles.modalSubView]}>
                                    <Text style={styles.modalText}>Entry</Text>
                                    <Text style={styles.confirmText}>₹36</Text>
                                </View>
                                <View style={[{ marginTop: Height(25), alignItems: 'center' }, styles.modalSubView]}>
                                    <Text style={styles.modalText}>Usable Cash Bonus</Text>
                                    <View style={globalStyles.contestItemRowView}>
                                        <SimpleLineIcons name='question' size={Height(18)} color='#5556CA' />
                                        <Text style={[{ marginLeft: Width(15) }, styles.confirmText]}>₹4</Text>
                                    </View>
                                </View>
                                <View style={styles.lineSubView} />
                                <View style={[{ marginTop: Height(10) }, styles.modalSubView]}>
                                    <Text style={styles.payText}>To Pay</Text>
                                    <Text style={[{ color: '#3EB54A' }, styles.confirmText]}>₹36</Text>
                                </View>
                                <Text style={styles.text}>
                                    Lorem ipsum dolor sit amet consectetur. Lacus sit cursus egestas gravida volutpat quam. Eleifend mollis lacus imperdiet eu velit phasellus augue sed platea. Leo in tellus ullamcorper lectus. Vel nascetur id at rhoncus nibh cursus. Nunc sociis
                                </Text>
                                <TouchableOpacity style={styles.joinBtn} onPress={() => { navigation.navigate('JoinContest', { data: route }), setModalVisible(!modalVisible) }}>
                                    <Text style={styles.joinBtnText}>Join Contest</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ChooseNewContestPrizeScreen

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalView: {
        height: Height(350), width: Width(350), backgroundColor: 'white', borderRadius: Width(20)
    },
    lineView: {
        height: Height(1), backgroundColor: '#D1D1D1', marginTop: Height(10)
    },
    selectText: {
        fontSize: Height(16), fontFamily: font.POPPINS_MEDIUM, color: color.text, marginLeft: Width(25), marginTop: Height(10)
    },
    mainView: {
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Width(35), marginTop: Height(15)
    },
    winnerBtn: {
        height: Height(30), width: Width(40), borderWidth: Height(1), borderRadius: Width(10), justifyContent: 'center', alignItems: 'center'
    },
    winnerBTnText: {
        fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM,
    },
    createContestBtn: {
        height: Height(40), width: Width(240), backgroundColor: color.primaryText, alignSelf: 'center', marginTop: Height(250), justifyContent: 'center', alignItems: 'center', borderRadius: Width(10)
    },
    createContestBtnText: {
        fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background
    },
    modalMAinView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(25), marginTop: Height(15)
    },
    confirmText: {
        fontSize: Height(16), fontFamily: font.POPPINS_REGULAR, color: color.text
    },
    winningsText: {
        fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: '#7B7B7B'
    },
    modalSubView: {
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: Width(25),
    },
    modalText: {
        fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.text
    },
    lineSubView: {
        height: Height(1), width: Width(310), backgroundColor: '#BCBCBC', alignSelf: 'center', marginTop: Height(18)
    },
    payText: {
        fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: '#3EB54A'
    },
    text: {
        fontSize: Height(8), fontFamily: font.POPPINS_REGULAR, marginHorizontal: Width(25), marginTop: Height(15)
    },
    joinBtn: {
        height: Height(40), width: Width(200), backgroundColor: color.primaryText, alignSelf: 'center', marginTop: Height(25), justifyContent: 'center', alignItems: 'center', borderRadius: Width(10)
    },
    joinBtnText: {
        fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background
    },
    comnText: {
        fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.text, width: Width(100), textAlign: 'center'
    },
    winLine: {
        height: Height(1), backgroundColor: '#CFCFCF', marginTop: Height(5)
    },
    winMainView: {
        borderWidth: Height(1), borderRadius: Width(10), marginHorizontal: Width(10), marginTop: Height(25)
    },
    winSubView: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: Height(5)
    }
})