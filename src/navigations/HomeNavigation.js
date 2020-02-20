import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableNativeFeedback, TouchableOpacity, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeTabBar} from '../components'


import {MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, metrics, fonts } from '../constants';

import History from '../screens/History';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';

import SignUp from '../screens/Auth/SignUp';
import Home from '../screens/Home';

export default function HomeNavigation() 
{
    const Tab = createBottomTabNavigator();
       
    return(
        <Tab.Navigator 
            initialRouteName='home'
            tabBar={props => <HomeTabBar {...props} />}
            screenOptions={({ route }) => ({})}
            tabBarOptions={{
                activeTintColor: colors.primaryDark,
                inactiveTintColor: colors.grayDark,
            }}
            >
                <Tab.Screen name="home" component={Home} options={{ tabBarLabel: 'HOME'}} />

                <Tab.Screen name="history" component={History}   options={{ tabBarLabel: 'HISTÓRICO', showLabel: false}} />
                
                <Tab.Screen name="settings" component={Settings}  options={{  tabBarLabel: 'ADD', }}/>

                <Tab.Screen name="qrcode" component={SignUp}  options={{ tabBarLabel: 'QRCODE'}}/>
                
                <Tab.Screen name="profile"  component={Profile}  options={{ tabBarLabel: 'PERFIL'}}/>
            
            </Tab.Navigator>
    )


}

 
