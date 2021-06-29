import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ServicesScreenHeader from './src/app/ServicesScreenHeader'
import HomeScreenHeader from './src/app/HomeScreenHeader';
import AccountScreenHeader from './src/app/AccountScreenHeader'
import CircleScreenHeader from './src/app/CirclesScreenHeader'
import SearchFilter from './src/app/SearchFilter';
function CustomHeader({title, isHome, navigation}) {
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{width: 30, height: 30, marginLeft: 5}}
              source={require('./src/images/menu.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <Image
              style={{
                width: 14,
                height: 10,
                marginLeft: 9,
                marginTop: '12.5%',
                fontWeight: 600,
                tintColor: '#036FCB',
              }}
              source={require('./src/images/Vector.png')}
              resizeMode="contain"
            />
            <Text
              style={{marginTop: '12.5%', color: '#036FCB'}}>
              Back
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', marginTop: 15}}>{title}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        {/* <Text>Home!</Text> */}
        <TouchableOpacity>
          <Text style={{marginLeft: 140}}>Home!</Text>
          <Text
            style={{marginTop: 20, marginLeft: 120}}
            onPress={() => navigation.navigate('HomeDetail')}>
            Go home detail
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home Detail" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <HomeScreenHeader />
      </View>
    </SafeAreaView>
  );
}

function ServicesScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="services" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        
        <Text style={{marginLeft: 140}}>Services!</Text>
        <TouchableOpacity>
          <Text
            style={{marginTop: 20, marginLeft: 120}}
            onPress={() => navigation.navigate('ServicesDetail')}>
            Go Services detail
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function ServicesScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="services" style={{fontSize:24}} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ServicesScreenHeader />
      </View>
    </SafeAreaView>
  );
}

function CirclesScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Circles" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        {/* <Text>Home!</Text> */}
        <TouchableOpacity>
          <Text style={{marginLeft: 140}}>Circles!</Text>
          <Text
            style={{marginTop: 20, marginLeft: 120}}
            onPress={() => navigation.navigate('CirclesDetail')}>
            Go Circles detail
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function CirclesScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Circles Detail" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <SearchFilter />
      </View>
    </SafeAreaView>
  );
}

function AccountScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Account" isHome={true} navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        {/* <Text>Home!</Text> */}
        <TouchableOpacity>
          <Text style={{marginLeft: 140}}>Account!</Text>
          <Text
            style={{marginTop: 20, marginLeft: 120}}
            onPress={() => navigation.navigate('AccountDetail')}>

            Go Account detail
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function AccountScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Account Detail" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <AccountScreenHeader />
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Notifications" navigation={navigation} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Notifications</Text>
      </View>
    </SafeAreaView>
  );
}
function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          height: 150,
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
      <ScrollView style={{marginLeft: 10}}>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('MenuTab')}>
          <Image
            source={require('./src/images/home.png')}
            resizeMode="contain"
            style={{marginLeft: 20}}
          />
          <Text style={{marginLeft: 60, marginTop: -25}}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('MenuTab')}>
          <Image
            source={require('./src/images/services.png')}
            resizeMode="contain"
            style={{marginLeft: 20}}
          />
          <Text style={{marginLeft: 60, marginTop: -25}}>Services</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('MenuTab')}>
          <Image
            source={require('./src/images/circles.png')}
            resizeMode="contain"
            style={{marginLeft: 20}}
          />
          <Text style={{marginLeft: 60, marginTop: -25}}>Circles</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('MenuTab')}>
          <Image
            source={require('./src/images/account.png')}
            resizeMode="contain"
            style={{marginLeft: 20}}
          />
          <Text style={{marginLeft: 60, marginTop: -25}}>Account</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false,
fontWeight:'bold'
});

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}
const StackServices = createStackNavigator();

function ServicesStack() {
  return (
    <StackServices.Navigator initialRouteName="Home">
      <StackServices.Screen
        name="Services"
        component={ServicesScreen}
        options={navOptionHandler}
      />
      <StackServices.Screen
        name="ServicesDetail" 
        component={ServicesScreenDetail}
        options={navOptionHandler}
      />
    </StackServices.Navigator>
  );
}
const StackCircles = createStackNavigator();

function CirclesStack() {
  return (
    <StackCircles.Navigator initialRouteName="Home">
      <StackCircles.Screen
        name="Circles"
        component={CirclesScreen}
        options={navOptionHandler}
      />
      <StackCircles.Screen
        name="CirclesDetail"
        component={CirclesScreenDetail}
        options={navOptionHandler}
      />
    </StackCircles.Navigator>
  );
}

const StackAccount = createStackNavigator();

function AccountStack() {
  return (
    <StackAccount.Navigator initialRouteName="Home">
      <StackAccount.Screen
        name="Account"
        component={AccountScreen}
        options={navOptionHandler}
      />
      <StackAccount.Screen
        name="AccountDetail"
        component={AccountScreenDetail}
        options={navOptionHandler}
      />
    </StackAccount.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          elevation: 50,
          backgroundColor: '#ffffff',
          height: 96,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: -10,
              }}>
              <Image
                source={require('./src/images/home.png')}
                resizeMode="contain"
                style={{
                  width: 32,
                  height: 28.8,
                  tintColor: focused ? '#036FCB' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#036FCB' : '#000000',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                top: -10,
              }}>
              <Image
                source={require('./src/images/services.png')}
                resizeMode="contain"
                style={{
                  width: 32,
                  height: 28.8,

                  tintColor: focused ? '#036FCB' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#036FCB' : '#000000',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Services
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Circles"
        component={CirclesStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: -10,
              }}>
              <Image
                source={require('./src/images/circles.png')}
                resizeMode="contain"
                style={{
                  width: 32,
                  height: 28.8,
                  tintColor: focused ? '#036FCB' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#036FCB' : '#000000',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Circles
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                top: -10,
              }}>
              <Image
                source={require('./src/images/account.png')}
                resizeMode="contain"
                style={{
                  width: 32,
                  height: 28.8,

                  tintColor: focused ? '#036FCB' : '#748c94',
                }}
              />
              <Text
                style={{
                  color: focused ? '#036FCB' : '#000000',
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MenuTab"
        drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen name="MenuTab" component={TabNavigator} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
