import React, { Component } from 'react';

import { View , Text, Image} from 'react-native';

 import styles from './styles';

export default class Item extends Component {
  render() {
    const {entity, amount, type, date, image} = this.props;
    let description, amountFinal, amountColor='';

    if(type === 'receive')
    {
        description = 'Recebeu de '+ {entity};
        amountColor = 'green';
        amountFinal = amount;
    }
    else {
        description = 'Enviou a '+ {entity};
        amountColor = 'red';
        amountFinal = amount * (-1);
    }

    const imageSrc = image ? image : require('../../assets/icon.png');
    
    return (
        <View style={styles.containerItem}>
            <Image style={styles.itemIcon}  source={imageSrc} />
            <View style={styles.itemInfoContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.itemTitle}> {entity} </Text>
                    <Text style={[styles.itemTitle, { color: {amountColor} }]}> {amountFinal} </Text>
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
