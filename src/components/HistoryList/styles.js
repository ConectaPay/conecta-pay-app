import { StyleSheet } from 'react-native'
import { metrics, fonts, colors } from '../../constants';

const styles = StyleSheet.create({

    containerItem: {
        margin: metrics.smallMargin,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: metrics.baseMargin,
        
        borderBottomWidth: 1,
        borderBottomColor: colors.grayLight
    },
    itemInfoContainer: {
        flexGrow: 1,
        marginLeft: metrics.smallMargin,
        justifyContent: 'space-between', 
    },
    itemIcon: {
        width: 50,
        height: 50,
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