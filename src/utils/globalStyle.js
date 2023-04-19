import { StyleSheet } from 'react-native'
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
    }
})