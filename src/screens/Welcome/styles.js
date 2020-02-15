import { StyleSheet} from 'react-native'

import { metrics, fonts, colors } from '../../styles'


const styles = StyleSheet.create({
    background: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.tripleBaseMargin,
    },
    title: {
        flex: 0.1,
        marginTop: metrics.doubleBaseMargin,
        color: colors.primaryDark,
        fontSize: fonts.big + fonts.big,
        fontWeight: 'bold'
    },
    slogan: {
        flex: 0.1,
        color: colors.primary,
        fontSize: fonts.big,
        marginTop: metrics.baseMargin,
    },
    image: {
        flex: 1,
        width: '100%',
        margin: metrics.tripleBaseMargin,
    },
    topContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        flex: 0.5,
        width: '100%',
        justifyContent: 'center',
    },
    bottomText: {
        marginTop: metrics.tripleBaseMargin,
        fontSize: fonts.input,
        alignSelf: 'center'
    }

})

export default styles;