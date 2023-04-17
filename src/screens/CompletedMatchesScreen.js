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
                        style={{ flex: 0, backgroundColor: '#5556CA' }}
                    />
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ height: Height(180), backgroundColor: '#5556CA', borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(15) }}>
                                <Ionicons name='arrow-back' size={Height(30)} color={color.background} onPress={() => navigation.goBack()} />
                                <Text style={{ fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>{route.params?.data.teamOneShortName} vs {route.params?.data.teamTwoShortName}</Text>
                                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(30) }}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>{route.params?.data.teamOneName}</Text>
                                    <Text style={{ fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>78/8 <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background }}>(13)</Text></Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                    <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.background, marginLeft: Width(15) }}>{route.params?.data.time}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>{route.params?.data.teamTwoName}</Text>
                                    <Text style={{ fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>78/8<Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background }}> (13)</Text></Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background, textAlign: 'center', marginTop: Height(20) }}>GT won by 6 wickets</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(10) }}>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 1 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 1 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected(''), setIndex(1) }} >
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 1 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>My Contests</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 2 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 2 ? '#5556CA' : 'transparent' }} onPress={() => setIndex(2)}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 2 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>My Team</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 3 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 3 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Commentary'), setIndex(3) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 3 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Commentary</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 4 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 4 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Scorecard'), setIndex(4) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 4 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Scorecard</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginHorizontal: Width(25), borderBottomWidth: index === 5 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 5 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Stats'), setIndex(5) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 5 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Stats</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ height: Height(1), backgroundColor: color.text, marginTop: Height(8), opacity: 0.6 }} />
                        <Text>My Teams</Text>
                    </SafeAreaView>
                </>
            )
        case 'Commentary':
            return (
                <>
                    <SafeAreaView
                        style={{ flex: 0, backgroundColor: '#5556CA' }}
                    />
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ height: Height(180), backgroundColor: '#5556CA', borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(15) }}>
                                <Ionicons name='arrow-back' size={Height(30)} color={color.background} onPress={() => navigation.goBack()} />
                                <Text style={{ fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>{route.params?.data.teamOneShortName} vs {route.params?.data.teamTwoShortName}</Text>
                                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(30) }}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>{route.params?.data.teamOneName}</Text>
                                    <Text style={{ fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>78/8 <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background }}>(13)</Text></Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                    <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.background, marginLeft: Width(15) }}>{route.params?.data.time}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>{route.params?.data.teamTwoName}</Text>
                                    <Text style={{ fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>78/8<Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background }}> (13)</Text></Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background, textAlign: 'center', marginTop: Height(20) }}>GT won by 6 wickets</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(10) }}>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 1 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 1 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected(''), setIndex(1) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 1 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>My Contests</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 2 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 2 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('MyTeam'), setIndex(2) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 2 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>My Team</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 3 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 3 ? '#5556CA' : 'transparent' }} onPress={() => setIndex(3)}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 3 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Commentary</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 4 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 4 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Scorecard'), setIndex(4) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 4 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Scorecard</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginHorizontal: Width(25), borderBottomWidth: index === 5 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 5 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Stats'), setIndex(5) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 5 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Stats</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ height: Height(1), backgroundColor: color.text, marginTop: Height(8), opacity: 0.6 }} />
                        <Text>Commentary</Text>
                    </SafeAreaView>
                </>
            )
        case 'Scorecard':
            return (
                <>
                    <SafeAreaView
                        style={{ flex: 0, backgroundColor: '#5556CA' }}
                    />
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ height: Height(180), backgroundColor: '#5556CA', borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(15) }}>
                                <Ionicons name='arrow-back' size={Height(30)} color={color.background} onPress={() => navigation.goBack()} />
                                <Text style={{ fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>{route.params?.data.teamOneShortName} vs {route.params?.data.teamTwoShortName}</Text>
                                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(30) }}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>{route.params?.data.teamOneName}</Text>
                                    <Text style={{ fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>78/8 <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background }}>(13)</Text></Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                    <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.background, marginLeft: Width(15) }}>{route.params?.data.time}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>{route.params?.data.teamTwoName}</Text>
                                    <Text style={{ fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>78/8<Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background }}> (13)</Text></Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background, textAlign: 'center', marginTop: Height(20) }}>GT won by 6 wickets</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(10) }}>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 1 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 1 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected(''), setIndex(1) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 1 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>My Contests</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 2 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 2 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('MyTeam'), setIndex(2) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 2 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>My Team</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 3 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 3 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Commentary'), setIndex(3) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 3 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Commentary</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 4 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 4 ? '#5556CA' : 'transparent' }} onPress={() => setIndex(4)}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 4 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Scorecard</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginHorizontal: Width(25), borderBottomWidth: index === 5 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 5 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Stats'), setIndex(5) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 5 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Stats</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ height: Height(1), backgroundColor: color.text, marginTop: Height(8), opacity: 0.6 }} />
                        <Text>Scorecard</Text>
                    </SafeAreaView>
                </>
            )
        case 'Stats':
            return (
                <>
                    <SafeAreaView
                        style={{ flex: 0, backgroundColor: '#5556CA' }}
                    />
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ height: Height(180), backgroundColor: '#5556CA', borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(15) }}>
                                <Ionicons name='arrow-back' size={Height(30)} color={color.background} onPress={() => navigation.goBack()} />
                                <Text style={{ fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>{route.params?.data.teamOneShortName} vs {route.params?.data.teamTwoShortName}</Text>
                                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(30) }}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>{route.params?.data.teamOneName}</Text>
                                    <Text style={{ fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>78/8 <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background }}>(13)</Text></Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                    <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.background, marginLeft: Width(15) }}>{route.params?.data.time}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>{route.params?.data.teamTwoName}</Text>
                                    <Text style={{ fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>78/8<Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background }}> (13)</Text></Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background, textAlign: 'center', marginTop: Height(20) }}>GT won by 6 wickets</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(10) }}>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 1 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 1 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected(''), setIndex(1) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 1 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>My Contests</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 2 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 2 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('MyTeam'), setIndex(2) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 2 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>My Team</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 3 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 3 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Commentary'), setIndex(3) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 3 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Commentary</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 4 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 4 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Scorecard'), setIndex(4) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 4 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Scorecard</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginHorizontal: Width(25), borderBottomWidth: index === 5 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 5 ? '#5556CA' : 'transparent' }} onPress={() => setIndex(5)}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 5 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Stats</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ height: Height(1), backgroundColor: color.text, marginTop: Height(8), opacity: 0.6 }} />
                        <Text>Stats</Text>
                    </SafeAreaView>
                </>
            )
        default: {
            return (
                <>
                    <SafeAreaView
                        style={{ flex: 0, backgroundColor: '#5556CA' }}
                    />
                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={{ height: Height(180), backgroundColor: '#5556CA', borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(15) }}>
                                <Ionicons name='arrow-back' size={Height(30)} color={color.background} onPress={() => navigation.goBack()} />
                                <Text style={{ fontSize: Height(20), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>{route.params?.data.teamOneShortName} vs {route.params?.data.teamTwoShortName}</Text>
                                <Ionicons name='arrow-back' size={Height(30)} color='transparent' />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(20), marginTop: Height(30) }}>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>{route.params?.data.teamOneName}</Text>
                                    <Text style={{ fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>78/8 <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background }}>(13)</Text></Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Octicons name='dot-fill' size={Height(20)} color='#00A65C' />
                                    <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_MEDIUM, color: color.background, marginLeft: Width(15) }}>{route.params?.data.time}</Text>
                                </View>
                                <View style={{ alignItems: 'flex-end' }}>
                                    <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: color.background }}>{route.params?.data.teamTwoName}</Text>
                                    <Text style={{ fontSize: Height(18), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background }}>78/8<Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_REGULAR, color: color.background }}> (13)</Text></Text>
                                </View>
                            </View>
                            <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.background, textAlign: 'center', marginTop: Height(20) }}>GT won by 6 wickets</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Height(10) }}>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 1 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 1 ? '#5556CA' : 'transparent' }} onPress={() => setIndex(1)}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 1 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>My Contests</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 2 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 2 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('MyTeam'), setIndex(2) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 2 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>My Team</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 3 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 3 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Commentary'), setIndex(3) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 3 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Commentary</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginLeft: Width(25), borderBottomWidth: index === 4 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 4 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Scorecard'), setIndex(4) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 4 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Scorecard</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginHorizontal: Width(25), borderBottomWidth: index === 5 ? Height(3) : null, paddingBottom: Height(5), borderColor: index === 5 ? '#5556CA' : 'transparent' }} onPress={() => { setSelected('Stats'), setIndex(5) }}>
                                        <Text style={{ fontSize: Height(14), fontFamily: font.POPPINS_MEDIUM, color: index === 5 ? color.text : 'rgba(0, 0, 0, 0.6)' }}>Stats</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={{ height: Height(1), backgroundColor: color.text, marginTop: Height(8), opacity: 0.6 }} />
                        <ScrollView>
                            <TouchableOpacity style={{ height: Height(108), width: Width(350), borderWidth: Height(1), borderRadius: Width(10), alignSelf: 'center', marginTop: Height(15) }}>
                                <View style={{ width: Width(350), height: Height(35), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(20) }}>
                                    <Text>Practice Contest</Text>
                                    <Text>2<Text> Posts</Text></Text>
                                </View>
                                <View style={{ width: Width(347), height: Height(35), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(0, 0, 0, 0.2)', paddingHorizontal: Width(20) }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <ContestFirstComponent width={Width(24)} height={Height(18)} />
                                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5) }}>Glory awaits!</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ height: Height(18), width: Height(18), borderRadius: Height(18) / 2, borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, }}>S</Text>
                                        </View>
                                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5) }}>Single</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <ContestThirdComponent width={Width(20)} height={Height(21)} />
                                        <Text style={{ fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5) }}>Guaranteed</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={{ width: Width(347), height: Height(35), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#FEFAEF', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), paddingHorizontal: Width(20) }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ marginRight: Width(20), fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text }}>HBJHBCBB554</Text>
                                        <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text }}>T1</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6 }}>181</Text>
                                        <Text style={{ marginLeft: Width(60), fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text, opacity: 0.6 }}>#2 -</Text>
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

const styles = StyleSheet.create({})