import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'react-native';


import { colors, fonts } from '../constants';

import Welcome from '../screens/Welcome';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';

import HomeDrawerNavigation from './HomeDrawerNavigation';

export default function AuthNavigation()
{  
  const AuthStack = createStackNavigator();
  
  return(
    <NavigationContainer>
      <AuthStack.Navigator 
        initialRouteName="Welcome"         
        screenOptions={{
          
          // gestureDirection: 'horizontal',
          // gestureEnabled: true,
          headerStyle: {
            backgroundColor: colors.primaryDark,
          },
          headerTitleAlign: 'center',
          headerStatusBarHeight: StatusBar.currentHeight,
          headerTintColor: colors.white,
          headerTitleStyle: {
            fontSize: fonts.input,
            fontWeight: 'bold',
          }
        }}>

        <AuthStack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={{ headerShown: false }}
        />

        <AuthStack.Screen 
          name="Login" 
          component={Login} 
          options={{
            title: 'ENTRAR NA CONTA',
            animationEnabled: false,
          }}
        />

        <AuthStack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{
            title: 'CRIAR NOVA CONTA',
            animationEnabled: false,
          }}
        />

        <AuthStack.Screen 
          name="Home" 
          component={HomeDrawerNavigation} 
          options={{ headerShown: false}}
        />

      </AuthStack.Navigator>
    </NavigationContainer>
  );
}