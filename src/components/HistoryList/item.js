import React, { Component } from 'react';

import { View , Text, Image} from 'react-native';

 import styles from './styles';

export default class Item extends Component {
  render() {
    const {name, amount, type, date, image} = this.props;
    let description, amountFinal, amountColor='';

    if(type === 'receive')
    {
        description = 'Recebeu de '+ name;
        amountColor = 'green';
        amountFinal = amount;
    }
    else {
        description = 'Enviou a '+ name;
        amountColor = 'red';
        amountFinal = amount * (-1);
    }


    const imageSrc = image ? image : require('../../assets/user.png');
    
    return (
        <View style={styles.containerItem}>
            <Image style={styles.itemIcon}  source={imageSrc} />
            
            <View style={styles.itemInfoContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}> {name} </Text>
                    <Text style={[styles.itemTitle, { color: amountColor }]}> {amountFinal+' Kz'} </Text>
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.itemDescription}> {description} </Text>
                    <Text style={styles.itemDescription}> {date} </Text>
                </View>
            </View>
        </View>
    )
  }
}
