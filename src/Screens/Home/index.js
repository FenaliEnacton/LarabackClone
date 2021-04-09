import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Touchable, Image } from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = () => {
    return (
        <ImageBackground source={require("../../Images/Login.jpg")} style={{ flex: 1, width: width, height: height, }}>
        </ImageBackground>
    )
}

export default index
