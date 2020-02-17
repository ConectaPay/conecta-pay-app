import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient';


import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

import styles from './styles'

export default class index extends Component {
    render() {
        return (
            <View>
                <Text> Profile </Text>
                <AwesomeButton>Button</AwesomeButton>;
                <AwesomeButtonRick type="primary">Rick's Primary Button</AwesomeButtonRick>
                <AwesomeButtonRick type="secondary">Rick's Secondary Button</AwesomeButtonRick>
                <AwesomeButton
                    ExtraContent={
                        <LinearGradient colors={["#4C63D2", "#BC3081", "#F47133", "#FED576"]} />
                    }
                > 
                    <Text>Instagram</Text>
                </AwesomeButton>
            </View>
        )
    }
}

/*
activityColor	String	#FFFFFF	Button activity indicator color
activeOpacity	Number	1	Button active state opacity
backgroundActive	String	#C0C0C0	Button active state background-color
backgroundColor	String	#C0C0C0	Button content background-color
backgroundDarker	String	#9F9F9F	Button bottom-front-face background-color
backgroundShadow	String	#C0C0C0	Button bottom shaddow background-color
backgroundPlaceholder	String	#C0C0C0	Button placeholder background-color
backgroundProgress	String	#C0C0C0	Button progress bar background-color
borderColor	String	null	Button border-color
borderRadius	Number	4	Button border-radius
borderWidth	Number	0	Button border-width
height	Number	50	Button height
width	Number	null	Setting width to null mirrors an auto behaviour
paddingHorizontal	Number	12	Sets the button horizontal padding
paddingTop	Number	0	Sets the button padding top
paddingBottom	Number	0	Sets the button padding bottom
stretch	Boolean	false	When set to true together with width set to null the button fills it's parent component width
disabled	Boolean	true	Button disabled state: cancels animation and onPress func
raiseLevel	Number	4	Button 3D raise level
ExtraContent	Node	null	Renders a custom component inside the button content body
springRelease	Boolean	true	Button uses spring on the release animation
onPress              	Function  	null	Button onPress function. It receives a next argument when the progress prop is set to true
progress            	Boolean   	false	When set to true enables progress animation
progressLoadingTime  	Number   	3000	Number in ms for the maximum progress bar animation time
textColor	String	#FFFFFF	Button default label text color
textLineHeight	Number	20	Button default label text line height
textSize	Number	16	Button default label text font size
textFontFamily	String	null	Button default label text font family
style                

*/