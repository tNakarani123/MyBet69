import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import color from '../utils/color'
import DropShadow from 'react-native-drop-shadow'
import MyBetComponent from '../assets/svg/MyBet'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import NotificationComponent from '../assets/svg/Notification'
import font from '../utils/fonts'
const TermsConditionScreen = () => {
    const navigation = useNavigation()
    return (
        <>
            <SafeAreaView
                style={{ flex: 0, backgroundColor: color.background }}
            />
            <SafeAreaView style={{ flex: 1 }}>
                <DropShadow style={{
                    shadowColor: "#000000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.17,
                    shadowRadius: 3.05,
                    elevation: 4
                }}>
                    <View style={{ height: Height(90), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: 'white' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Ionicons name='arrow-back' size={Height(30)} onPress={() => navigation.goBack()} />
                            <MyBetComponent width={Width(102)} height={Height(15)} />
                            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                                <NotificationComponent size={Height(25)} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ textAlign: 'center', fontSize: Height(16), fontFamily: 'Poppins-Bold', marginTop: Height(10) }}>Terms & Conditions</Text>
                    </View>
                </DropShadow>
                <Text style={{ marginHorizontal: Width(20), marginTop: Height(20), fontFamily: font.POPPINS_REGULAR, fontSize: Height(14), color: color.text }}>
                    Lorem ipsum dolor sit amet consectetur. Est elit in lectus consequat erat. Elit non sit placerat quam et donec. Nullam eu purus rhoncus adipiscing nunc commodo in imperdiet. Neque duis at erat adipiscing et quis.
                    Odio et nunc massa eu ipsum aliquam neque dictumst. Ante felis pharetra enim aliquam mus condimentum pharetra. In et morbi habitant in. At tristique quis velit elementum neque diam pulvinar. Eros blandit amet hac felis in tellus ut. Magna sit montes scelerisque felis leo cursus facilisis. Malesuada pulvinar convallis accumsan dictum ultrices. Lorem aliquam congue donec tortor vitae. Purus bibendum convallis amet vulputate. Velit tellus a purus tempus sit fermentum eros orci euismod. In elementum pellentesque vitae netus mauris aliquet. Scelerisque dui amet tristique egestas.
                    Tortor senectus vivamus fermentum vulputate volutpat. Ornare id aliquet aliquet convallis lectus pharetra. Purus urna eget nec ipsum viverra sollicitudin aenean. Non.Lorem ipsum dolor sit amet consectetur. Est elit in lectus consequat erat. Elit non sit placerat quam et donec. Nullam eu purus rhoncus adipiscing nunc commodo in imperdiet. Neque duis at erat adipiscing et quis.
                    Odio et nunc massa eu ipsum aliquam neque dictumst. Ante felis pharetra enim aliquam mus condimentum pharetra. In et morbi habitant in. At tristique quis velit elementum neque diam pulvinar. Eros blandit amet hac felis in tellus ut. Magna sit montes scelerisque felis leo cursus facilisis. Malesuada pulvinar convallis accumsan dictum ultrices. Lorem aliquam congue donec tortor vitae. Purus bibendum convallis amet vulputate. Velit tellus a purus tempus sit fermentum eros orci euismod. In elementum pellentesque vitae netus mauris aliquet. Scelerisque dui amet tristique egestas.
                    Tortor senectus vivamus fermentum vulputate volutpat. Ornare id aliquet aliquet convallis lectus pharetra. Purus urna eget nec ipsum viverra sollicitudin aenean. Non.
                </Text>
            </SafeAreaView>
        </>
    )
}

export default TermsConditionScreen

const styles = StyleSheet.create({})