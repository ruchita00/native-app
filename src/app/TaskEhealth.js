import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const TaskEhealth = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square} >
          <Image
            style={{width: 109, height: 24, marginLeft: 5}}
            source={require('../images/ehealth.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.arrow}>
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
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    marginRight: 15,
  },
});

export default TaskEhealth;
