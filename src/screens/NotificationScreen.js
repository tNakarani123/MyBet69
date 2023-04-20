import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyBetComponent from '../assets/svg/MyBet'
import NotificationComponent from '../assets/svg/Notification'
import { Height, Width } from '../utils/responsive'
import { useNavigation } from '@react-navigation/native'
import NotyLogoComponent from '../assets/svg/NotyLogo'
import { globalStyles } from '../utils/globalStyle'

const notyData = [
    {
        id: 1,
        notification: 'Notification',
        des: 'Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.',
        time: '11:55pm'
    },
    {
        id: 2,
        notification: 'Notification',
        des: 'Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.',
        time: '11:55pm'
    },
    {
        id: 3,
        notification: 'Notification',
        des: 'Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.',
        time: '11:55pm'
    },
    {
        id: 4,
        notification: 'Notification',
        des: 'Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.',
        time: '11:55pm'
    },
    {
        id: 5,
        notification: 'Notification',
        des: 'Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.',
        time: '11:55pm'
    },
    {
        id: 6,
        notification: 'Notification',
        des: 'Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.',
        time: '11:55pm'
    },
    {
        id: 7,
        notification: 'Notification',
        des: 'Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.',
        time: '11:55pm'
    },
    {
        id: 8,
        notification: 'Notification',
        des: 'Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.',
        time: '11:55pm'
    },
    {
        id: 9,
        notification: 'Notification',
        des: 'Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.',
        time: '11:55pm'
    },
    {
        id: 10,
        notification: 'Notification',
        des: 'Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.Lorem ipsum dolor sit amet consectetur. Et eu cras nisi amet.',
        time: '11:55pm'
    }
]


const NotificationScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={styles.headerView}>
                <MyBetComponent width={Width(102)} height={Height(15)} />
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
                    <NotificationComponent size={Height(25)} />
                </TouchableOpacity>
            </View>
            <View style={styles.lineView} />
            <ScrollView>
                {
                    notyData.map((item, i) => {
                        return (
                            <View key={i}>

                                <View style={styles.view}>
                                    <NotyLogoComponent width={Width(41)} height={Height(48)} />
                                    <View style={styles.subView}>
                                        <Text style={globalStyles.blackNormalText}>{item.notification}</Text>
                                        <Text style={styles.text}>{item.des}</Text>
                                    </View>
                                    <Text style={[globalStyles.blackNormalText, { marginLeft: Width(80) }]}>{item.time}</Text>
                                </View>
                                <View style={styles.lineView} />
                            </View>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    headerView: {
        height: Height(60), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25)
    },
    lineView: {
        height: Height(1), backgroundColor: '#C9C9C9', marginTop: Height(5)
    },
    view: {
        flexDirection: 'row', alignItems: 'center', marginTop: Height(5), marginHorizontal: Width(20)
    },
    subView: {
        marginLeft: Width(10)
    },
    text: {
        fontSize: Height(7), fontFamily: 'Poppins-Regular', color: 'black', width: Width(215)
    }
})