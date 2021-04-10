import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home'
import NavBar from './navBar'

const Tab = createBottomTabNavigator();


const tabNavigation = () => {
    return (
        <View>

        </View>
        // <Tab.Navigator tabBar={<NavBar />}>
        //     <Tab.Screen name="Home" component={Home} />
        //     <Tab.Screen name="Home1" component={Home} />
        // </Tab.Navigator>
    )
}

export default tabNavigation
