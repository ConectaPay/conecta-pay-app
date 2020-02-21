import React, { useState, useEffect } from 'react'
import { 
    Text, 
    Keyboard,
    Animated,
    View, 
    KeyboardAvoidingView,
    TouchableOpacity,
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';
import tForm from 'tcomb-form-native'
import Button from "react-native-really-awesome-button";

import {InputTemplate} from '../../components'

import styles from './styles'
import { colors, general, metrics } from '../../constants'


export default function SignUp( {navigation} ) {
    
    const [ offset ] = useState( new Animated.ValueXY( {x: 75, y: 0} )); //estado inical: x=70
    const [ logo ] = useState( new Animated.ValueXY( {x: 100, y: 100 } )); //estado inical: x=70

    const Form = tForm.form.Form;  //extrair componente form do pacote tcomb
    const formRef = React.createRef(); //referencia do formulario para manipular

    const userSignUp = tForm.struct({
        username: tForm.String,
        phone: tForm.Number,    // a required number
        password: tForm.String,     // a required string
        confirmPassword: tForm.String,     // a required string
    });

    const options = {
        fields: {
            username: {
                error: 'Campo obrigatório!',
                placeholder: 'Nome de Usuário',
                maxLength:20,
                config: { type: 'username' },
                template: InputTemplate,
                returnKeyType: 'next',
               // onSubmitEditing: (event) => { formRef.current.getComponent('password').refs.input.focus() },
               //  help: 'Your help message here',
            },
            phone: {
                error: 'Informe o seu número de telefone!',
                hasError: false,  // true if there is a validation error
                placeholder: 'Telefone',
                maxLength: 12,
                config: { type: 'phone' },
                template: InputTemplate,
                returnKeyType: 'next',
            },
            password: {
                placeholder: 'Senha',
                error: 'Digite a senha!',
                maxLength: 12,
                config: { type: 'password' },
                template: InputTemplate
            },
            confirmPassword: {
                placeholder: 'Confirmar Senha',
                error: 'Digite a senha!',
                maxLength: 12,
                config: { type: 'password' },
                template: InputTemplate
            }
          }
        
    }; //conjuntos opçoes para os inputs do formulario

    const SignUpForm = React.forwardRef((props, ref) => (
        <Form
            ref={ref}
            type={userSignUp}
            options={options}
        />
    ));

    function signUpSubmit() {

    }

    useEffect(()=> { 

        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow); //
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        Animated.spring(offset.x, {
            toValue: 0, //ir para x=0
            speed: 6,  
            bounciness: 25
        }).start();
    }, []);

    //Animacao para reduzir a imagem ao abrir o teclado
    function keyboardDidShow () 
    {
        Animated.timing( logo, {
            toValue: 50, 
            duration: 300
        }).start();
    }

    //aumentar a imagem ao fechar teclado
    function keyboardDidHide () 
    {
        Animated.timing( logo, {
            toValue: 100, 
            duration: 300
        }).start();
    }

    return (
        <KeyboardAvoidingView style={styles.backgorund}>
            <Animated.Image 
                style={{ 
                    marginTop: 50,
                    width: logo.x,
                    height: logo.y
                }}
                source={ require('../../assets/signup.png') } 
            />
        
            <Animated.View 
                style={[
                    styles.container, 
                    { transform: [{ translateX: offset.x }] }
                ]}>

                <SignUpForm ref={formRef} /> 
                
                <Button 
                    onPress={ () => {}}
                    style={general.button}
                    backgroundDarker={colors.primaryDark}
                    backgroundColor={colors.primary}
                    height={metrics.formInputHeight}
                    borderRadius={metrics.formInputRadius}
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
                        <Text style={{color: 'white'}}>CRIAR CONTA</Text>
                    </LinearGradient>
                </Button>
                   
                <View style={styles.bottomText}>
                    <Text style={styles.bottomText}> Já tens uma conta? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={[styles.bottomText, {fontWeight: 'bold'}]}>  Fazer Login</Text>
                    </TouchableOpacity>
                </View>

            </Animated.View>
        </KeyboardAvoidingView>
    )
}