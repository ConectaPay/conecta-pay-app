import { StyleSheet } from 'react-native'
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    containerList: { 

        width: '100%',
        height: 100,
        flexDirection: 'row'

    },

    containerItem: {
        width: 100,
        height: 120,
    },
    itemAvater: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    itemName: {
        fontSize: fonts.small,
        color: colors.grayDark,
    },


});

export default styles;