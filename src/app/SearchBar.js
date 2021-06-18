import React, { Component } from 'react'
import { Text,Image, View ,StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'

const SearchBar=(props)=> {

        return (
            <View >
            <View >
                <View style={{height:50,
            padding:5,
            alignItems:'center',
            flexDirection:'row',
            margin:15,borderRadius:10
            ,marginTop:40,
            backgroundColor:'#F5F5F5'
            }}>
                <Image source={require('../images/search.png')} />
                <TextInput placeholder="Search" style={{fontSize:16}} />
                
                </View>
                
            </View>
            </View>
        )
    }
    

    const styles=StyleSheet.create({
        SearchBar:{
            flex:1,
            borderColor:'#fff',

        }

    })
export default SearchBar;