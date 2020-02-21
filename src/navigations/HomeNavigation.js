import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {HomeTabBar} from '../components'
import { HeaderBar } from '../components';

import Home from '../screens/Home';
import History from '../screens/History';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';


function HomeNavigation() 
{
    const Tab = createBottomTabNavigator();
    return(

        <Tab.Navigator 
            initialRouteName='home'
            animationEnabled={true}
            tabBar={ props => <HomeTabBar {...props} /> }
            screenOptions={ ({ route }) => ({})}>

            <Tab.Screen name="home" component={Home} options={{ tabBarLabel: 'INÍCIO'}} />

            <Tab.Screen name="settings" component={Settings}  options={{ tabBarLabel: 'CARREGAR', }}/>

            <Tab.Screen name="history" component={History}   options={{ tabBarLabel: 'HISTÓRICO'}} />

            <Tab.Screen name="profile"  component={Profile}  options={{ tabBarLabel: 'PERFIL'}}/>
        
        </Tab.Navigator>
    )
}
    
function HomeStackNavigator()
{  
  const HomeStackNavigator = createStackNavigator();
  return(
      <HomeStackNavigator.Navigator      
        screenOptions={{
            header: ({ navigation }) => {
                return ( <HeaderBar navigation={navigation} /> );
            }
        }}>

        <HomeStackNavigator.Screen name="Home" component={HomeNavigation} />

      </HomeStackNavigator.Navigator>
  );
}

 
export default HomeStackNavigator;