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
        height: 140,
        marginBottom: 40,
        alignItems: 'center',
        backgroundColor: colors.primaryDark
    },
    balanceContainer: {
        marginTop: metrics.doubleBaseMargin,
        alignItems: 'center',
    },
    amountBig: {
        fontWeight: 'bold',
        fontSize: 30,
        color: colors.white,
    },
    amountDescription: {
        fontSize: fonts.regular,
        color: colors.grayLight,
        alignContent: 'center',
        justifyContent: 'center'
    },
    card: {
        flex: 1,
        zIndex: 1,
        width: '80%',
        elevation: 3,
        alignSelf: 'center',
        position: 'absolute',
        top: 100,
        backgroundColor: colors.white,
        padding: metrics.doubleBaseMargin,
        borderRadius: 10,
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
        borderRadius: 10,
    },
    btnIcon: {
        color:  colors.accent,
        fontSize: fonts.big,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    btnText: {
        color: colors.accent,
        fontSize: fonts.small,
        fontWeight: 'bold',
    },

    content: {
        flex: 1,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingTop: metrics.tripleBaseMargin,
    },

    sendToContainerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: metrics.smallMargin,
        width: '90%',
    },
    sendToContainer: {
        flex: 1.3,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginBottom: metrics.doubleBaseMargin,
    },

    historyContainer: {
        flex: 4,
        width: '90%',
        
        /** 
        elevation: 3,
        borderRadius: metrics.baseRadius,
        backgroundColor: 'white',
        */
        marginTop: metrics.doubleBaseMargin,
    },
    historyTitle: {
        fontSize: fonts.medium,
        fontWeight: 'bold',
        marginBottom: metrics.smallMargin,
    }

   

})

export default styles;