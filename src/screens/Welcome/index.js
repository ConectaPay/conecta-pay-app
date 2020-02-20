import React, { useState, useEffect } from 'react'
import { Text, View, Image, Animated} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { colors, general } from '../../constants'

import Button from "react-native-really-awesome-button";


import styles from './styles'

export default function index ({ navigation }) 
{
    const [ X1 ] = useState( new Animated.Value( 300 )); //estado inical: x=70
    const [ X2 ] = useState( new Animated.Value( -300 )); //estado inical: x=70
   
    useEffect(()=> {
        Animated.parallel([
            Animated.spring(X1, {
                toValue: 0, //ir para x=0
                speed: 5,  
                bounciness: 25
            }),
            Animated.spring(X2, {
                toValue: 0, //ir para x=0
                speed: 5,  
                bounciness: 25
            })

        ]).start();
    }, []);

    return (
        <View style={styles.background}>
            <View style={styles.topContainer}>

       
                <View style={{ flexDirection: 'row'}}>
                    <Text style={styles.title1}>Conecta</Text> 
                    <Text style={styles.title2}>Pay</Text>
                </View>
                <Text style={styles.slogan}> Seus pagamentos na velocidade da luz</Text>
                <Image style={styles.image} source={ require('../../assets/splash.png') } />
            </View>

            <View style={styles.bottomContainer}>

                <Button 
                    onPress={() => navigation.navigate('Login')}
                    style={general.button}
                    backgroundDarker={colors.primaryDark}
                    backgroundColor={colors.primary}
                    height={45}
                    borderRadius={25}
                    stretch
                    raiseLevel={4}
                > 
                    <LinearGradient 
                        start={[0, 0]}
                        end={[1, 1]}
                        locations={[0.2, 0.9]}
                        colors={[colors.primaryDark, colors.primary]}
                        style={general.gradientButton}
                    >
                        <Text style={{color: 'white'}}>ENTRAR NA CONTA</Text>

                    </LinearGradient>
                </Button>


                <Button 
                    onPress={() => navigation.navigate('SignUp')}
                    style={general.button}
                    backgroundDarker={colors.grayLight}
                    backgroundColor={colors.white}
                    borderWidth={1}
                    borderColor={colors.grayLight}
                    height={45}
                    borderRadius={25}
                    stretch
                    raiseLevel={4}
                > 
                    <Text style={{color: 'black'}}>CRIAR NOVA CONTA</Text>

                </Button>

            
                <Text style={styles.bottomText}>Termos e Condições de Serviço</Text>
            </View>

        </View>
    )
}