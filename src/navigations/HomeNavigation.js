import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableNativeFeedback } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, metrics, fonts } from '../styles';

import History from '../screens/History';
import Profile from '../screens/Profile';

import SignUp from '../screens/Access/SignUp';
import Home from '../screens/Home';

export default function HomeNavigation() 
{
    const Tab = createBottomTabNavigator();
       
    return(
        <Tab.Navigator 
            initialRouteName='HOME'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'HOME') 
                    iconName = focused ? 'home' : 'home-outline';
                 else if (route.name === 'HISTÓRICO') 
                    iconName = 'history';
                 else if (route.name === 'QRCODE') 
                    iconName = 'qrcode-scan';
                 else if (route.name === 'PERFIL') 
                    iconName = focused ? 'account' : 'account-outline';

                // You can return any component that you like here!
                return(
                    
                            <MaterialCommunityIcons name={iconName} size={25} color={color} />
                            
                )
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.primaryDark,
                inactiveTintColor: colors.grayDark,
                
                tabStyle: { 
                    backgroundColor: '#694fad',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: 80,
                    
                }
            }}
            
            >
                <Tab.Screen name="HOME" component={Home}  options={{

                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    }}  />

                 Tab.Screen name="HISTÓRICO" component={History} />
                
                <Tab.Screen name="QRCODE" component={SignUp} />
                
                <Tab.Screen name="PERFIL" component={Profile} />
            
            </Tab.Navigator>
    )
}

 
