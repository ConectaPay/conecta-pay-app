import React, {Component} from 'react';
import { StyleSheet, StatusBar, View} from 'react-native';

//import RootStack from './src/navigation';

import Login from './src/screens/Access/Login'; 
import SignUp from './src/screens/Access/SignUp'; 
import Welcome from './src/screens/Welcome'; 
import { colors, metrics } from './src/styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Login />
      
      </View>
    );
}}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor, //#F9F9FA - #F1F3F6
    height: '100%',
    width: '100%',
    borderTopColor: colors.primaryDark, //status bar
    borderTopWidth: StatusBar.currentHeight,
  }
});
