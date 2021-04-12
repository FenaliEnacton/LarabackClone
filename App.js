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

import Intro from './src/Screens/Intro'
import SocialLogin from './src/Screens/SocialLogin';
import Login from './src/Screens/Login';
import FavBrand from './src/Screens/FavBrand'
import Success from './src/Screens/Success'
import Home from './src/Screens/Home'

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
          name="Intro"
          component={Intro}
        />
        <Stack.Screen name="SocialLogin" component={SocialLogin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="FavBrand" component={FavBrand} />
        <Stack.Screen name="Success" component={Success} />
        <Stack.Screen name="Home" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
