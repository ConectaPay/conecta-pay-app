import React, { useState, useEffect } from 'react'
import { 
    Text, 
    Keyboard,
    Animated,
    View, 
    KeyboardAvoidingView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import tForm from 'tcomb-form-native'
import Button from "react-native-really-awesome-button";

import {InputTemplate} from '../../components'

import styles from './styles'
import { colors, general } from '../../styles'


export default function Login( {navigation} ) 
{
    const [ offset ] = useState( new Animated.ValueXY( {x: 75, y: 0} )); //estado inical: x=70
    const [ logo ] = useState( new Animated.ValueXY( {x: 125, y: 125 } )); //estado inical: x=70

    const Form = tForm.form.Form;  //extrair componente form do pacote tcomb
    const formRef = React.createRef(); //referencia do formulario para manipular

    const userLogin = tForm.struct({
        phone: tForm.Number,    // a required number
        password: tForm.String,     // a required string
    });

    const options = {
        fields: {
            phone: {
                error: 'Informe o número de telefone!',
                hasError: false,  // true if there is a validation error
                placeholder: 'Telefone',
                maxLength: 12,
                config: { type: 'phone' },
                template: InputTemplate,
                returnKeyType: 'next',
               // onSubmitEditing: (event) => { formRef.current.getComponent('password').refs.input.focus() },
               //  help: 'Your help message here',
            },
            password: {
                placeholder: 'Senha',
                error: 'Digite a senha!',
                maxLength: 12,
                config: { type: 'password' },
                template: InputTemplate
            }
          }
        
    }; //conjuntos opçoes para os inputs do formulario

    const LoginForm = React.forwardRef((props, ref) => (
        <Form
            ref={ref}
            type={userLogin}
            options={options}
        />
    ));

    function loginSubmit() {

    }

   

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

    //aumentar a imagem ao fechar teclado  //user-lock - fa5
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
                    marginTop: 40,
                    width: logo.x,
                    height: logo.y
                }}
                source={ require('../../assets/splash.png') }
            />

            <Animated.View 
                style={[
                    styles.container, 
                    { transform: [{translateX: offset.x}] }
                ]}>

                <LoginForm ref={formRef} /> 

                <Button 
                    onPress={ () =>  {
                        // chamada de getValue() para obter os valores do form
                        let value = formRef.current.getValue(); // se ocorrer problema de validação retornara nulo
                        if (value) 
                        {
                            let phone = value.phone;
                            let password = value.password.trim();
                            console.log('Telefone: ' + phone + ' - Senha: ' + password);
                            navigation.navigate('Home') 
                        }  
                        else 
                            console.log('tem erro')
                    }}
                    style={general.button}
                    backgroundDarker={colors.primaryDark}
                    backgroundColor={colors.primary}
                    height={45}
                    borderRadius={15}
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
                        <Text style={{color: 'white'}}>ENTRAR</Text>
                    </LinearGradient>
                </Button>
                   
                <View style={styles.bottomText}>
                    <Text style={styles.bottomText}> Não tens uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={[styles.bottomText, {fontWeight: 'bold'}]}> Criar uma conta</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>
 
        </KeyboardAvoidingView>
    )
} 