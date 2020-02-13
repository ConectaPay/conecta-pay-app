import React, {Component} from 'react';
import { StyleSheet, StatusBar, View, Text} from 'react-native';

//import RootStack from './src/navigation';

import Login from './src/screens/Access/Login'; 
import SignUp from './src/screens/Access/SignUp'; 
import Welcome from './src/screens/Welcome'; 
import { colors, metrics } from './src/styles';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Welcome />
      
      </View>
    );
}}


const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight,
    width: metrics.screenWidth,
    borderTopColor: colors.primaryDark, //status bar
    borderTopWidth: StatusBar.currentHeight,
  }
});
