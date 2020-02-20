import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'react-native';


import { colors, fonts } from '../constants';

import Welcome from '../screens/Welcome';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';

import Home from './HomeNavigation';

import { HeaderBar } from '../components';

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
            fontSize: fonts.bigger,
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
            title: 'FAZER LOGIN',
            animationEnabled: false,
          }}
        />

        <AuthStack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{
            title: 'CRIAR CONTA',
            animationEnabled: false,
          }}
        />

        <AuthStack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerShown: true,
            safeAreaInsets: {
              bottom: 0,
              top: StatusBar.currentHeight,
            },
            title: 'CONECTA PAY',
            headerStyle: {
              height: 200, 
              backgroundColor: colors.primaryDark
            },
              
            header: ({ scene, previous, navigation }) => {
              const { options } = scene.descriptor;
              const title =
                options.headerTitle !== undefined
                  ? options.headerTitle
                  : options.title !== undefined
                  ? options.title
                  : scene.route.name;
            
              return (
                <HeaderBar
                  title={title}
                  
                />
              );
            }


          }}
        />

      </AuthStack.Navigator>
    </NavigationContainer>
  );
}