import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';


import { colors, fonts, metrics } from '../styles';

export default class Input extends Component {

  render() {
    const {hint, type, maxLength} = this.props;

    let inputType, iconName;

    switch(type) {
      case 'phone': { inputType = 'phone-pad', iconName = 'smartphone' }; break;
      case 'password': { inputType = 'default', iconName = 'lock' }; break;
      case 'username': { inputType = 'default', iconName = 'user' }; break;
      case 'email': { inputType = 'email-address', iconName = 'mail' }; break;
      case 'number': { inputType = 'numeric', iconName = 'smartphone' }; break;      
      default: inputType = iconName = 'default';
    }

    return (
      <View style={styles.container}>
        <Icon size={25} style={{ marginRight: 10 }} name={iconName} />
        
        <TextInput 
          style={styles.inputStyle}
          maxLength={maxLength} 
          placeholder={hint}
          secureTextEntry={type == 'password' ? true : false}
          keyboardType={inputType}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: metrics.baseMargin,
    marginTop: metrics.baseMargin,
    borderWidth: 0.7,
    width: '100%',
    borderRadius: metrics.baseRadius,
    borderColor: colors.grayLight,
    backgroundColor: '#FEFEFE',
  },
  inputStyle: {
    fontSize: fonts.input,
    height: '100%'
  }
})
