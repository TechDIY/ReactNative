
import React, { Component } from 'react';

import {
    ScrollView
} from 'react-native';


import { 
  Card, 
  CardTitle, 
  CardContent, 
  CardAction, 
  CardButton, 
  CardImage 
} from 'react-native-material-cards';

type Props = {};

export default class HomePage extends Component  {
    

    render() {
        return ( 
        		< ScrollView style = {{}} >
                  <Card style = {{}}>
                    <CardTitle >
                      title="This is a title" 
                      subtitle="This is subtitle"
                    </CardTitle>

                    <CardContent  
                    text="Your device will reboot in few seconds once successful, be patient meanwhile" 
                    />

                    <CardAction 
                      separator={true} 
                      inColumn={false}>
                      <CardButton
                        onPress={() => {}}
                        title="Push"
                        color="blue"
                      />
                      <CardButton
                        onPress={() => {}}
                        title="Later"
                        color="blue"
                      />
                    </CardAction>
                  </Card>



                < /ScrollView>  
        );
    }
}
