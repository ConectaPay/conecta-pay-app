import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { colors, metrics, fonts } from '../styles';

import Welcome from '../screens/Welcome';
import Login from '../screens/Access/Login';
import SignUp from '../screens/Access/SignUp';
import Home from '../screens/Home';

export default function HomeNavigation() 
{
    const Tab = createBottomTabNavigator();
       
    return(
        <Tab.Navigator
            initialRouteName='Home'
           
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') 
                    iconName = focused ? 'md-home' : 'ios-home';
                 else if (route.name === 'History') 
                    iconName = focused ? 'ios-list-box' : 'ios-list';
                 else if (route.name === 'QrCode') 
                    iconName = focused ? 'md-qr-scanner' : 'ios-qr-scanner';
                 else if (route.name === 'Profile') 
                    iconName = focused ? 'ios-person' : 'ios-person';

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={30} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.primaryDark,
                inactiveTintColor: colors.grayDark,
                tabStyle: {
                    
                }
            }}
            >
                <Tab.Screen name="Home" component={Home} />

                <Tab.Screen name="History" component={Login} />
                
                <Tab.Screen name="QrCode" component={SignUp} />
                
                <Tab.Screen name="Profile" component={Welcome} />
            
            </Tab.Navigator>
    )

      
      // ...
}

 
