import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import styles from './styles'
import Item from './item'
import { ScrollView } from 'react-native-gesture-handler';

export default class index extends Component {

    constructor(props){
        super(props);
        this.state = { 
            transactionsList: 
            [

            ] 
        }
    }



    render() {

        const transactions = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              name: 'Paloma Gabriela',
              amount: 400, 
              type: 'receive', 
              date: '12 Jan',
              image: require('../../assets/splash.png')
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              name: 'Edson Paulo',
              amount: 12000, 
              type: 'send', 
              date: '08 Jan',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              name: 'Ricardo Horta',
              amount: 3000, 
              type: 'send', 
              date: '25 Dez',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              name: 'Filipe Fortuna',
              amount: 10000, 
              type: 'receive', 
              date: '14 Nov',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              name: 'Roberta Miranda',
              amount: 9000, 
              type: 'send', 
              date: '20 Set',
              image: require('../../assets/splash.png')
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              name: 'Hugo Boss',
              amount: 120500, 
              type: 'receive', 
              date: '12 Ago',
            },
          ];
        return (
            <View style={styles.containerList}>
              <ScrollView showsVerticalScrollIndicator={false}>
                
            {
                transactions.map((item)=>{

                    return(
                        <Item 
                            name={ item.name } 
                            amount={ item.amount } 
                            type={ item.type } 
                            date={ item.date } 
                            image={ item.image } />
                    )
 
                })
            }
               </ScrollView>
                
            </View>
        )
    }
}


