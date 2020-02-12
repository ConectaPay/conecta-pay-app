import { StyleSheet } from 'react-native'
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    backgorund: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.doubleBaseMargin,
        backgroundColor: colors.bgColor //#F9F9FA - #F1F3F6
    },
    containerLogo: {
        flex: 0.5,
        justifyContent: 'center'
    },
    logo: {
        height: 130,
        width: 130,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    inputStyle: {
       
    },
    title: {
        alignSelf: 'center',
        fontSize: fonts.bigger,
        fontWeight: 'bold',
        color: colors.primaryDark,
        marginBottom: metrics.doubleBaseMargin
    },
    bottomText: {
        marginTop: metrics.baseMargin,
        alignSelf: 'center', 
        fontSize: fonts.big
    },
})

export default styles;
