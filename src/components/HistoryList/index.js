import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

import styles from './styles'
import Item from './item'

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
              entity: 'Paloma Gabriela',
              amount: 400, 
              type: 'receive', 
              date: '12 Jan',
              image: require('../../assets/splash.png')
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              entity: 'Edson Paulo',
              amount: 1200, 
              type: 'send', 
              date: '08 Jan',
              image: require('../../assets/icon.png')
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              entity: 'Ricardo Horta',
              amount: 3000, 
              type: 'receive', 
              date: '31 Dez',
              image: require('../../assets/splash.png')
            },
          ];
        return (
            <View style={styles.containerList}>
            {

                
                transactions.map((item)=>{

                    return(
                        <Item 
                            entity={ item.entity } 
                            amount={ item.amount } 
                            type={ item.type } 
                            date={ item.date } 
                            image={ item.image } />
                    )
 
                })
            }
               
                
            </View>
        )
    }
}


