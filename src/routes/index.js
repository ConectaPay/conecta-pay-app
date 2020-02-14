import React from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator , TransitionPresets } from '@react-navigation/stack';

import { StyleSheet, StatusBar } from 'react-native';


import { colors, metrics, fonts } from '../styles';

import Welcome from '../screens/Welcome';
import Login from '../screens/Access/Login';
import SignUp from '../screens/Access/SignUp';
import Home from '../screens/Home';

function AccessNavigation(){

  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  
  const AccessStack = createStackNavigator();
  
  
  return(  
      <NavigationContainer>
        <AccessStack.Navigator 
          initialRouteName="Welcome"         
          screenOptions={{
            transitionSpec: {
              open: config,
              close: config,
            },
            ...TransitionPresets.DefaultTransition,
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

          <AccessStack.Screen 
            name="Welcome" 
            component={Welcome} 
            options={{ headerShown: false }}
          />

          <AccessStack.Screen 
            name="Login" 
            component={Login} 
            options={{
              title: 'FAZER LOGIN',
              animationEnabled: false,
            }}
          />

          <AccessStack.Screen 
            name="SignUp" 
            component={SignUp} 
            options={{
              title: 'CRIAR CONTA',
              animationEnabled: false,
            }}
          />

          <AccessStack.Screen 
            name="Home" 
            component={Home} 
            options={{

              headerTitle:{
               // props => <Componentpesonalizado {...props} />,
              } ,

              safeAreaInsets: {
                bottom: 60
              },
              title: 'CONECTA PAY',
              headerStyle: {
                backgroundColor: colors.primaryDark,
                height: 200,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
              },
              
            }}
          />

        </AccessStack.Navigator>
      </NavigationContainer>
    
     ) 
}


export {AccessNavigation}