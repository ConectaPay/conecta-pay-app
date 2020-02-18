import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, View, Image, Animated} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { colors, metrics, fonts, general } from '../../styles'

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
                <Text style={styles.title}> Conecta & Paga </Text>
                <Text style={styles.slogan}> Seus pagamentos na velocidade da luz</Text>
                <Image style={styles.image} source={ require('../../assets/splash.png') } />
            </View>

            <View style={styles.bottomContainer}>

            <Button 
                    onPress={() => navigation.navigate('Login')}
                    style={{ height:50, marginBottom: 20}}
                    backgroundDarker={colors.primaryDark}
                    backgroundColor={colors.primary}
                    height={50}
                    borderRadius={5}
                    stretch
                    raiseLevel={5}
                
                > 
                    <LinearGradient 
                        start={[0, 0]}
                        end={[1, 1]}
                        locations={[0.2, 0.9]}
                        colors={[colors.primaryDark, colors.primary]}
                        style={{width: '100%', height:'100%',justifyContent:'center', alignItems: 'center'}}
                    >

                        <Text style={{color: 'white'}}>ENTRAR NA CONTA</Text>

                    </LinearGradient>
                </Button>


                <Button 
                    onPress={() => navigation.navigate('SignUp')}
                    style={{ height:50}}
                    backgroundDarker={colors.grayLight}
                    backgroundColor={colors.primary}
                    height={50}
                    borderRadius={5}
                    stretch
                    raiseLevel={3}
                > 
                    <LinearGradient 
                        start={[0, 0]}
                        end={[1, 1]}
                        locations={[0.2, 0.9]}
                        colors={[colors.white, colors.white]}
                        style={{width: '100%', height:'100%',justifyContent:'center', alignItems: 'center'}}
                    >

                        <Text style={{color: 'black'}}>CRIAR NOVA CONTA</Text>

                    </LinearGradient>
                </Button>

            
                <Text style={styles.bottomText}>Termos e Condições de Serviço</Text>
            </View>

        </View>
    )
}
