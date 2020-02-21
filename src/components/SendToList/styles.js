import { StyleSheet } from 'react-native'
import { metrics, fonts, colors } from '../../constants';

const styles = StyleSheet.create({
    containerList: { 
        width: '100%',
        height: 120,
    },

    containerItem: {
        borderRadius: metrics.doubleBaseRadius,
        width: 80,
        height: 100,
        backgroundColor: 'white',
        marginHorizontal: metrics.smallMargin,
        alignItems: 'center',
    },
    itemAvater: {
        marginTop: metrics.doubleBaseMargin,
        marginBottom: metrics.baseMargin,
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    itemName: { 
        textAlign: 'center',
        fontSize: fonts.small,
        color: colors.grayDark,
    },


});

export default styles;