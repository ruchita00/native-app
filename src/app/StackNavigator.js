import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView, StyleSheet,
ScrollView,View,Text,Button,StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
// import { create } from "istanbul-reports";
// import { Button } from "native-base";

const Navigator=()=>{
    return(
        <View style={{flex:1,alignItems:'center',
        justifyContent:'center'}}>
            <Text>Home Screen</Text>
<Button title="go to detail screen" />
        </View>
    )

}

const Detail=()=>{
    return(
        <View style={{flex:1,
        alignItems:'center',
    justifyContent:'center'}}>
        <Text>Detail </Text>
    </View>
    )
}

const Stack = createStackNavigator();

const StackNavigator =()=>{
    return(
        <NavigationContainer>
          <StackNavigator>
              <Stack.Screen name="Home" component={Navigator} />
<Stack.Screen name="Detail" component={Detail} />
          </StackNavigator>
        </NavigationContainer>
    )
}
export default StackNavigator;