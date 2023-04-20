import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Height, Width } from '../utils/responsive'
import Ionicons from 'react-native-vector-icons/Ionicons'
import color from '../utils/color'
import font from '../utils/fonts'
import Octicons from 'react-native-vector-icons/Octicons'
import ContestFirstComponent from '../assets/svg/ContestFirst'
import ContestThirdComponent from '../assets/svg/ContestThird'
import { globalStyles } from '../utils/globalStyle'
const CompletedMatchesScreen = () => {
    const route = useRoute()
    console.log({ route });
    const navigation = useNavigation()
    const [selected, setSelected] = useState('')
    const [index, setIndex] = useState(1)
    switch (selected) {
        case 'MyTeam':
            return (
                <>
                    <SafeAreaView
                        style={styles.safeView}
                    />
                    <SafeAreaView style={globalStyles.container}>
                        <View style={styles.headerView}>
                            <View style={globalStyles.rowView}>
                                <Ionicons name='arrow-back' size={Height(30)} color={color.background} onPress={() => navigation.goBack()} />
                                <Text style={styles.teamNameText}>{route.params?.data.teamOneShortName} vs {route.params?.data.teamTwoShortName}</Text>
                                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
                            </View>
                            <View style={styles.headersubView}>
                                <View style={styles.flexStart}>
                                    <Text style={styles.teamNameSubText}>{route.params?.data.teamOneName}</Text>
                                    <Text style={styles.runText}>78/8 <Text style={styles.overText}>(13)</Text></Text>
                                </View>
                                <View style={globalStyles.contestItemRowView}>
                                    <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                    <Text style={styles.timeText}>{route.params?.data.time}</Text>
                                </View>
                                <View style={styles.flexEnd}>
                                    <Text style={styles.teamNameSubText}>{route.params?.data.teamTwoName}</Text>
                                    <Text style={styles.runText}>78/8<Text style={styles.overText}> (13)</Text></Text>
                                </View>
                            </View>
                            <Text style={styles.wonText}>GT won by 6 wickets</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={styles.headerBtnView}>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 1 ? Height(3) : null, borderColor: index === 1 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected(''), setIndex(1) }} >
                                        <Text style={[{ color: index === 1 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>My Contests</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 2 ? Height(3) : null, borderColor: index === 2 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => setIndex(2)}>
                                        <Text style={[{ color: index === 2 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>My Team</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 3 ? Height(3) : null, borderColor: index === 3 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Commentary'), setIndex(3) }}>
                                        <Text style={[{ color: index === 3 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Commentary</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 4 ? Height(3) : null, borderColor: index === 4 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Scorecard'), setIndex(4) }}>
                                        <Text style={[{ color: index === 4 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Scorecard</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ marginHorizontal: Width(25), borderBottomWidth: index === 5 ? Height(3) : null, borderColor: index === 5 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Stats'), setIndex(5) }}>
                                        <Text style={[{ color: index === 5 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Stats</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.lineView} />
                        <Text>My Teams</Text>
                    </SafeAreaView>
                </>
            )
        case 'Commentary':
            return (
                <>
                    <SafeAreaView
                        style={styles.safeView}
                    />
                    <SafeAreaView style={globalStyles.container}>
                        <View style={styles.headerView}>
                            <View style={globalStyles.rowView}>
                                <Ionicons name='arrow-back' size={Height(30)} color={color.background} onPress={() => navigation.goBack()} />
                                <Text style={styles.teamNameText}>{route.params?.data.teamOneShortName} vs {route.params?.data.teamTwoShortName}</Text>
                                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
                            </View>
                            <View style={styles.headersubView}>
                                <View style={styles.flexStart}>
                                    <Text style={styles.teamNameSubText}>{route.params?.data.teamOneName}</Text>
                                    <Text style={styles.runText}>78/8 <Text style={styles.overText}>(13)</Text></Text>
                                </View>
                                <View style={globalStyles.contestItemRowView}>
                                    <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                    <Text style={styles.timeText}>{route.params?.data.time}</Text>
                                </View>
                                <View style={styles.flexEnd}>
                                    <Text style={styles.teamNameSubText}>{route.params?.data.teamTwoName}</Text>
                                    <Text style={styles.runText}>78/8<Text style={styles.overText}> (13)</Text></Text>
                                </View>
                            </View>
                            <Text style={styles.wonText}>GT won by 6 wickets</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={styles.headerBtnView}>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 1 ? Height(3) : null, borderColor: index === 1 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected(''), setIndex(1) }}>
                                        <Text style={[{ color: index === 1 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>My Contests</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 2 ? Height(3) : null, borderColor: index === 2 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('MyTeam'), setIndex(2) }}>
                                        <Text style={[{ color: index === 2 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>My Team</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 3 ? Height(3) : null, borderColor: index === 3 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => setIndex(3)}>
                                        <Text style={[{ color: index === 3 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Commentary</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 4 ? Height(3) : null, borderColor: index === 4 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Scorecard'), setIndex(4) }}>
                                        <Text style={[{ color: index === 4 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Scorecard</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ marginHorizontal: Width(25), borderBottomWidth: index === 5 ? Height(3) : null, borderColor: index === 5 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Stats'), setIndex(5) }}>
                                        <Text style={[{ color: index === 5 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Stats</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.lineView} />
                        <Text>Commentary</Text>
                    </SafeAreaView>
                </>
            )
        case 'Scorecard':
            return (
                <>
                    <SafeAreaView
                        style={styles.safeView}
                    />
                    <SafeAreaView style={globalStyles.container}>
                        <View style={styles.headerView}>
                            <View style={globalStyles.rowView}>
                                <Ionicons name='arrow-back' size={Height(30)} color={color.background} onPress={() => navigation.goBack()} />
                                <Text style={styles.teamNameText}>{route.params?.data.teamOneShortName} vs {route.params?.data.teamTwoShortName}</Text>
                                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
                            </View>
                            <View style={styles.headersubView}>
                                <View style={styles.flexStart}>
                                    <Text style={styles.teamNameSubText}>{route.params?.data.teamOneName}</Text>
                                    <Text style={styles.runText}>78/8 <Text style={styles.overText}>(13)</Text></Text>
                                </View>
                                <View style={globalStyles.contestItemRowView}>
                                    <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                    <Text style={styles.timeText}>{route.params?.data.time}</Text>
                                </View>
                                <View style={styles.flexEnd}>
                                    <Text style={styles.teamNameSubText}>{route.params?.data.teamTwoName}</Text>
                                    <Text style={styles.runText}>78/8<Text style={styles.overText}> (13)</Text></Text>
                                </View>
                            </View>
                            <Text style={styles.wonText}>GT won by 6 wickets</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={styles.headerBtnView}>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 1 ? Height(3) : null, borderColor: index === 1 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected(''), setIndex(1) }}>
                                        <Text style={[{ color: index === 1 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>My Contests</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 2 ? Height(3) : null, borderColor: index === 2 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('MyTeam'), setIndex(2) }}>
                                        <Text style={[{ color: index === 2 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>My Team</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 3 ? Height(3) : null, borderColor: index === 3 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Commentary'), setIndex(3) }}>
                                        <Text style={[{ color: index === 3 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Commentary</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 4 ? Height(3) : null, borderColor: index === 4 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => setIndex(4)}>
                                        <Text style={[{ color: index === 4 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Scorecard</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ marginHorizontal: Width(25), borderBottomWidth: index === 5 ? Height(3) : null, borderColor: index === 5 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Stats'), setIndex(5) }}>
                                        <Text style={[{ color: index === 5 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Stats</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.lineView} />
                        <Text>Scorecard</Text>
                    </SafeAreaView>
                </>
            )
        case 'Stats':
            return (
                <>
                    <SafeAreaView
                        style={styles.safeView}
                    />
                    <SafeAreaView style={globalStyles.container}>
                        <View style={styles.headerView}>
                            <View style={globalStyles.rowView}>
                                <Ionicons name='arrow-back' size={Height(30)} color={color.background} onPress={() => navigation.goBack()} />
                                <Text style={styles.teamNameText}>{route.params?.data.teamOneShortName} vs {route.params?.data.teamTwoShortName}</Text>
                                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
                            </View>
                            <View style={styles.headersubView}>
                                <View style={styles.flexStart}>
                                    <Text style={styles.teamNameSubText}>{route.params?.data.teamOneName}</Text>
                                    <Text style={styles.runText}>78/8 <Text style={styles.overText}>(13)</Text></Text>
                                </View>
                                <View style={globalStyles.contestItemRowView}>
                                    <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                    <Text style={styles.timeText}>{route.params?.data.time}</Text>
                                </View>
                                <View style={styles.flexEnd}>
                                    <Text style={styles.teamNameSubText}>{route.params?.data.teamTwoName}</Text>
                                    <Text style={styles.runText}>78/8<Text style={styles.overText}> (13)</Text></Text>
                                </View>
                            </View>
                            <Text style={styles.wonText}>GT won by 6 wickets</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={styles.headerBtnView}>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 1 ? Height(3) : null, borderColor: index === 1 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected(''), setIndex(1) }}>
                                        <Text style={[{ color: index === 1 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>My Contests</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 2 ? Height(3) : null, borderColor: index === 2 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('MyTeam'), setIndex(2) }}>
                                        <Text style={[{ color: index === 2 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>My Team</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 3 ? Height(3) : null, borderColor: index === 3 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Commentary'), setIndex(3) }}>
                                        <Text style={[{ color: index === 3 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Commentary</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity sstyle={[{ borderBottomWidth: index === 4 ? Height(3) : null, borderColor: index === 4 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Scorecard'), setIndex(4) }}>
                                        <Text style={[{ color: index === 4 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Scorecard</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ marginHorizontal: Width(25), borderBottomWidth: index === 5 ? Height(3) : null, borderColor: index === 5 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => setIndex(5)}>
                                        <Text style={[{ color: index === 5 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Stats</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.lineView} />
                        <Text>Stats</Text>
                    </SafeAreaView>
                </>
            )
        default: {
            return (
                <>
                    <SafeAreaView
                        style={styles.safeView}
                    />
                    <SafeAreaView style={globalStyles.container}>
                        <View style={styles.headerView}>
                            <View style={globalStyles.rowView}>
                                <Ionicons name='arrow-back' size={Height(30)} color={color.background} onPress={() => navigation.goBack()} />
                                <Text style={{ fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>{route.params?.data.teamOneShortName} vs {route.params?.data.teamTwoShortName}</Text>
                                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(30) }}>
                                <View style={styles.flexStart}>
                                    <Text style={styles.teamNameSubText}>{route.params?.data.teamOneName}</Text>
                                    <Text style={styles.runText}>78/8 <Text style={styles.overText}>(13)</Text></Text>
                                </View>
                                <View style={globalStyles.contestItemRowView}>
                                    <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                    <Text style={styles.timeText}>{route.params?.data.time}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={styles.teamNameSubText}>{route.params?.data.teamTwoName}</Text>
                                    <Text style={styles.runText}>78/8<Text style={styles.overText}> (13)</Text></Text>
                                </View>
                            </View>
                            <Text style={styles.wonText}>GT won by 6 wickets</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={styles.headerBtnView}>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 1 ? Height(3) : null, borderColor: index === 1 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => setIndex(1)}>
                                        <Text style={[{ color: index === 1 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>My Contests</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 2 ? Height(3) : null, borderColor: index === 2 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('MyTeam'), setIndex(2) }}>
                                        <Text style={[{ color: index === 2 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>My Team</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 3 ? Height(3) : null, borderColor: index === 3 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Commentary'), setIndex(3) }}>
                                        <Text style={[{ color: index === 3 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Commentary</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ borderBottomWidth: index === 4 ? Height(3) : null, borderColor: index === 4 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Scorecard'), setIndex(4) }}>
                                        <Text style={[{ color: index === 4 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Scorecard</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{ marginHorizontal: Width(25), borderBottomWidth: index === 5 ? Height(3) : null, borderColor: index === 5 ? '#5556CA' : 'transparent' }, styles.headerBtn]} onPress={() => { setSelected('Stats'), setIndex(5) }}>
                                        <Text style={[{ color: index === 5 ? color.text : 'rgba(0, 0, 0, 0.6)' }, styles.headerBtnText]}>Stats</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.lineView} />
                        <ScrollView>
                            <TouchableOpacity style={styles.contestBtn}>
                                <View style={styles.contestFrontView}>
                                    <Text>Practice Contest</Text>
                                    <Text>2<Text> Posts</Text></Text>
                                </View>
                                <View style={styles.contestSubView}>
                                    <View style={globalStyles.contestItemRowView}>
                                        <ContestFirstComponent width={Width(24)} height={Height(18)} />
                                        <Text style={globalStyles.contestItemEndText}>Glory awaits!</Text>
                                    </View>

                                    <View style={globalStyles.contestItemRowView}>
                                        <View style={globalStyles.contestItemEndSubView}>
                                            <Text style={styles.contestS}>S</Text>
                                        </View>
                                        <Text style={globalStyles.contestItemEndText}>Single</Text>
                                    </View>
                                    <View style={globalStyles.contestItemRowView}>
                                        <ContestThirdComponent width={Width(20)} height={Height(21)} />
                                        <Text style={globalStyles.contestItemEndText}>Guaranteed</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.contestEndBtn}>
                                    <View style={globalStyles.contestItemRowView}>
                                        <Text style={[{ marginRight: Width(20), }, globalStyles.contestRegularText]}>HBJHBCBB554</Text>
                                        <Text style={globalStyles.contestRegularText}>T1</Text>
                                    </View>
                                    <View style={globalStyles.contestItemRowView}>
                                        <Text style={styles.contestEndText}>181</Text>
                                        <Text style={[{ fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6 }, styles.contestEndText]}>#2 -</Text>
                                    </View>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </ScrollView>
                    </SafeAreaView>
                </>
            )
        }
    }
}

export default CompletedMatchesScreen

const styles = StyleSheet.create({
    safeView: {
        flex: 0, backgroundColor: '#5556CA'
    },
    headerView: {
        height: Height(180), backgroundColor: '#5556CA', borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20)
    },
    teamNameText: {
        fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background
    },
    headersubView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(30)
    },
    teamNameSubText: {
        fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background
    },
    flexStart: {
        alignItems: 'flex-start'
    },
    runText: {
        fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background
    },
    overText: {
        fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background
    },
    timeText: {
        fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.background, marginLeft: Width(15)
    },
    wonText: {
        fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background, textAlign: 'center', marginTop: Height(20)
    },
    headerBtnView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(10)
    },
    flexEnd: {
        alignItems: 'flex-end'
    },
    headerBtn: {
        marginLeft: Width(25), paddingBottom: Height(5),
    },
    headerBtnText: {
        fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM,
    },
    lineView: {
        height: Height(1), backgroundColor: color.text, marginTop: Height(8), opacity: 0.6
    },
    contestBtn: {
        height: Height(108), width: Width(350), borderWidth: Height(1), borderRadius: Width(10), alignSelf: 'center', marginTop: Height(15)
    },
    contestFrontView: {
        width: Width(350), height: Height(35), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20)
    },
    contestSubView: {
        width: Width(347), height: Height(35), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(0, 0, 0, 0.2)', paddingHorizontal: Width(20)
    },
    contestS: {
        fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText,
    },
    contestEndBtn: {
        width: Width(347), height: Height(35), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FEFAEF', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), paddingHorizontal: Width(20)
    },
    contestEndText: {
        fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6
    }

})