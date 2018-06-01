import React, { Component } from 'react';
import { Container, Header,Title, Content,Button,
				 Icon, Form, Item, Input, Label,Right,Body,Left,Picker,Text } from 'native-base';
export default class ThirdPage extends Component  {
    

    constructor(props) {
    	super(props);
    		this.state = {
      		selected2: undefined
    	};
  	}

  	onValueChange2(value: string) {
    	this.setState({
      	selected2: value
    	});
  	}

    render() {
        return ( 
        	<Container>
        		<Header>
        			<Body>
            		<Title>Picker Placeholder</Title>
          		</Body>
          	</Header>	
          	
          	<Content>
          		<Form>
            		<Picker
              		mode="dropdown"
		              iosIcon={<Icon name="ios-arrow-down-outline" />}
		              placeholder="Select your SIM"
		              placeholderStyle={{ color: "#bfc6ea" }}
		              placeholderIconColor="#007aff"
		              style={{ width: undefined }}
		              selectedValue={this.state.selected2}
		              onValueChange={this.onValueChange2.bind(this)}
            		>
              	<Picker.Item label="Wallet" value="key0" />
              	<Picker.Item label="ATM Card" value="key1" />
              	<Picker.Item label="Debit Card" value="key2" />
              	<Picker.Item label="Credit Card" value="key3" />
              	<Picker.Item label="Net Banking" value="key4" />
            		</Picker>
          		</Form>

          		<Form>
            			<Item floatingLabel>
              			<Label>Character</Label>
              				<Input />
            						</Item>
            						<Item floatingLabel last>
              						<Label>Description</Label>
              				<Input />
            			</Item>
          			</Form>
          				
          			<Button rounded>
            			<Text>Primary</Text>
         	 			</Button>
        		</Content>
      		</Container>
        );
    }
}