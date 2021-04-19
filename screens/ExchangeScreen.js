import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity,Image,TextInput } from 'react-native';
import firebase from 'firebase';
import db from '../config'

export default class ExchangeScreen extends Component{
    addItem = async (itemName,description)=>{
        var userName = this.state.userName
        db.collection('exchange_requests').add({
            "username": userName,
            "item_name": itemName,
            "description":description,
        })
        this.setState({
            itemName :'',
            description : '',
        })
    
        return Alert.alert(
            'Item ready to exchange',
            '',
            [
                {text: 'OK' , onPress: ()=>{
                    this.props.navigation.navigate('HomeScreen')
                }}
            ]
        )
    
    
      }
    render(){
        return(
            <TouchableOpacity
            style={[styles.button,{marginTop:10}]}
            onPress = {()=>{this.addItem(this.state.itemName, this.state.description)}}
             >
            <Text Style ={{color:'#ffff', fontSize:18, fontWeight:'bold'}}> Add Item </Text> 
            </TouchableOpacity>
        )
    }
}