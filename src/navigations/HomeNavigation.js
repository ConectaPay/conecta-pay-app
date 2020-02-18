import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableNativeFeedback } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, metrics, fonts } from '../styles';

import History from '../screens/History';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

import SignUp from '../screens/Access/SignUp';
import Home from '../screens/Home';

export default function HomeNavigation() 
{
    const Tab = createBottomTabNavigator();
       
    return(
        <Tab.Navigator 
            initialRouteName='home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'home') 
                    iconName = focused ? 'home' : 'home-outline';
                 else if (route.name === 'history') 
                    iconName = 'history';
                 else if (route.name === 'qrcode') 
                    iconName = 'qrcode-scan';
                 else if (route.name === 'profile') 
                    iconName = focused ? 'account' : 'account-outline';

                // You can return any component that you like here!
                if(route.name === 'settings')
                    return( <MaterialCommunityIcons name='plus-circle' style={{position: 'absolute', top: -20}} size={60} color={color} /> )
                else
                    return( <MaterialCommunityIcons name={iconName} size={25} color={color} /> )
            
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.primaryDark,
                inactiveTintColor: colors.grayDark,
                
                tabStyle: { 
                    
                }
            }}
            
            >
                <Tab.Screen name="home" component={Home} options={{ tabBarLabel: 'HOME'}} />

                <Tab.Screen name="history" component={History}   options={{ tabBarLabel: 'HISTÓRICO', showLabel: false}} />
                
                <Tab.Screen name="settings" component={Settings}  options={{  tabBarLabel: ''}}/>

                <Tab.Screen name="qrcode" component={SignUp}  options={{ tabBarLabel: 'QRCODE'}}/>
                
                <Tab.Screen name="profile"  component={Profile}  options={{ tabBarLabel: 'PERFIL'}}/>
            
            </Tab.Navigator>
    )
}

 
