import  React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import * as Font from 'expo-font';


//redux config
//configuring redux store
import ReduxThunk from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux"
import { userAuthReducer } from "./store/reducer/appStorage"

import Home from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import Transfer from "./screens/Transfer";
import Settings from "./screens/Settings";
//auth screen
import Splash_1 from "./auth/splash";
import Welcome from "./auth/splash3";
import Splash_2 from "./auth/splash2";

import Login from "./auth/login";
import Signup from "./auth/signup";
import PriceChart from "./auth/priceChart";

const Tab = createBottomTabNavigator();
const Stack =  createStackNavigator();
const Drawer = createDrawerNavigator();


const TabNavigator = () => {
  return <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      style: {
        position: "absolute",
        elevation: 0,
        backgroundColor: "white",
        borderRadius: 15,
        height: 90,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>

            <Text
              style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
            >
              Home
            </Text>
          </View>
        ),
      }}
    />

    <Tab.Screen
      name="Portfolio"
      component={Portfolio}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("./assets/icons/portfolio.png")}
              resizeMode="contain"
              style={{
                width: 17,
                height: 17,
                tintColor: focused ? "blue" : "gray",
              }}
            />
            <Text
              style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
            >
              portfolio
            </Text>
          </View>
        ),
      }}
    />



    <Tab.Screen
      name="transfer"
      component={Transfer}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("./assets/icons/transfer.png")}
              resizeMode="contain"
              style={{
                width: 40,
                height: 40,
                tintColor: focused ? "blue" : "gray",
              }}
            />
          </View>
        ),
      }}
    />

  

    <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("./assets/icons/settings.png")}
              resizeMode="contain"
              style={{
                width: 17,
                height: 17,
                tintColor: focused ? "blue" : "gray",
              }}
            />
            <Text
              style={{ color: focused ? "blue" : "gray", fontSize: 10 }}
            >
              Settings
            </Text>
          </View>
        ),
      }}
    />
  </Tab.Navigator>
}
const DrawerNavigator = () => {
  return <Drawer.Navigator
  >
    <Drawer.Screen name='Home' component={TabNavigator} />
  </Drawer.Navigator>
}
const authStack = () => {
  return <Stack.Navigator initialRouteName="Splash_1">
    <Stack.Screen
      name="Homes"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />



  </Stack.Navigator>

}

const HomeStackNavigator = () => {
  return <Stack.Navigator initialRouteName="Splash_1">
    <Stack.Screen
      name="Homes"
      component={DrawerNavigator}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Splash_1"
      component={Splash_1}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Splash_2"
      component={Splash_2}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Signup"
      component={Signup}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="PriceChart"
      component={PriceChart}
      options={{ headerShown: false }}
    />
    

  </Stack.Navigator>
}


export default function App() {
  //redux store setup
  const rootReducer = combineReducers({
    userAuth: userAuthReducer,
  })
  //creating store
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

  let loadFonts = async()=> {
    await Font.loadAsync({
      'Montserrat': require('./assets/fonts/Finlandica-VariableFont_wght.ttf'),
    });
  }

  useEffect(() => {
    
    loadFonts()
}, [loadFonts])


  return (
   <Provider store={store}>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer >

    </Provider>
    
  );
}

