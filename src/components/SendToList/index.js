import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'
import Item from './item'
import { ScrollView, TouchableNativeFeedback, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';

export default class index extends Component {
    render() {
        const contacts = [
            {
              id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
              name: 'Edson Paulo',
            },
            {
              id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
              name: 'Roberta Miranda',
              image: require('../../assets/splash.png')
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              name: 'Hugo Boss',
            },
            {
              id: '58694a0f-3da1-471f-bd96-145571e29d72',
              name: 'Frederico Chiesa',
            },
          ];


        return (
            <ScrollView style={styles.containerList}
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
                <TouchableOpacity >
                  <Item name='Novo' image={require('../../assets/add.png')}/>
                </TouchableOpacity>
              {
              contacts.map((item)=>{
                  return(
                    <TouchableOpacity onPress={()=> {alert('Enviou para '+ item.id)}}>
                      <Item name={ item.name.slice(0, item.name.indexOf(' ')) } image={item.image} />
                    </TouchableOpacity>
                  )
              })
            }
          </ScrollView>
        )
    }
}

