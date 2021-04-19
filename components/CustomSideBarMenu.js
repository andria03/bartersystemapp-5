import React, { Component } from "react";
import { StyleSheet,View,Text,TouchableOpacity} from "react-native";
import { DrawerItems } from "react-navigation-drawer";

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerItems {...this.props}/>
            </View>
        )
    }
}