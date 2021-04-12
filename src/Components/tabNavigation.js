import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import Login from '../Screens/Login'
import NavBar from './navBar'
import SocialLogin from '../Screens/SocialLogin'

const Tab = createBottomTabNavigator();


const tabNavigation = () => {
    return (

        <Tab.Navigator tabBar={NavBar}>
            <Tab.Screen name="Home" component={Home} />
            {/* <Tab.Screen name="SocialLogin" component={SocialLogin} /> */}
            <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
    )
}

export default tabNavigation
