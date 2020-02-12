import React, { Component, useState, useEffect } from 'react'
import { Text, StyleSheet, View, Image, KeyboardAvoidingView, Animated} from 'react-native'

import Button from '../../components/Button'
import Input from '../../components/Input'
import globalStyles from './styles'


export default function Login() {

    const [offset] = useState(new Animated.ValueXY({x: 0, y: -85})); //estado inical: y=-70

    useEffect(()=>{ //tipo da animação
        Animated.spring(offset.y, {
            toValue: 0, //ir para y=0
            speed: 5,  
            bounciness: 30
        }).start();
    }, []);
    
        return (
            <KeyboardAvoidingView style={globalStyles.backgorund}>
                <View style={globalStyles.containerLogo}>
                    <Image style={globalStyles.logo} source={require('../../assets/icon.png')}/>
                </View>
                <Animated.View 
                    style={[
                        globalStyles.container, 
                        { transform: [{translateY: offset.y}] }
                    ]}>
                    <Text style={globalStyles.title}>ENTRAR NA CONTA</Text>
                    <Input style={globalStyles.inputStyle} type='phone' hint='Telefone' maxLength={12} />
                    <Input style={globalStyles.inputStyle} type='password' hint='Senha' maxLength={16} />
                    <Button title='Entrar' type='primary' />
                    <Text style={globalStyles.bottomText}>Não tens uma conta? Criar uma conta </Text>
                </Animated.View>
            </KeyboardAvoidingView>
        )
    }
const styles = StyleSheet.create({
    
})
