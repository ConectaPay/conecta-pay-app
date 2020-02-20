import { StyleSheet } from 'react-native'
import { metrics, fonts, colors } from '../../constants';

const styles = StyleSheet.create({
    containerList: { 
        width: '100%',
        height: 120,
    },

    containerItem: {
        borderRadius: 10,
        width: 80,
        height: 100,
        backgroundColor: 'white',
        marginRight: 10,
        alignItems: 'center',
    },
    itemAvater: {
        marginTop: 20,
        marginBottom: 10,
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