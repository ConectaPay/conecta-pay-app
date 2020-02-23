import React  from 'react'
import { Text, StyleSheet, View ,StatusBar, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons } from '@expo/vector-icons';


import { LinearGradient } from 'expo-linear-gradient';

import { colors, metrics, fonts, general } from '../constants'

export default class  HeaderBar extends React.Component {
    render() {

      const {navigation} = this.props;
    
    return (
        <View style={styles.container}>

            <View style={styles.firstBar}>
                <TouchableOpacity background={TouchableNativeFeedback.Ripple('red')} onPress={()=>navigation.openDrawer() }>
                    <MaterialCommunityIcons size={25} name='text' style={styles.firstBarChild}/>
                </TouchableOpacity>
               
                <Text style={[styles.firstBarChild, {fontSize: fonts.input}]}>CONECTA</Text>


                <TouchableOpacity>
                    <View style={styles.notificationBadge} />
                    <MaterialCommunityIcons size={25} name='bell' style={styles.firstBarChild} />
                </TouchableOpacity>

            </View>
            
        </View>
    )
}
}


const styles = StyleSheet.create({
    container: {
        padding: metrics.baseMargin,
        paddingTop: StatusBar.currentHeight + metrics.baseMargin,  
        backgroundColor: colors.primaryDark,
    },
    firstBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    firstBarChild: {
        color: colors.light,
        fontWeight: 'bold',
    },
    notificationBadge: {
        position: 'absolute',
        top: 4,
        right: 4,
        width: 10,
        height: 10,
        borderRadius: 20,
        backgroundColor: colors.alert,
        zIndex: 1,
    }
});

