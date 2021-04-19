import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image,TextInput } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'

export default class HomeScreen extends Component{
    
    renderItem = ( {item, i} ) =>{
        console.log(item.item_name);
        return (
          <ListItem
            key={i}
            title={item.book_name}
            subtitle={item.reason_to_request}
            titleStyle={{ color: 'black', fontWeight: 'bold' }}
            rightElement={
                <TouchableOpacity style={styles.button}
                  onPress ={()=>{
                    this.props.navigation.navigate("RecieverDetails",{"details": item})
                  }}
                  >
                  <Text style={{color:'#ffff'}}>View</Text>
                </TouchableOpacity>
              }
            bottomDivider
          />
        )
      }
    
    render(){
        return(
            <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.requestedBooksList}
            renderItem={this.renderItem}
          />
        )
    }
}