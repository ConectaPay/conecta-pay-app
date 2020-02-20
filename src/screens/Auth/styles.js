import { StyleSheet } from 'react-native'
import { metrics, fonts, colors } from '../../constants';

const styles = StyleSheet.create({
    backgorund: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.bgColor
        
    },
    container: {
        width: '100%',
        padding: metrics.tripleBaseMargin,
    },
    bottomText: {
        marginTop: metrics.doubleBaseMargin,
        alignSelf: 'center', 
        fontSize: fonts.big,
        fontWeight: '600',
        flexDirection: 'row'
    },
})

export default styles;
