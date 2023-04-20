import { Platform, StyleSheet } from 'react-native'
import color from './color'
import font from './fonts'
import { Height, Width } from './responsive'

export const globalStyles = StyleSheet.create({
    button: {
        height: Height(60),
        width: Width(390),
        alignSelf: 'center',
        borderRadius: Width(10),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primaryButton,
        position: 'absolute',
        bottom: 0,
        marginBottom: Height(60)
    },
    buttonText: {
        fontWeight: '500',
        fontSize: Height(18),
        color: 'white',
        position: 'absolute',
        fontFamily: font.POPPINS_SEMI_BOLD,
    },
    shadow: {
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4
    },
    safeView: {
        flex: 0,
        backgroundColor: color.background
    },
    container: {
        flex: 1
    },
    logo: {
        alignItems: 'center',
        marginTop: Height(42)
    },
    textView: {
        height: Height(60),
        width: Width(390),
        borderWidth: Height(3),
        borderColor: color.primaryBorder,
        borderRadius: Width(10),
        alignSelf: 'center',
        marginTop: Height(25),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Width(28)
    },
    lineView: {
        height: Height(35),
        width: 1,
        backgroundColor: color.text,
        marginLeft: Width(12)
    },
    textInput: {
        marginLeft: Width(25),
        fontSize: Height(20),
        fontFamily: font.POPPINS_REGULAR,
        color: color.text,
        width: Width(250)
    },
    headerView: {
        height: Height(90),
        borderBottomLeftRadius: Width(20),
        borderBottomRightRadius: Width(20),
        paddingHorizontal: Width(25),
        backgroundColor: 'white'
    },
    headerSubView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        textAlign: 'center',
        fontSize: Height(16),
        fontFamily: 'Poppins-Bold',
        marginTop: Height(10)
    },
    settingText: {
        marginHorizontal: Width(20),
        marginTop: Height(20),
        fontFamily: font.POPPINS_REGULAR,
        fontSize: Height(14),
        color: color.text
    },
    walletHeaderText: {
        fontSize: Height(20),
        fontFamily: font.POPPINS_SEMI_BOLD,
        marginTop: Height(25),
        marginLeft: Width(25)
    },
    walletHeaderSubText: {
        fontSize: Height(12),
        fontFamily: font.POPPINS_REGULAR,
        color: color.text,
        opacity: 0.6,
        marginHorizontal: Width(25),
        lineHeight: Height(18),
        letterSpacing: 0.02,
        marginTop: Height(10)
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(20),
        marginTop: Height(15)
    },
    allContestHeaderView: {
        height: Height(130),
        borderBottomLeftRadius: Width(20),
        borderBottomRightRadius: Width(20),
        paddingHorizontal: Width(25),
        backgroundColor: 'white',
        zIndex: 0,
        position: 'absolute',
        width: Width(430)
    },
    contestRowView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: Height(20)
    },
    contestRowSubView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(15),
        marginTop: Height(15)
    },
    teamImage: {
        width: Width(65),
        height: Height(48)
    },
    headerTimeText: {
        fontSize: Height(10),
        fontFamily: 'Poppins-Medium',
        color: '#FF0000',
        marginLeft: Width(8)
    },
    contestItemMainView: {
        paddingTop: Height(10)
    },
    contestItemMainBtn: {
        height: Platform.OS === 'android' ? Height(175) : Height(155),
        width: Width(350),
        backgroundColor: color.background,
        alignSelf: 'center',
        borderRadius: Width(10)
    },
    contestItemFrontView: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: Width(30),
        marginTop: Height(20)
    },
    contestItemFrontText: {
        fontSize: Height(8),
        fontFamily: font.POPPINS_REGULAR,
        color: color.text
    },
    contestItemSubView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(30), marginTop: Height(10)
    },
    contestItemPrizeText: {
        fontSize: Height(14), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text
    },
    contestItemRowView: {
        flexDirection: 'row', alignItems: 'center'
    },
    contestItemEntryText: {
        fontSize: Height(8), fontFamily: font.POPPINS_REGULAR, textDecorationLine: 'line-through', color: color.greenText
    },
    contestItemEntryBtn: {
        height: Height(15), width: Width(30), backgroundColor: color.greenText, justifyContent: 'center', alignItems: 'center', borderRadius: Width(3), marginLeft: Width(8)
    },
    contestItemEntryBtnText: {
        fontSize: Height(8), fontFamily: font.POPPINS_REGULAR, color: color.background
    },
    contestItemProgress: {
        alignSelf: 'center', marginTop: Height(10)
    },
    contestItemSpotView: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: Width(30), marginTop: Height(8)
    },
    contestItemSpotLeftText: {
        fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.spotsLeftText
    },
    contestItemSpotText: {
        fontSize: Height(10), fontFamily: font.POPPINS_REGULAR, color: color.text
    },
    contestItemEndView: {
        height: Height(30), backgroundColor: '#D9D9D9', borderBottomLeftRadius: Width(10), borderBottomRightRadius: Width(10), marginTop: Platform.OS === 'android' ? Height(33) : Height(25), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: Width(25)
    },
    contestItemEndText: {
        fontSize: Height(10), fontFamily: font.POPPINS_SEMI_BOLD, color: color.contestText, marginLeft: Width(5)
    },
    contestItemEndSubView: {
        height: Height(18), width: Height(18), borderRadius: Height(18) / 2, borderWidth: 1, justifyContent: 'center', alignItems: 'center'
    },
    contestHeaderView: {
        height: Height(165), borderBottomLeftRadius: Width(20), borderBottomRightRadius: Width(20), paddingHorizontal: Width(25), backgroundColor: color.background
    },
    playerSelectHeaderView: {
        height: Height(30),
        flexDirection: 'row'
    },
    playerSelectedHeaderBtn: {
        flexDirection: 'row', alignItems: 'center',
    },
    blackNormalText: {
        fontSize: Height(10), fontFamily: 'Poppins-Medium', color: 'black'
    },
    selByText: {
        fontSize: Height(8), fontFamily: 'Poppins-Regular', marginTop: Height(5), color: 'rgba(126, 126, 126, 1)'
    },
    CaptainRowView: {
        flexDirection: 'row', marginTop: Height(5), alignItems: 'center'
    },
    catView: {
        height: Height(30), backgroundColor: '#636363', justifyContent: 'center', alignItems: 'center'
    },
    catText: {
        fontSize: Height(14), fontFamily: 'Poppins-Medium', color: 'white'
    },
    playerImage: {
        height: Height(65), width: Width(70), resizeMode: 'contain'
    },
    playerView: {
        marginLeft: Width(10), width: Width(100)
    },
    playedText: {
        fontSize: Height(6), fontFamily: 'Poppins-Regular', color: 'rgba(107, 105, 212, 1)', marginLeft: Width(5)
    },
    playerBottomView: {
        flexDirection: 'row', justifyContent: 'center', marginBottom: Width(15)
    },
    playerBottomBtn: {
        height: Height(30), width: Width(140), flexDirection: 'row', backgroundColor: '#8D73BC', alignItems: 'center', borderRadius: Width(20), justifyContent: 'center'
    },
    playerBottomBtnText: {
        fontSize: Height(15), color: 'white', marginLeft: Width(10), fontFamily: 'Poppins-Medium'
    },
    playerBottomSecBtn: {
        height: Height(30), width: Width(98), backgroundColor: '#8D73BC', alignItems: 'center', borderRadius: Width(20), justifyContent: 'center', marginLeft: Width(50)
    },
    playerBottomSecBtnText: {
        fontSize: Height(15), color: 'white', fontFamily: 'Poppins-Medium'
    },
    joinContestFrontView: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: Width(25), marginTop: Height(25)
    },
    alignCenterView: {
        alignItems: 'center'
    },
    contestRegularText: {
        fontSize: Height(12), fontFamily: font.POPPINS_REGULAR, color: color.text
    },
    playerPrizeText: {
        fontSize: Height(16), fontFamily: font.POPPINS_SEMI_BOLD, color: color.text
    }

})