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

import Header from '../components/Header';

import { Button } from '../components';

function AccessNavigation(){
  
  const AccessStack = createStackNavigator();
  
  
  return(  
      <NavigationContainer>
        <AccessStack.Navigator 
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
              headerShown: true,
              safeAreaInsets: {
                bottom: 80,
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
                  <Header
                    title={title}
                    leftButton={
                      previous ? <Button onPress={navigation.goBack} /> : undefined
                    }
                  />
                );
              }


            }}
          />

        </AccessStack.Navigator>
      </NavigationContainer>
    
     ) 
}


export {AccessNavigation}