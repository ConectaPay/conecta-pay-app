import { StyleSheet} from 'react-native'

import { metrics, fonts, colors } from '../../constants'

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.bgColor,
    },
    topContainer: {
        width: '100%',
        height: 115,
        marginBottom: 35
    },
    card: {
        flex: 1,
        zIndex: 1,
        width: '90%',
        alignSelf: 'center',
        position: 'absolute',
        backgroundColor: colors.primaryLight,
        marginTop: metrics.baseMargin,
        marginHorizontal: metrics.baseMargin,
        padding: metrics.doubleBaseMargin,
        borderTopLeftRadius: 85,
        borderTopRightRadius: 85,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    amountBig: {
        fontWeight: 'bold',
        fontSize: fonts.big,
        color: colors.primaryDark,
    },
    amountDescription: {
        fontSize: fonts.medium,
        color: colors.grayDark,
    },
    divider: {
        height: 30,
        width: 1,
        elevation: 1,
        backgroundColor: colors.grayLight,
        marginHorizontal:  metrics.baseMargin,
    },
    rowContainer: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    btnContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnIcon: {
        color: colors.primaryDark,
        fontSize: fonts.big,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    btnText: {
        color: colors.primaryDark,
        fontSize: fonts.small,
        fontWeight: 'bold',
    },

    content: {
        flex: 1,
        width: '100%',
        padding: metrics.doubleBaseMargin,
        backgroundColor: 'transparent',
    },

    sendToContainerHeader: {
        marginVertical: metrics.baseMargin,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sendToContainer: {
        flex: 2,
        width: '100%',
        paddingHorizontal: metrics.smallMargin,
        backgroundColor: 'transparent'
    },

    historyContainer: {
        flex: 3.5,
        width: '100%',
        padding: metrics.doubleBaseMargin,
        elevation: 3,
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: metrics.baseMargin,
        backgroundColor: 'white'
    },
    historyTitle: {
        fontSize: fonts.medium,
        fontWeight: 'bold',
        paddingBottom: metrics.baseMargin,
        borderBottomWidth: 1,
        borderBottomColor: colors.grayLight,
    }

   

})

export default styles;