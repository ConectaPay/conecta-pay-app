
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, TouchableNativeFeedback, TouchableOpacity, Text } from 'react-native';

function HomeTabBar({ state, descriptors, navigation }) {
    return (
      <View style={
          { 
              flexDirection: 'row', 
              height: 60, 
              backgroundColor: colors.primaryDark, 
              alignItems: 'center', 
              justifyContent: 'space-between' ,
              padding: 20,
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
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Text style={{ color: isFocused ? 'tomato' : 'white' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }