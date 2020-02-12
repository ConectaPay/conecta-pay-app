import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

import Button from '../../components/Button'


export default function Home() {
  return (
    <View style={{flex: 1}}>
        <Text>Home</Text>
        <Button />
    </View>
  );
}
