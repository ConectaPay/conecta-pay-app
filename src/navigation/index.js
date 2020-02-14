
import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { colors, metrics, fonts } from '../styles';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Login from '../screens/Access/Login';
import SignUp from '../screens/Access/SignUp';


export default function index (){

  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Welcome"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primaryDark,
        },
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
}