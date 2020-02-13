import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback } from 'react-native'
import { metrics, colors } from '../styles'
import Icon from 'react-native-vector-icons/Feather';

import { fonts } from '../styles'

export default class AppBar extends Component {
    render() {
        const {title} = this.props;
        return (
            <View style={styles.container}>

                <TouchableNativeFeedback  
                    background={TouchableNativeFeedback.Ripple('red', true)}>
                    
                    <Icon size={40} style={styles.item} name='arrow-left' />
                </TouchableNativeFeedback>
        
                <Text style={styles.item}> {title} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 15,
        backgroundColor: colors.primaryDark,
        flexDirection: 'row',
        alignItems: 'center'
    },
    item: {
        backgroundColor: 'transparent',
        fontSize: fonts.bigger,
        color: colors.light,
        marginRight: metrics.baseMargin
    }
})
