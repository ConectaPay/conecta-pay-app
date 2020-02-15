import React, { Component } from 'react'
import { Text, StyleSheet, View ,StatusBar } from 'react-native'
import { colors, metrics } from '../styles'

export default function Header () {
    
    return (
        <View style={styles.container}>
            <Text>CONECTA</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primaryDark,
        padding: metrics.doubleBaseMargin,
        paddingTop: StatusBar.currentHeight + metrics.doubleBaseMargin,
        height: 250,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20
    }
})
