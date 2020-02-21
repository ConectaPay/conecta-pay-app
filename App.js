import React, {Component} from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens();

import { AuthNavigation } from './src/navigations';
import Intro from './src/components/Intro'
import HomeDrawerNavigation from './src/navigations/HomeDrawerNavigation';

export default class App extends Component {
  render() {
    return (
   
    <AuthNavigation /> 

     //    <HomeDrawerNavigation />
      
    // <Intro />
    );
  }
}


