
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableNativeFeedback, TouchableOpacity, Text } from 'react-native';

import {MaterialCommunityIcons } from '@expo/vector-icons';

import { colors, metrics, fonts } from '../constants';

export default function HomeTabBar({ state, descriptors, navigation }) {
    return (
      <View style={
          { 
              flexDirection: 'row', 
              height: 60, 
              backgroundColor: colors.primaryDark, 
              alignItems: 'center', 
              justifyContent: 'space-between',
              paddingTop: 5,
              paddingBottom: 5,
              paddingLeft: 5,
              paddingRight: 15,
              borderTopRightRadius: 35,
          }
      }>
  
        {
        state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          let iconName;

          if (route.name === 'home') 
              iconName = isFocused ? 'home' : 'home-outline';
           else if (route.name === 'history') 
              iconName = 'history';
           else if (route.name === 'qrcode') 
              iconName = 'qrcode';
           else if (route.name === 'profile') 
              iconName = isFocused ? 'account' : 'account-outline';
           else if (route.name === 'settings') 
              iconName = 'plus-circle';

         
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <View style={{ 
                backgroundColor: isFocused ? colors.grayLight: 'transparent', 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                borderBottomLeftRadius: 15 ,
                borderBottomRightRadius: 15,
                paddingRight: 5 ,
                paddingLeft: 5 ,
                width: isFocused  ? 100 : 50,
              }}>

                  
                <MaterialCommunityIcons name={iconName} style={{ color: isFocused ? colors.primaryDark : 'white' }} size={35} />
                  
                <Text style={{fontSize: 10, color: isFocused ? colors.primaryDark : 'white' }}> { isFocused ? label : null} </Text>

              </View>
             
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }