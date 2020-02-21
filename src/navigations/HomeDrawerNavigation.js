import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';

import { colors, fonts } from '../constants';
import { HeaderBar } from '../components';

import Settings from '../screens/Settings';

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function HomeDrawerNavigation() {
  return (
      <Drawer.Navigator 
        initialRouteName="Home"
        drawerType='back'>

        <Drawer.Screen 
        name="Home" 
        component={HomeNavigation} 
        options={{
            header: ({ scene, previous, navigation }) => {
              const { options } = scene.descriptor;
              const title =
                options.headerTitle !== undefined
                  ? options.headerTitle
                  : options.title !== undefined
                  ? options.title
                  : scene.route.name;
            
              return ( <HeaderBar title={title} /> );
            }
        }} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
  );
}

//navigation.toggleDrawer();