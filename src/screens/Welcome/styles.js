import { StyleSheet} from 'react-native'

import { metrics, fonts, colors } from '../../styles'


const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.tripleBaseMargin,
    },
    title1: {
        color: colors.primaryDark,
        fontSize: fonts.big + fonts.big,
        fontWeight: 'bold'
    },
    title2: {
        color: colors.grayDark,
        fontSize: fonts.big + fonts.big,
        fontWeight: 'bold'
    },
    slogan: {
        color: colors.dark,
        fontSize: fonts.big,
        marginTop: metrics.baseMargin,
    },
    image: {
        height: 400,
        alignSelf: 'center',
        width: '100%',
        margin: metrics.tripleBaseMargin,
        borderRadius: 20,
    },
    topContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: metrics.doubleBaseMargin,

    },
    bottomContainer: {
        width: '100%',
        justifyContent: 'center',
    },
    bottomText: {
        marginTop: metrics.tripleBaseMargin,
        fontSize: fonts.input,
        alignSelf: 'center',
        color: colors.grayDark,
        
    }

})

export default styles;