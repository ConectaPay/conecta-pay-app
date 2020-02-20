import { StyleSheet } from 'react-native'
import { metrics, fonts, colors } from '../../constants';

const styles = StyleSheet.create({
    containerList: { 
        width: '100%',
        paddingBottom: metrics.baseMargin
    },

    containerItem: {
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderBottomColor: colors.grayLight,
        padding: metrics.baseMargin,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemInfoContainer: {
        flexGrow: 1,
        marginLeft: metrics.baseMargin,
        justifyContent: 'space-between', 
    },
    itemIcon: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    itemTitle: {
        fontSize: fonts.regular,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: fonts.regular,
        color: colors.grayDark,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },



});

export default styles;