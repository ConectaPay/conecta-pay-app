import React, {Component} from 'react';
import { StyleSheet, StatusBar, View, Text} from 'react-native';

//import RootStack from './src/navigation';

import Login from './src/screens/Access/Login'; 
import SignUp from './src/screens/Access/SignUp'; 
import { colors, metrics } from './src/styles';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <SignUp />
      
      </View>
    );
}}

/**
 * 
    echo "# conecta-app" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin https://github.com/ConectaPay/conecta-app.git
    git push -u origin master
 */

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: metrics.screenHeight,
    width: metrics.screenWidth,
    borderTopColor: colors.primaryDark, //status bar
    borderTopWidth: StatusBar.currentHeight,
  }
});
