import React  from 'react'
import { Text, StyleSheet, View ,StatusBar, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons } from '@expo/vector-icons';


import { LinearGradient } from 'expo-linear-gradient';

import { colors, metrics, fonts, general } from '../constants'

export default function HeaderBar () {
    
    return (
        <LinearGradient style={styles.container}
            start={[0, 0]}
            end={[1, 1]}
            locations={[0.2, 0.9]}
            colors={[colors.primaryDark, colors.primary]}
        >

            <View style={styles.firstBar}>
                <TouchableOpacity background={TouchableNativeFeedback.Ripple('red')}>
                    <MaterialCommunityIcons size={30} name='text' style={styles.firstBarChild}/>
                </TouchableOpacity>
               
                <Text style={[styles.firstBarChild, {fontSize: 23}]}>CONECTA</Text>


                <TouchableOpacity>
                    <View style={styles.notificationBadge} />
                    <MaterialCommunityIcons size={30} name='bell' style={styles.firstBarChild} />
                </TouchableOpacity>

            </View>
            
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: metrics.doubleBaseMargin,
        paddingTop: StatusBar.currentHeight + metrics.doubleBaseMargin,  
    },
    firstBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    firstBarChild: {
        color: colors.light,
        fontWeight: 'bold',
    },
    notificationBadge: {
        position: 'absolute',
        top: 4,
        right: 4,
        width: 10,
        height: 10,
        borderRadius: 20,
        backgroundColor: colors.alert,
        zIndex: 1,
    }
})
