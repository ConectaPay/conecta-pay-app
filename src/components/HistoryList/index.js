import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Ionicons } from '@expo/vector-icons';

import styles from './styles'
import Item from './item'
import { ScrollView, TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';

  const transactions = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Paloma Gabriela',
      amount: 400, 
      type: 'receive', 
      date: '12 Jan, 2020',
      image: require('../../assets/splash.png')
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Edson Paulo',
      amount: 12000, 
      type: 'send', 
      date: '08 Jan, 2020',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Ricardo Horta',
      amount: 3000, 
      type: 'send', 
      date: '25 Dez, 2019',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Filipe Fortuna',
      amount: 10000, 
      type: 'receive', 
      date: '14 Nov, 2019',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Roberta Miranda',
      amount: 9000, 
      type: 'send', 
      date: '20 Set, 2019',
      image: require('../../assets/splash.png')
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Hugo Boss',
      amount: 120500, 
      type: 'receive', 
      date: '12 Ago, 2019',
    },
  ]


export function HistoryFullList ()
{
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        { transactions.map( (item) => renderItem (item) ) }
      </ScrollView>
    )
}

export function HistoryShortList ()
{
  let i = 0;
  return (
    <View>
      {
        transactions.map( (item) => {
          if ( i > 5 ) return null;
          else { 
            i++;
            return renderItem (item);
          }
        })
      }
      <TouchableOpacity style={{alignItems: 'center', marginVertical: 10}}>
        <Text style={{fontSize: 12, color: 'slategray'}}>VER MAIS</Text>
        <Ionicons size={25} style={{color:'slategray'}} name='ios-arrow-dropright-circle' />
      </TouchableOpacity>
    </View>
  )
}

function renderItem (item)
{
  return(
    <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('white')}> 
      <Item 
        key={item.id}
        name={ item.name } 
        amount={ item.amount } 
        type={ item.type } 
        date={ item.date } 
        image={ item.image } />
    </TouchableNativeFeedback>
  )

}


