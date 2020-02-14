import React, { Component } from 'react'
import { Text, StyleSheet,Image, View, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { colors, fonts, metrics } from '../styles'

export default class Button extends Component {
    render() {
      const {title, type, onPress} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.7} style={[styles.container, styles.common]}>

              <LinearGradient style={[styles.gradient, styles.common]}
                start={[0, 0]}
                end={[1, 1]}
                locations={[0.2, 0.9]}
                colors={
                  type == 'primary' ? 
                  [colors.primaryDark, colors.primary] : [colors.white, colors.white]
                }>

                <Text style={
                  type == 'primary' ? 
                  {color: 'white', fontSize: fonts.input} 
                  : {color: 'black', fontSize: fonts.input}
                }>
                  {title}
                </Text> 
              </LinearGradient>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.baseMargin,
    shadowOpacity: 0.12,
    shadowRadius: 16.00,
    elevation: 6,
    padding: 1
  },
  gradient: {
    padding: 14,
  },
  common: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row',
    borderRadius: metrics.baseRadius,
  }

})
