import React from 'react';
import { View, Text,StatusBar, TouchableOpacity, ScrollView} from 'react-native';
import  styles from './styles';

import Icon from 'react-native-vector-icons/Feather';

import { LinearGradient } from 'expo-linear-gradient';

import { colors, metrics, fonts, general } from '../../styles'


import Button from '../../components/Button'


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
        <Text style={styles.amountDescription}>Saldo disponível (KZ)</Text>

          <View style={styles.buttons}>
                    
            <View style={styles.btn}>
              <Icon name='upload' style={styles.btnIcon} />
              <Text style={styles.btnText} >Enviar</Text>
            </View>

            <View style={styles.btn}>
              <Icon name='download' style={styles.btnIcon} />
              <Text style={styles.btnText} >Receber</Text>
            </View>

            <View style={styles.divider} />
                    
            <View style={styles.btn}>
              <Icon name='camera' style={styles.btnIcon} />
              <Text style={styles.btnText}>QRCode</Text>
            </View>

            <View style={styles.btn}>
              <Icon name='plus-circle' style={styles.btnIcon} />
              <Text style={styles.btnText}>ADD</Text>
            </View>
        </View>
      </View>

      <ScrollView style={styles.sendToContainer}
        contentContainerStyle={styles.sendToContentContainer}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
         <View style={styles.btn}>
              <Icon name='plus-circle' style={styles.btnIcon} />
              <Text style={styles.btnText}>ADD</Text>
            </View>

            <View style={styles.btn}>
              <Icon name='plus-circle' style={styles.btnIcon} />
              <Text style={styles.btnText}>ADD</Text>
            </View>

        </ScrollView>


      <ScrollView style={styles.historyContainer}
        contentContainerStyle={styles.historyContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text>EDSON GREG</Text>
        <Text>EDSON GREG</Text>

      </ScrollView>
    </View>
  );

 

}