import { StyleSheet } from 'react-native'
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    backgorund: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.bgColor //#F9F9FA - #F1F3F6
    },
    container: {
        width: '100%',
        padding: metrics.tripleBaseMargin,
    },
    bottomText: {
        marginTop: metrics.tripleBaseMargin,
        alignSelf: 'center', 
        fontSize: fonts.big
    },
})

export default styles;
