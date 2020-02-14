import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { colors, fonts, metrics } from '../styles'


export default class Button extends Component {
    render() {
      const {title, type} = this.props;
        return (
            <View style={[styles.common, styles.container]}>

              <LinearGradient style={[styles.common, styles.gradient]}
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

            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    marginTop: metrics.baseMargin,
    shadowColor: colors.grayLight,
  },
  common: {
    height: 45,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center', 
    flexDirection: 'row',
    borderRadius: metrics.baseRadius,
    elevation: 1
  }

})
