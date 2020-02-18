import React, { Component } from 'react'
import { Text, StyleSheet, View ,StatusBar, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons } from '@expo/vector-icons';


import { LinearGradient } from 'expo-linear-gradient';

import { colors, metrics, fonts, general } from '../styles'

export default function HeaderBar () {
    
    return (
        <LinearGradient style={styles.container}
            start={[0, 0]}
            end={[1, 1]}
            locations={[0.2, 0.9]}
            colors={[colors.primaryDark, colors.primary]}
        >

            <View style={styles.firstBar}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
                
                    <MaterialCommunityIcons name='menu' style={styles.firstBarChild}/>
                </TouchableNativeFeedback>
                   
               

                <Text style={styles.firstBarChild}>CONECTA</Text>

                <MaterialCommunityIcons name='bell' style={styles.firstBarChild} />
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
        justifyContent: 'space-between',
    },
    firstBarChild: {
        color: 'white',
        fontSize: fonts.bigger,
        fontWeight: 'bold',
    },
})
