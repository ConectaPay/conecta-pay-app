import React, { Component } from 'react'
import { Text, StyleSheet, View , Button} from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View>
                <Text> WELCOME </Text>
                <Button title='Ir para Home'
                 onPress={() => {
                    //this.props.navigation.navigate('Home');
                }}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
