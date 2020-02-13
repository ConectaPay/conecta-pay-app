import React, { useState, useEffect } from 'react'
import { 
    Text, 
    Keyboard,
    Animated,
    KeyboardAvoidingView
} from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'
import AppBar from '../../components/AppBar'
import styles from './styles'

export default function Login() {
    
    const [ offset ] = useState( new Animated.ValueXY( {x: 75, y: 0} )); //estado inical: x=70
    const [ logo ] = useState( new Animated.ValueXY( {x: 125, y: 125 } )); //estado inical: x=70

    useEffect(()=> { 

        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow); //
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.spring(offset.x, {
            toValue: 0, //ir para x=0
            speed: 4,  
            bounciness: 30
        }).start();

    }, []);

    //Animacao para reduzir a imagem ao abrir o teclado
    function keyboardDidShow () {
        console.log('teclado aberto');
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 70,
                duration: 10
            }),
            Animated.timing(logo.y, {
                toValue: 70, 
                duration: 10
            })
        ]).start();
    }

    //aumentar a imagem ao fechar teclado
    function keyboardDidHide () {
        console.log('teclado fechado');
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 125, 
                duration: 10
            }),
            Animated.timing(logo.y, {
                toValue: 125, 
                duration: 10
            })
        ]).start();
    }
    
        return (
            <KeyboardAvoidingView style={styles.backgorund}>
                <AppBar title='ENTRAR NA CONTA' />

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
                        { transform: [{translateY: offset.y}] }
                    ]}>

                    <Input style={styles.inputStyle} type='phone' hint='Telefone' maxLength={12} />
                    <Input style={styles.inputStyle} type='password' hint='Senha' maxLength={16} />
                    <Button title='Entrar' type='primary' />
                    <Text style={styles.bottomText}>Não tens uma conta? Criar uma conta </Text>
                </Animated.View>
            </KeyboardAvoidingView>
        )
    }