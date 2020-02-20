import React from 'react';
import { View, Text,StatusBar, TouchableNativeFeedback, TouchableOpacity, ScrollView} from 'react-native';
import { TouchableHighlight,  } from 'react-native-gesture-handler';
import  styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { LinearGradient } from 'expo-linear-gradient';

import { colors, general } from '../../constants'

import {  SendToList, HistoryList } from '../../components'

export default function Home() {
  
  return (
    <View style={styles.background}>
      
      <LinearGradient style={styles.topContainer}
            start={[0, 0]}
            end={[1, 1]}
            locations={[0.2, 0.9]}
            colors={[colors.primaryDark, colors.primary]}
        >
          <View/>
      </LinearGradient>


      <View style={[general.card , styles.card ]}>
                
          <View style={[styles.btnContainer, {marginBottom: 25, backgroundColor: 'transparent'}]}>
            <Text style={styles.amountBig}> 
              <Icon name='cash' style={styles.btnIcon}/> 
                450.330,00 
              <Icon name='cash' style={styles.btnIcon}/> 
            </Text>
            <Text style={styles.amountDescription}>Saldo Disponível (KZ)</Text>
          </View>
        
       
        <View style={styles.rowContainer}>

        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
          <View style={[styles.btnContainer, {backgroundColor: 'transparent'}]}>
            <View style={styles.btnContainer}>
              <Icon name='transfer-up' style={styles.btnIcon} />
              <Text style={styles.btnText}> ENVIAR </Text>
            </View>
          </View>
          </TouchableNativeFeedback>

          <View style={styles.divider}/>

          <View style={[styles.btnContainer, {backgroundColor: 'transparent'}]}>
            <View style={styles.btnContainer}>
              <Icon name='qrcode-scan' style={styles.btnIcon} />
              <Text style={styles.btnText}> SCANEAR </Text>
            </View>
          </View>

          <View style={styles.divider}/>

          <View style={[styles.btnContainer, {backgroundColor: 'transparent'}]}>
            <View style={styles.btnContainer}>
              <Icon name='transfer-down' style={styles.btnIcon} /> 
              <Text style={styles.btnText}> RECEBER </Text>
            </View>
          </View>

        </View>

      </View>

    <View style={styles.content}>
      
      <View style={styles.sendToContainer}>
        <View style={styles.sendToContainerHeader}>
          <Text style={{fontSize: 12}}>Enviar dinheiro para:</Text>
          <TouchableHighlight>
            <Text style={styles.historyTitle}>VER TODOS</Text>
          </TouchableHighlight>
        </View>

        <SendToList />
      </View>

      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>ÚLTIMAS TRANSAÇÕES</Text>
        <HistoryList />
      </View>

    </View>

  </View>

  );
}