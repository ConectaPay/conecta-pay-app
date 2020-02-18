import React, { Component } from 'react'


import { View, Image, Text } from 'react-native';

import styles from './styles';

export default class ItemList extends Component {
    render() {
        
        const {name, image} = this.props;
        
        return (
            <View style={styles.containerItem}>
                <Image style={styles.itemAvater}  source={image ? image : require('../../assets/icon.png')} />
                <Text style={styles.itemName}> {name} </Text>
            </View>
        )
    }
}

