import React, {Component} from 'react';
import {
  Modal,
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');
class HomeScreenHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      searching: false,
      search: '',
    };
  }
  render() {
    return (
      <View style={{flex: 1, marginTop: 100}}>
        <Text style={{fontSize: 20}}>normal screen</Text>
        <Button
          title="show modal"
          onPress={() => {
            this.setState({show: true});
          }}
        />
        <Modal visible={this.state.show} transparent={true}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                marginTop: 350,
                marginBottom: 0,
                borderTopEndRadius: 40,
                borderTopStartRadius: 40,
                flex: 1,
              }}>
              {/* <Image
              style={{flexDirection:'row',width: 20, height: 14,}}
              source={require('../images/chevron_right.png')}
              resizeMode="contain" onPress={()=>{this.setState({show:false})}}
            /> */}

              <Image
                style={{
                  flexDirection: 'row',
                  fontSize: 50,
                  marginLeft: 150,
                  marginTop: 40,
                }}
                source={require('../images/right.png')}
                resizeMode="contain"
                onPress={() => {
                  this.setState({show: false});
                }}
              />
              <Text
                style={{
                  width: 557,
                  marginLeft: 120,
                  marginTop: 15,
                  height: 29,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Congratulations!
              </Text>
              <Text
                style={{
                  width: 330,
                  padding: 10,
                  fontSize: 14,
                  height: 75,
                  margin: 24,
                }}>
                Your health plan has been successfully added. You can see the
                details by clicking on the health plan in the coverage list.
              </Text>

              {/* <SearchBar /> */}
              {/* <Plans text={'Medicare Advantage Plan'} /> */}
              {/* <Plans text={'Individual Family Plan'} /> */}

              <TouchableOpacity>
                <View style={styles.buttonwrapper}>
                  <Text
                    style={styles.button}
                    onPress={() => {
                      this.setState({show: false});
                    }}>
                    View Details
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonwrapper: {
    borderRadius: 40,
    width: 343,
    height: 40,
    marginLeft: 10,

    paddingHorizontal: 10,
    backgroundColor: '#036FCB',
  },
  button: {
    color: '#F2F2F2',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 120,
    marginTop: 10,
  },
});
export default HomeScreenHeader;
