import React, {Component} from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import { AccessNavigation } from './src/navigations';

import Intro from './src/components/Intro'

import { colors } from './src/styles';


export default class App extends Component {
  render() {
    return (
      <AccessNavigation /> 
      
    // <Intro />
  );
}
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor, //#F9F9FA - #F1F3F6
    height: '100%',
    width: '100%',
    borderTopColor: colors.primaryDark, //status bar
    borderTopWidth: StatusBar.currentHeight,
  }
});
