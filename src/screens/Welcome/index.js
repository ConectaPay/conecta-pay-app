import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, Image, Animated} from 'react-native'

import {Button} from '../../components'

import styles from './styles'

export default function index ({ navigation }) 
{
    const [ X1 ] = useState( new Animated.Value( 2000 )); //estado inical: x=70
    const [ X2 ] = useState( new Animated.Value( -2000 )); //estado inical: x=70
    const [ logo ] = useState( new Animated.ValueXY( {x: 125, y: 125 } )); //estado inical: x=70

    useEffect(()=> {
        Animated.parallel([
            Animated.spring(X1, {
                toValue: 0, //ir para x=0
                speed: 6,  
                bounciness: 25
            }),
            Animated.spring(X2, {
                toValue: 0, //ir para x=0
                speed: 6,  
                bounciness: 25
            })

        ]).start();
    }, []);

    return (
        <View style={styles.background}>
            <View style={styles.topContainer}>
                <Text style={styles.title}> Conecta & Paga </Text>
                <Text style={styles.slogan}> Seus pagamentos na velocidade da luz</Text>
                <Image style={styles.image} source={ require('../../assets/splash.png') } />
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity style={{transform: [{translateX: X1}]}} activeOpacity={0.8} onPress={() => navigation.navigate('Login')}>
                    <Button title='ENTRAR NA CONTA' type='primary' />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('SignUp')}>
                    <Button title='CRIAR NOVA CONTA' type='secondary' />
                </TouchableOpacity>

                <Text style={styles.bottomText}>Termos e Condições de Serviço</Text>
            </View>

        </View>
    )
}
