import { StyleSheet} from 'react-native'

import { metrics, fonts } from '../../styles'


const styles = StyleSheet.create({
    background: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.tripleBaseMargin,
    },
    title: {
        flex: 0.1,
        fontSize: fonts.big + fonts.big,
        fontWeight: 'bold'
    },
    slogan: {
        flex: 0.1,
        fontSize: fonts.big,
        marginTop: metrics.baseMargin,
    },
    image: {
        flex: 0.8,
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