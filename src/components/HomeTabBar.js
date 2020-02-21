
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
              backgroundColor: colors.primary, 
              alignItems: 'center', 
              justifyContent: 'space-between',
              paddingVertical: 5,
              paddingHorizontal: metrics.baseMargin,

              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
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
              iconName = 'home';
           else if (route.name === 'history') 
              iconName = 'history';
           else if (route.name === 'qrcode') 
              iconName = 'qrcode';
           else if (route.name === 'profile') 
              iconName = 'account';
           else if (route.name === 'settings') 
              iconName = 'wallet';

         
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
                padding: 5,

                flexDirection:   'row', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: isFocused  ? 110 : 70,

                borderTopRightRadius: route.name === 'profile' ? 5 : 25,
                borderBottomRightRadius: route.name === 'profile' ? 5 : 25,

                borderTopLeftRadius: route.name === 'home' ? 5 : 25,
                borderBottomLeftRadius: route.name === 'home' ? 5 : 25,

                backgroundColor: isFocused ? colors.grayLight: 'transparent', 
              }}>

                  
                <MaterialCommunityIcons name={iconName} style={{ color: isFocused ? colors.primaryDark : colors.grayLight }} size={30} />
               
                <Text style={{fontSize: 10, marginHorizontal: 2, color: isFocused ? colors.primaryDark : colors.grayLight }}> { isFocused ? label : null} </Text>

              </View>
             
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }