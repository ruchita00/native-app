import React, {Component} from 'react';
import {
  Modal,
  Button,Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

import SearchBar from './SearchBar'
import Plans from './Plans';

const {height, width} = Dimensions.get('window');
class CirclesScreenHeader extends React.Component {

constructor(){
    super();
    this.state={
        show:false,
        searching:false,
        search:''
    }
}
render(){
  return (
    <View style={{flex: 1, marginTop: 100}}>
      <Text style={{fontSize: 20}}>normal screen</Text>
<Button title='show modal' onPress={()=>{this.setState({show:true})}} />
      <Modal 
      visible={this.state.show} transparent={true}>
        <View 
        style={{backgroundColor: '#000000aa', flex: 1}}>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              marginTop: 470,marginBottom:0,
              borderTopEndRadius: 40,
              borderTopStartRadius:40,
              flex: 1,
            }}>
            <Text style={{flexDirection:'row',fontSize: 16,width:208,height:27,marginBottom:48,
            fontWeight:'bold',margin:24}}>Select Plan</Text>
            <Image
              style={{flexDirection:'row',width: 20, height: 14,marginTop:-65, marginLeft: 315}}
              source={require('../images/chevron_right.png')}
              resizeMode="contain" onPress={()=>{this.setState({show:false})}}
            />
            
              {/* <SearchBar /> */}
       <Plans text={'Medicare Advantage Plan'} />
       <Plans text={'Individual Family Plan'} />

                   <Button style={{width:30,height:40}} title='show modal' onPress={()=>{this.setState({show:false})}} />
          </View>
        </View>
      </Modal>
    </View>
  );
}
}
const styles = StyleSheet.create({});
export default CirclesScreenHeader;
