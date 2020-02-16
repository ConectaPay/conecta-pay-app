import React, { Component } from 'react'
import { Text, StyleSheet, View ,StatusBar, Image, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

import { LinearGradient } from 'expo-linear-gradient';

import { colors, metrics, fonts, general } from '../styles'

export default function HomeHeader () {
    
    return (
        <LinearGradient style={styles.container}
            start={[0, 0]}
            end={[1, 1]}
            locations={[0.2, 0.9]}
            colors={[colors.primaryDark, colors.primary]}
        >

            <View style={styles.firstBar}>
                <TouchableOpacity activeOpacity={0.8}>
                    <Icon size={25} name='menu' style={styles.firstBarChild}/>
                </TouchableOpacity>
                <Text style={styles.firstBarChild}>CONECTA</Text>

                <Icon size={25} name='bell' style={styles.firstBarChild} />
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
