import React, {Component} from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import RootStack from './src/navigation';

import Login from './src/screens/Access/Login'; 
import SignUp from './src/screens/Access/SignUp'; 
import Welcome from './src/screens/Welcome'; 
import { colors, metrics, fonts } from './src/styles';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
  

    const forFade = ({ current, closing }) => ({
      cardStyle: {
      
        opacity: current.progress,

      },
    });

    return (
      
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Welcome"
          screenOptions={{
            gestureDirection: 'horizontal',
            gestureEnabled: true,
            headerStyle: {
              backgroundColor: colors.primaryDark,
            },
            headerTitleAlign: 'center',
            headerStatusBarHeight: StatusBar.currentHeight,
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontSize: fonts.bigger,
              fontWeight: 'bold',
            },
          }}
        >

          <Stack.Screen 
            name="Welcome" 
            component={Welcome} 
            options={{ headerShown: false }}
          />

          <Stack.Screen 
            name="Login" 
            component={Login} 
            options={{
                title: 'FAZER LOGIN'
            }}
          />

          <Stack.Screen 
            name="SignUp" 
            component={SignUp} 
            options={{
              title: 'CRIAR CONTA'
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    );
}}


// options={{ headerTitle: props => <Componentpesonalizado {...props} /> }}

// {props => <HomeScreen {...props} extraData={someData} />}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgColor, //#F9F9FA - #F1F3F6
    height: '100%',
    width: '100%',
    borderTopColor: colors.primaryDark, //status bar
    borderTopWidth: StatusBar.currentHeight,
  }
});
