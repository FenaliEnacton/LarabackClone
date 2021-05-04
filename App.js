/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './src/Components/tabNavigation'

import Welcome from './src/Screens/Welcome'
import SocialLogin from './src/Screens/SocialLogin';
import Login from './src/Screens/Login';
import FavBrand from './src/Screens/FavBrand'
import Success from './src/Screens/Success'
import Home from './src/Screens/Home'
import StoreInfo from './src/Screens/StoreInfo'


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="SocialLogin" component={SocialLogin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FavBrand" component={FavBrand} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="StoreInfo" component={StoreInfo} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
