import React, { Component, useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, KeyboardAvoidingView, Animated, Keyboard} from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'
import globalStyles from './styles'
import { fonts } from '../../styles'


export default function SignUp() {
    
        const [offset] = useState(new Animated.ValueXY({x: 75, y: 0})); //estado inical: x=70
        const [opacity] = useState(new Animated.Value(0)); //estado inical da opacidade=0
        const [logo] = useState(new Animated.ValueXY({x: 100, y: 100})); //estado inical: x=70

        useEffect(()=> { 

            keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow); //
            keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

            Animated.parallel([
                Animated.spring(offset.x, {
                    toValue: 0, //ir para x=0
                    speed: 4,  
                    bounciness: 30
                }),
                Animated.timing(opacity, {
                    toValue: 1, //ir para opacidade 1 em 400ms
                    duration: 400
                })
            ]).start();
        }, []);

          //Animacao para encolher a imagem quando abrir o teclado
        function keyboardDidShow () {
            console.log('teclado aberto');
            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: 50,
                    duration: 100
                }),
                Animated.timing(logo.y, {
                    toValue: 50, 
                    duration: 100
                })
            ]).start();
        }

        function keyboardDidHide () {
            console.log('teclado fechado');
          
            Animated.parallel([
                Animated.timing(logo.x, {
                    toValue: 130, 
                    duration: 100
                }),
                Animated.timing(logo.y, {
                    toValue: 130, 
                    duration: 100
                })
            ]).start();

        }

        return (

            <KeyboardAvoidingView style={globalStyles.backgorund}>
               <View style={globalStyles.containerLogo}>
                    <Animated.Image style={{width: 100, height: 100}} source={require('../../assets/icon.png')}/>
                </View>

                <Animated.View 
                    style={[
                        globalStyles.container, 
                        { transform: [{translateX: offset.x}] }
                    ]}>
 
                    <Text style={globalStyles.title}>NOVA CONTA</Text>
                    <Input style={globalStyles.inputStyle} type='username' hint='Nome de Usuário' maxLength={20} />
                    <Input style={globalStyles.inputStyle} type='phone' hint='Telefone' maxLength={12} />
                    <Input style={globalStyles.inputStyle} type='password' hint='Senha' maxLength={16} />
                    <Input style={globalStyles.inputStyle} type='password' hint='Confirmar Senha' maxLength={16} />
                    <Button title='Criar conta' type='primary' />
                    <Text style={globalStyles.bottomText}>Já tens uma conta? Fazer Login </Text>
                </Animated.View>
            </KeyboardAvoidingView>
        )
    }


const styles = StyleSheet.create({
   
})
