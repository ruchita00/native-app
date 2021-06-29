import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {ActivePopup} from './Activepopup';

const popupList = [
  {
    id: 1,
    name: 'Active',
    image: require('../images/active.png')
  },
  {
    id: 2,
    name: 'Pending',
    image: require('../images/yellow.png')
  },
  {
    id: 3,
    name: 'Past',
    image: require('../images/red.png')
    },
];

const ServicesScreenHeader = () => {
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };

  const onClosePopup = () => {
    popupRef: close();
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={onShowPopup}>
          <View style={styles.buutonwrapper}>
            <View
              style={{
                width: 10,
                height: 10,
                flexWrap: 'wrap',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: '#27AE60',
                borderRadius: 20,
                // marginRight: 15,
                flexWrap: 'wrap',
              }}></View>
            <Text style={styles.txtSize}>Active</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 12,
                  color: '#E0E0E0',
                  height: 12,
                  marginLeft: -20,
                  marginTop: 5,
                }}
                source={require('../images/down_arrow.png')}
                resizeMode="contain"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <ActivePopup
          ref={target => (popupRef = target)}
          onTouchOutside={onClosePopup}
          data={popupList}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  txtSize: {
    fontSize: 16,
    marginRight: 60,
    margin: 10,
  },
  buutonwrapper: {
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: 145,
    elevation: 3,
    height: 48,
    // marginLeft: 10,
    marginBottom: 530,
    marginTop: 20,
    marginRight: 180,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
});

export default ServicesScreenHeader;
