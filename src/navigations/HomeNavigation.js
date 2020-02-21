import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeTabBar} from '../components'

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
            tabBar={ props => <HomeTabBar {...props} /> }
            screenOptions={({ route }) => ({})}>
            <Tab.Screen name="home" component={Home} options={{ tabBarLabel: 'INÍCIO'}} />

            <Tab.Screen name="settings" component={Settings}  options={{ tabBarLabel: 'CARREGAR', }}/>

            <Tab.Screen name="history" component={History}   options={{ tabBarLabel: 'HISTÓRICO'}} />

            <Tab.Screen name="profile"  component={Profile}  options={{ tabBarLabel: 'PERFIL'}}/>
        
        </Tab.Navigator>
    )
}

 
