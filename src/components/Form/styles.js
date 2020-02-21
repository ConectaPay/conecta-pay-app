import { StyleSheet } from 'react-native'
import { colors, fonts, metrics } from '../../constants';

const inputModeStyles = {
   
    containerNormal: {
        flexDirection: 'row',
        padding: metrics.baseMargin,
        paddingLeft: metrics.doubleBaseMargin,
        marginTop: metrics.baseMargin,
        marginBottom: metrics.baseMargin,
        borderWidth: 1,
        width: '100%',
        height: metrics.formInputHeight,
        borderRadius: metrics.formInputRadius,
        borderColor: colors.grayLight,
        backgroundColor: '#FEFEFE',
    },

    containerError: {
        flexDirection: 'row',
        padding: metrics.baseMargin,
        paddingLeft: metrics.doubleBaseMargin,
        marginTop: metrics.baseMargin,
        borderWidth: 1,
        width: '100%',
        height: metrics.formInputHeight,
        borderRadius: metrics.formInputRadius,
        borderColor: 'darkred',
        backgroundColor: '#FEFEFE',
    },
}


const styles = StyleSheet.create({
    helpText: {
        alignSelf: 'center', 
        fontSize: fonts.regular,
        color: colors.grayMedium,
    },
    errorText: {
        fontSize: fonts.regular,
        color: 'darkred',
        textAlign:'right',
        marginRight: metrics.doubleBaseMargin
    },
    inputStyle: {
        fontSize: fonts.input,
        height: '100%',
        width: '100%',
    },
    inputIcon: { 
        marginRight: metrics.baseMargin 
    }
});

export { inputModeStyles, styles }