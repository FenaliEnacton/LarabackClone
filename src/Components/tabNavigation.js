import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import Login from '../Screens/Login'
import NavBar from './navBar'
import Search from '../Screens/Search'

const Tab = createBottomTabNavigator();


const tabNavigation = () => {
    return (

        <Tab.Navigator tabBar={NavBar}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
    )
}

export default tabNavigation
