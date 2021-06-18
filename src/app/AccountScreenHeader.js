import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import HyperLink from 'react-native-hyperlink';
const AccountScreenHeader = () => {
  const [toggleCheckBox, setToggeleCheckBox] = useState(false);

  return (
    <View style={styles.conatiner}>
      <View style={styles.conatinerWrapper}>
        <Text style={styles.header}>Add Coverage</Text>
      </View>
      <View>
        <Text style={styles.title}>
          You are about to go to eHealth's website.eHealth makes it easier for
          you to find affordable,quality health insurance.Please have the your
          medicare card and primary care physician's name handy.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 30,
          alginItems: 'çenter',
          marginTop: 32,
        }}>
        <CheckBox
          style={styles.checkbox}
          disabled={false}
          value={toggleCheckBox}
          tintColors={{true: '#036FCB', false: 'black'}}
          onValueChange={newValue => setToggeleCheckBox(newValue)}
        />

        <HyperLink 
        linkDefault={true}
        linkStyle={{color:'#828282',fontSize:14, textDecorationLine: 'underline'}}
        linkText={(url)=>url === 'https://www.ehealthinsurance.com/about-ehealth/terms-of-use/' ? 'Terms and Conditions' : url}
        // linkText1={(url1)=>url1 === 'https://www.ehealthinsurance.com/about-ehealth/privacy-policy/' ? 'Privacy Policy' : url}
        >
        <Text style={styles.text}>
          I agree to the eHealth https://www.ehealthinsurance.com/about-ehealth/terms-of-use/ and Privacy Policy 
          and authorize eHealth to share my enrollment and plan information with
          Mpowered Health.
        </Text>
    
        </HyperLink>
      
        
      </View>
      <View style={{flexDirection: 'row', alginItems: 'çenter', fontSize: 14}}>
        <CheckBox
          style={styles.checkbox}
          disabled={false}
          tintColors={{true: '#036FCB', false: 'black'}}
          value={toggleCheckBox}
          onValueChange={newValue => setToggeleCheckBox(newValue)}
        />

<Text style={styles.text}>
          I agree that Mpowered Health could share my Provider,Drug,Pharmacy &
          Personal information for enhanced shopping and enrollment experience.
        </Text>

        
      </View>
      <TouchableOpacity>
        <View
          style={styles.buttonwrapper}>
          <Text style={styles.button}>Proceed</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  
  },
  conatinerWrapper: {
    width: 207,
    height: 38,
    marginTop: 40,
    paddingHorizontal: 20,
  },
  button: {
    color: '#F2F2F2',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 120,
    marginTop: 10,
  },
  text: {
    width: 311,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    color: '#828282',
    fontWeight: '500',
    fontSize: 14,
  },
  checkbox: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  title: {
    color: '#333333',
    width: 325,
    height: 80,
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 32,
    fontSize: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonwrapper:{
    borderRadius: 40,
    width: 343,
    height: 48,
    marginLeft: 10,
    marginTop: 62,
    paddingHorizontal: 10,
    backgroundColor: '#036FCB',
  }
});
export default AccountScreenHeader;
