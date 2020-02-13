import React from 'react'
import { Text, StyleSheet, View, Image} from 'react-native'

import Button from '../../components/Button'
import { metrics, fonts } from '../../styles'

export default function index() 
{
        return (
            <View style={styles.background}>
                
                <View style={styles.topContainer}>
                    <Text style={styles.title}> Conecta & Paga </Text>
                    <Text style={styles.slogan}> Seus pagamentos na velocidade da luz</Text>
                    <Image style={styles.image} source={ require('../../assets/splash.png') } />
                </View>

                <View style={styles.bottomContainer}>
                    <Button title='ENTRAR NA CONTA' type='primary' />
                    <Button title='CRIAR NOVA CONTA' type='secundary' />
                    <Text style={styles.bottomText}>Termos e Condições de Serviço</Text>
                </View>

            </View>
        )
}

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
