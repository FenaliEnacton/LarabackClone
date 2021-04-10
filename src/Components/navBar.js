import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get(window).height
const width = Dimensions.get(window).width

const NavBar = () => {
    return (
        <View style={styles.container}>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 500,
        backgroundColor: 'pink'
    }
})
export default NavBar
