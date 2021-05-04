import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const LinearButton = (props) => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00ff69', '#00ffda']} style={[styles.button, props.style]}>
            {props.children}
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        alignItems: 'center',
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 30,
        justifyContent: "center",
        backgroundColor: 'white'
    }
})
export default LinearButton
