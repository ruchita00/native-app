// import 'react-native-gesture-handler'
// import { NavigationContainer } from '@react-navigation/native';

import {
  Modal,
  Image,
  StyleSheet,
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  PickerIOSItem,
} from 'react-native';
import React from 'react';

const deviceHeight = Dimensions.get('window').height;
export class ActivePopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  show = () => {
    this.setState({show: true});
  };
  close = () => {
    this.setState({show: false});
  };

  renderOutsideTouchable(onTouch) {
    const view = <View style={{flex: 1, width: '100%'}} />;
    if (!onTouch) return view;

    return (
      <TouchableWithoutFeedback
        onPress={onTouch}
        style={{flex: 1, width: '100%'}}>
        {view}
      </TouchableWithoutFeedback>
    );
  }

  renderContent = () => {
    const {data} = this.props;
    return (
      <View>
        <FlatList
          style={{marginBottom: 10, marginTop: 15}}
          showVerticalScrollIndicator={false}
          data={data}
          renderItem={this.renderItem}
          extraData={data}
          keyExtractor={(item, index) => index.toString()}
          ItemSeperatorComponent={this.renderSeperator}
          contentContainerStyle={{
            paddingBottom: 10,
          }}
        />
      </View>
    );
  };

  renderItem = ({item}) => {
    return (
      <View
        style={{
          height: 50,
          borderBottomWidth: 1.5,
          borderBottomColor: '#E0E0E0',
          flex: 1,
          padding: 10,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity 
          // style={{
          //   width: 10,
          //   height: 10,
          //   backgroundColor: '#F2994A',
          //   borderRadius: 20,
          //   marginRight: 15,
          // }}

          >
             <Image
            style={{
              width: 10,
            height: 10,
            // backgroundColor: '#F2994A',
            borderRadius: 20,
                      marginRight: 10,
            }}
            source={item.image}
        
          /> 
          </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            flexDirection: 'row',
            marginRight: 220,
            fontWeight: 'bold',
            color: '#182E44',
          }}>
          {item.name}
        </Text>
        <View>
          <Image
            style={{
              width: 14,
              color: '#E0E0E0',
              height: 14,
              marginRight: 15,
              marginTop: 5,
            }}
            source={require('../images/rightarrow.png')}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  };

  renderSeperator = () => {
    <View style={{opacity: 0.1, backgroundColor: '#182E44', height: 1}} />;
  };
  render() {
    let {show} = this.state;
    const {onTouchOutside} = this.props;

    return (
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={this.close}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#000000AA',
            justifyContent: 'flex-end',
          }}>
          {this.renderOutsideTouchable(onTouchOutside)}
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              paddingHorizontal: 10,
              maxHeight: deviceHeight * 0.4,
            }}>
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}
