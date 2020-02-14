import React from 'react'
import { Text, View, Image} from 'react-native'

import Button from '../../components/Button'
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles'


export default function index ({ navigation }) {

        return (
            <View style={styles.background}>
                <View style={styles.topContainer}>
                    <Text style={styles.title}> Conecta & Paga </Text>
                    <Text style={styles.slogan}> Seus pagamentos na velocidade da luz</Text>
                    <Image style={styles.image} source={ require('../../assets/splash.png') } />
                </View>

                <View style={styles.bottomContainer}>
                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('Login')}>
                        <Button title='ENTRAR NA CONTA' type='primary' />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate('SignUp')}>
                        <Button title='CRIAR NOVA CONTA' type='secundary' />
                    </TouchableOpacity>

                    <Text style={styles.bottomText}>Termos e Condições de Serviço</Text>
                </View>

            </View>
        )
}
