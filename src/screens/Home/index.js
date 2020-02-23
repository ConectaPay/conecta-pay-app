import React from 'react';
import {  View, Text, TouchableNativeFeedback, ScrollView, TouchableHighlight, TouchableOpacity} from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import  styles from './styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { LinearGradient } from 'expo-linear-gradient';

import { colors, general } from '../../constants'

import {  SendToList, HistoryShortList } from '../../components'
import HomeDrawerNavigation from '../../navigations/HomeDrawerNavigation';

export default function Home({navigation}) {
  
  ScreenWithCustomBackBehavior();

  return (
    <View style={styles.background}>
      
      <LinearGradient style={styles.topContainer} 
        start={[1, 0]}
        end={[1, 1]}
        locations={[0, 0.7]}
        colors={[colors.primaryDark, colors.primary]}>
        <View style={styles.balanceContainer}>
          <Text style={styles.amountBig}> 
            <Text style={{fontSize: 20, fontWeight: 'normal'}}>AO</Text> 350.330,00 </Text>
          <Text style={styles.amountDescription}> <Icon name='cash' size={12}/> Saldo Disponível <Icon name='cash' size={12}/></Text>
        </View>
      </LinearGradient>

      <View style={[general.card , styles.card ]}>
        <View style={styles.rowContainer}>

          <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.silver, true)}>
            <View style={styles.btnContainer}>
              <Icon name='transfer-up' style={styles.btnIcon} />
              <Text style={styles.btnText}> ENVIAR </Text>
            </View>
          </TouchableNativeFeedback>

          <View style={styles.divider}/>

          <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.silver, true)}>
            <View style={styles.btnContainer}>
              <Icon name='qrcode-scan' style={styles.btnIcon} />
              <Text style={styles.btnText}> SCANEAR </Text>
            </View>
          </TouchableNativeFeedback>

          <View style={styles.divider}/>

          <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(colors.silver, true)}>
            <View style={styles.btnContainer}>
              <Icon name='transfer-down' style={styles.btnIcon} /> 
              <Text style={styles.btnText}> RECEBER </Text>
            </View>
          </TouchableNativeFeedback>

        </View>
      </View>

      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        
        <View style={styles.content}>
        
          <View style={styles.sendToContainerHeader}>
            <Text style={{fontSize: 13}}>Enviar dinheiro para:</Text>
            <TouchableOpacity>
              <Text style={styles.historyTitle}>VER TODOS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.sendToContainer}>
            <SendToList />
          </View>

      <View style={styles.historyContainer}>
        <Text style={styles.historyTitle}>ÚLTIMAS TRANSAÇÕES</Text>
        <HistoryShortList />
      </View>

    </View>
    </ScrollView>


  </View>

  );

  function ScreenWithCustomBackBehavior() {
    // ...
  /** *
    useFocusEffect(
      React.useCallback(() => {
        const onBackPress = () => {
          if (isSelectionModeEnabled()) {
            disableSelectionMode();
            return true;
          } else {
            return false;
          }
        };
  
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
        return () =>
          BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      }, [isSelectionModeEnabled, disableSelectionMode])
    );
  
    // ...*/
  }
}