import { StyleSheet} from 'react-native'


import { metrics, fonts, colors } from '../../styles'


const styles = StyleSheet.create({
    background: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    topContainer: {
        width: '100%',
        height: 100,
        marginBottom: 40
    },
    card: {
        alignSelf: 'center',
        position: 'absolute',
        height: 170,
        backgroundColor: colors.white,
        zIndex: 1,
    },
    amountBig: {
        fontWeight: 'bold',
        fontSize: 28
    },
    amountDescription: {
        color: colors.dark,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: metrics.doubleBaseMargin,
    },
    divider: {
        height: 50,
        width: 1,
        backgroundColor: colors.grayLight,
    },
    btn: {
        width: 65,
        backgroundColor: colors.white,
        borderRadius: metrics.doubleBaseRadius,
        padding: metrics.baseMargin,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:  metrics.baseMargin,
        marginLeft: metrics.baseMargin,
        elevation: 4,
    },
    btnIcon: {
        color: colors.primaryDark,
        fontSize: fonts.big,
        fontWeight: 'bold'
    },
    btnText: {
        color: colors.primaryDark,
        fontSize: fonts.small,
        fontWeight: 'bold',
        marginTop: 4,
    },
    sendToContainer: {
        width: '100%',
        height: 100,
        margin: 40,
        backgroundColor: 'green'

    },
    sendToContentContainer:{
        height: 100,

    },
    historyContainer: {
        width: '100%',
        margin: 40,
        paddingLeft: metrics.tripleBaseMargin,
        paddingRight: metrics.tripleBaseMargin,
        backgroundColor: 'red'
    },
    historyContentContainer: {
        backgroundColor: 'gray',
       
    }

})

export default styles;