import { StyleSheet} from 'react-native'


import { metrics, fonts, colors } from '../../styles'


const styles = StyleSheet.create({
    background: {
        height: '100%',
        alignItems: 'center',
        backgroundColor: colors.bgColor,
    },
    topContainer: {
        width: '100%',
        height: 100,
        marginBottom: 50
    },
    card: {
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
        height: 155,
        backgroundColor: colors.white,
        zIndex: 1,
    },
    amountBig: {
        fontWeight: 'bold',
        fontSize: 28,
        color: colors.primaryDark,
        marginLeft: 10,
    },
    amountDescription: {
        color: colors.grayDark,
        marginLeft: 10,

    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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

    content: {
        padding: metrics.doubleBaseMargin,
        width: '100%',
    },
    sendToContainerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    sendToContainer: {
        width: '100%',
        padding: metrics.baseMargin,
        elevation: 4,
        height: 150,
        borderRadius: 15,
        backgroundColor: 'white',
    },

    historyContainer: {
        width: '100%',
        padding: metrics.doubleBaseMargin,
        elevation: 4,
        height: 310,
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: metrics.baseMargin,
    },
    historyTitle: {
        fontSize: fonts.medium,
        fontWeight: 'bold',
        marginBottom: metrics.smallMargin,
    }

   

})

export default styles;