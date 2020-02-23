
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
              height: 50, 
              backgroundColor: colors.grayLight, 
              alignItems: 'center', 
              justifyContent: 'space-between',
              paddingHorizontal: metrics.tripleBaseMargin,
              borderTopWidth: 1,
              borderTopColor: colors.grayMedium
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
              iconName = 'home-outline';
           else if (route.name === 'history') 
              iconName = 'history';
           else if (route.name === 'qrcode') 
              iconName = 'qrcode';
           else if (route.name === 'profile') 
              iconName = 'account-outline';
           else if (route.name === 'settings') 
              iconName = 'wallet-outline';

          return (
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(colors.grayDark, true)}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <View style={{ 
                width: 60,
                height: '100%',
                alignItems: 'center', 
                justifyContent: 'center',
                borderTopWidth: 2,
                borderTopColor:  isFocused ? colors.accent : 'transparent',
              }}>

                <MaterialCommunityIcons name={iconName} style={{ color: isFocused ? colors.accent : colors.grayDark }} size={27} />

                {
                  !isFocused ? null :
                    <View style={{
                      backgroundColor: colors.accent,
                      width: 5,
                      height: 5,
                      borderRadius: 5,
                  }} /> 
                }

              </View>
            </TouchableNativeFeedback>
          );
        })}
      </View>
    );
  }