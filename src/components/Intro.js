import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import AppIntro from 'rn-falcon-app-intro';

import { AuthNavigation } from '../navigations';
import { render } from 'react-dom';


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default class Intro extends Component {

  
  render() {

    function app() {
        return ( <AuthNavigation /> )
    }

    return (
      <AppIntro 
        skipBtnLabel='Pular' 
        doneBtnLabel='OK'
        onSkipBtnClick={(index) => { 
        }}
        onDoneBtnClick={(index) => { 
            console.log('concluiu!');
            app();
        }}
        >

        <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <View level={10}><Text style={styles.text}>Page 1</Text></View>
          <View level={15}><Text style={styles.text}>Page 1</Text></View>
          <View level={8}><Text style={styles.text}>Page 1</Text></View>
        </View>

        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
          <View level={5}><Text style={styles.text}>Page 4</Text></View>
          <View level={10}><Text style={styles.text}>Page 4</Text></View>
          <View level={15}><Text style={styles.text}>Page 4</Text></View>
        </View>

        <View style={styles.slide} level={20}>
            <Image style={{ width: 300, height: 300}} source={require('../assets/splash.png')} />
            <View level={15}><Text style={styles.text}>Conecta aos teus amigos...</Text></View>
            <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={{width: 300, height: 50, backgroundColor: 'transparent'}}>
                <Text style={{margin: 30}}>Button</Text>
            </View>
            </TouchableNativeFeedback>
        </View>
      </AppIntro>
    );
  }
}

/*
<View style={{
  position: 'absolute',
  top: 80,
  left: 30,
  width: windows.width,
  height: windows.height,
}} level={20}
>
  <Image style={{ width: 115, height: 70 }} source={require('./img/1/c2.png')} />
</View>

dotColor	string	'rgba(255,255,255,0.3)'	Bottom of the page dot color
activeDotColor	string	'#fff'	Active page index dot color
rightTextColor	string	'#fff'	The bottom right Text Done、> color
leftTextColor	string	'#fff'	The bottom left Text Skip color
onSlideChange	(index, total) => {}		function to call when the pages change
onSkipBtnClick	(index) => {}		function to call when the Skip button click
onDoneBtnClick	func		function to call when the Done button click
onNextBtnClick	(index) => {}		function to call when the Next '>' button click
doneBtnLabel	string、Text element	Done	The bottom right custom Text label
skipBtnLabel	string、Text element	Skip	The bottom left custom Text label
nextBtnLabel	string、Text element	›	The bottom left custom Text label
pageArray (currently not working, don't use it)	array		In the basic usage, you can input object array to render basic view example: [[{title: 'Page 1', description: 'Description 1', img: 'https://goo.gl/uwzs0C', imgStyle: {height: 80 * 2.5, width: 109 * 2.5 }, backgroundColor: '#fa931d', fontColor: '#fff', level: 10 }] , level is parallax effect level ,if you use pageArray you can't use custom view
defaultIndex	number	0	number of the index of the initial index
showSkipButton	bool	true	a boolean defining if we should render the skip button
showDoneButton	bool	true	a boolean that defines if we should render the done button
showDots	bool	true	a boolean that defines if we should render the bottom dots
scrollEnabled
*/