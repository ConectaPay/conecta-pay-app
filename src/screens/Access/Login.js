import React, { useState, useEffect } from 'react'
import { 
    Text, 
    Keyboard,
    Animated,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native'

import { Input} from '../../components'

import Button from "react-native-really-awesome-button";
import { LinearGradient } from 'expo-linear-gradient';

import { colors, metrics, fonts, general } from '../../styles'



import styles from './styles'

export default function Login( {navigation} ) 
{
    const [ offset ] = useState( new Animated.ValueXY( {x: 75, y: 0} )); //estado inical: x=70
    const [ logo ] = useState( new Animated.ValueXY( {x: 125, y: 125 } )); //estado inical: x=70

    useEffect(()=> {
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow); //
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
        

        Animated.spring(offset.x, {
            
            useNativeDriver: false,
            toValue: 0, //ir para x=0
            speed: 6,  
            bounciness: 25
        }).start();
    }, []);

    //Animacao para reduzir a imagem ao abrir o teclado
    function keyboardDidShow () 
    {
        Animated.timing( logo, {
            useNativeDriver: false,
            toValue: 70, 
            duration: 300
        }).start();
    }

    //aumentar a imagem ao fechar teclado
    function keyboardDidHide () 
    {
        Animated.timing( logo, {
            useNativeDriver: false,
            toValue: 125, 
            duration: 300
        }).start();
    }
    
    return (
        <KeyboardAvoidingView style={styles.backgorund}>
            <Animated.Image 
                style={{ 
                    marginTop: 60,
                    width: logo.x,
                    height: logo.y
                }}
                source={ require('../../assets/icon.png') }
            />

            <Animated.View 
                style={[
                    styles.container, 
                    { transform: [{translateX: offset.x}] }
                ]}>

                <Input style={styles.inputStyle} type='phone' hint='Telefone' maxLength={12} />
                <Input style={styles.inputStyle} type='password' hint='Senha' maxLength={16} />

          

                <Button 
                    onPress={() => navigation.navigate('Home') }
                    style={{ height: 50, marginTop: 20}}
                    backgroundDarker={colors.primaryDark}
                    backgroundColor={colors.primary}
                    height={50}
                    borderRadius={metrics.doubleBaseRadius}
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

                        <Text style={{color: 'white'}}>ENTRAR</Text>

                    </LinearGradient>
                </Button>


                <Text style={styles.bottomText}>Não tens uma conta? Criar uma conta </Text>
            </Animated.View>
 
        </KeyboardAvoidingView>
    )
} 