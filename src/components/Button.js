import React, { Component } from 'react'
import { Text, StyleSheet,Image, View, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import { colors, fonts, metrics } from '../styles'

export default class Button extends Component {
    render() {
      const {title, type, onPress} = this.props;
        return (
            <TouchableOpacity activeOpacity={0.6} >

              <LinearGradient style={styles.container}
                end={[0.9, 0.3]}
                colors={ 
                  type == 'primary' ? 
                  ['#3E2180','#7C42FF'] : ['white','#f9f9f9']
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
    flexDirection: 'row',
    justifyContent: 'center',
    padding: metrics.baseMargin,
    alignItems: 'center', 
    borderRadius: metrics.baseRadius,
    marginTop: metrics.doubleBaseMargin,
    shadowColor: 'white',
    shadowOpacity: 0.12,
    shadowRadius: 16.00,
    elevation: 4,

  },
  buttonText: {
    fontSize: fonts.input
  },

})
