import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'
import { HistoryFullList } from '../../components'

export default class index extends Component {
    render() {
        return (
            <View>
                <Text> Histórico de Transaçãoes </Text>
                <HistoryFullList />
            </View>
        )
    }
}

