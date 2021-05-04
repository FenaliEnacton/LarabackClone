import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Button = (props) => {
    return (
        <TouchableOpacity style={[styles.buttonView, props.style]} onPress={props.onPress} >
            {props.children}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonView: {
        alignSelf: "center",
        alignItems: 'center',
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 30,
        justifyContent: "center",
        //backgroundColor: 'white'
    }
})
export default Button

