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
import { globalStyles } from '../utils/globalStyle'
const CommunityGuidelineScreen = () => {
    const navigation = useNavigation()
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
                        <Text style={globalStyles.headerText}>Community Guideline</Text>
                    </View>
                </DropShadow>
                <Text style={globalStyles.settingText}>
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

export default CommunityGuidelineScreen

const styles = StyleSheet.create({})