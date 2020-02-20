import React from 'react';
import { View, Text,StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
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
                
        <Text style={styles.amountBig}>450,330.00</Text>
        <Text style={styles.amountDescription}>Saldo Disponível (KZ)</Text>

          <View style={styles.buttons}>
                    
            <View style={styles.btn}>
              <Icon name='transfer-up' style={styles.btnIcon} />
              <Text style={styles.btnText} >Enviar</Text>
            </View>

            <View style={styles.btn}>
              <Icon name='transfer-down' style={styles.btnIcon} />
              <Text style={styles.btnText} >Receber</Text>
            </View>

            <View style={styles.divider} />
                    
            <View style={styles.btn}>
              <Icon name='qrcode' style={styles.btnIcon} />
              <Text style={styles.btnText}>QRCode</Text>
            </View>

            <View style={styles.btn}>
              <Icon name='plus-circle' style={styles.btnIcon} />
              <Text style={styles.btnText}>ADD</Text>
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