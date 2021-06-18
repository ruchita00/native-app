import React from "react";
import { ViewBase,Text,StyleSheet,View } from "react-native";

const Tab =({isSelected})=>(
    <View style={{flex:1,alignItems:'center',
    justifyContent:'center'}}>
                  <Text color={isSelected ? 
                  "black":"red"}>Care</Text></View>
)
export default Tab

const styles= StyleSheet.create({
    conatiner:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center'
    }
})