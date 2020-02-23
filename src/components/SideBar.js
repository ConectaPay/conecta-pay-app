         
import React from 'react';
import {MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Animated, StatusBar, Image, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import { colors, fonts, metrics } from '../constants';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';



export default function SideBar({ progress, ...rest }) 
{
    /** 
    const translateX = Animated.Animated (progress, {
      inputRange: [0, 1],
      outputRange: [-100, 0],
    });
    */
  
    return (
      <Animated.View style={[styles.container, { }]}>
        

        <LinearGradient style={styles.userContainer}
            start={[1, 0]}
            end={[1, 1]}
            locations={[0.3, 5]}
            colors={[colors.primaryDark, colors.primary]}
        >
            <MaterialCommunityIcons name='account-edit' style={styles.editIcon} />
            <Image style={styles.userAvatar} source={require('../assets/splash.png')} />

            <View>
                <Text style={styles.textStyle}> EDSON PAULO GREGÓRIO </Text>
                <Text style={styles.textStyle}> Luanda, Angola </Text>
            </View>

        </LinearGradient>

        <View style={styles.optionsContainer}>
            <TouchableHighlight style={styles.touch} underlayColor='#ff0000' >
                <View style={styles.btn}>
                    <MaterialCommunityIcons name='account' style={styles.icons} />
                    <Text style={styles.textStyle}>Perfil</Text> 
                </View>
            </TouchableHighlight>

            <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons name='settings' style={styles.icons} />
                <Text style={styles.textStyle}>Configurações </Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons name='settings' style={styles.icons} />
                <Text style={styles.textStyle}>Configurações </Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons name='settings' style={styles.icons} />
                <Text style={styles.textStyle}> Configurações </Text> 
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
                <MaterialCommunityIcons name='settings' style={styles.icons} />
                <Text style={styles.textStyle}> Configurações </Text> 
            </TouchableOpacity>

        </View>

        <View style={styles.logoutContainer}>
            <MaterialCommunityIcons name='logout' style={styles.icons} />
            <Text style={styles.textStyle}> Terminar Sessão </Text> 
        </View>


      </Animated.View>
    );
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: '100%',  
    },
    userContainer: {
        padding: metrics.baseMargin,
        paddingTop: StatusBar.currentHeight + metrics.baseMargin,
        width: '100%',
        height: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryDark,
    },
    editIcon: {
        position: 'absolute', 
        top: StatusBar.currentHeight + metrics.baseMargin, 
        right: metrics.baseMargin, 
        color: 'white',
        fontSize: 30,
    },
    userAvatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: metrics.baseMargin
        
    },
    userInfo: {
        color: 'white'

    },
    textStyle: {
        color: 'white',
        fontSize: fonts.regular
    },

    optionsContainer: {
        padding: metrics.baseMargin,
        marginTop: metrics.tripleBaseMargin,
    },
    icons: {
        color: 'white',
        fontSize: 30,
        marginRight: metrics.baseMargin,
    },

    btn: {
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: metrics.baseMargin,
    },

    touch: {
        borderRadius: 50
    },

    logoutContainer: {
        padding: metrics.baseMargin,
        position: 'absolute',
        bottom: metrics.tripleBaseMargin,
        left: metrics.baseMargin,

        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});
