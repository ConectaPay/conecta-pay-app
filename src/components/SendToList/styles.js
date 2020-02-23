import { StyleSheet } from 'react-native'
import { metrics, fonts, colors } from '../../constants';

const styles = StyleSheet.create({
    containerList: { 
        width: '100%',
        paddingHorizontal: metrics.doubleBaseMargin,
    },
    containerItem: {
        width: 60,
        height: '100%',
        justifyContent: 'center',
        marginHorizontal: metrics.smallMargin,
        alignItems: 'center',
    },
    itemAvater: {
        width: '100%',
        height: 60,
        borderRadius: 30,
    },
    itemName: { 
        textAlign: 'center',
        fontSize: fonts.medium,
        color: colors.grayDark,
    },
});

export default styles;