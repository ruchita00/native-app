import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Plans = props => {
  return (
    <View style={styles.item }>
      <View style={styles.itemLeft}>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View >
        <Image
          style={{width: 24, height: 12, marginLeft: 5}}
          source={require('../images/rightarrow.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    width: 340,
    height: 56,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 10,
borderBottomWidth:0.5,borderColor:'gray',paddingBottom:5
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    marginRight: 15,
  },
  itemText:{
      
  }
});

export default Plans;
