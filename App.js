/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TabBarIOS,
    Text,
    ScrollView,
    AppRegistry
} from 'react-native';

import { 
  Card, 
  CardTitle, 
  CardContent, 
  CardAction, 
  CardButton, 
  CardImage 
} from 'react-native-material-cards';

import { 
  Content} 
  from 'native-base';

import HomePage from './src/HomePage'
import SecondPage from './src/SecondPage'


type Props = {};


export default class App extends Component < Props > {
    
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectIndex:0
        };
    }

    render() {
        return ( 
            < View style = { styles.container } >
             < TabBarIOS style = { styles.tabbar } >
              < TabBarIOS.Item systemIcon = "bookmarks"
                onPress = {() => { this.setState({ selectIndex: 0 }) } }
                selected = { this.state.selectIndex == "0" } >
                <HomePage>
                </HomePage>
              < /TabBarIOS.Item>

              < TabBarIOS.Item systemIcon = "contacts"
                onPress = {() => { this.setState({ selectIndex: 1 }) } }
                selected = { this.state.selectIndex == "1" } >
                
                <SecondPage>
                </SecondPage>
              < /TabBarIOS.Item>

              < TabBarIOS.Item systemIcon = "downloads"
                onPress = {() => { this.setState({ selectIndex: 2 }) } }
                selected = { this.state.selectIndex == "2" } >
                < View style = { styles.pageStyle } >
                  < Text > Page - 3 < /Text> 
                < /View>  
              < /TabBarIOS.Item>

            < /TabBarIOS>  
          < /View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    tabbar: {
        alignSelf: "stretch"
    },
    pageStyle:{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }
});

//AppRegistry.registerComponent('ComponentsPractice', () => homepage);


