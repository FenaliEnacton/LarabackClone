import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const LinearButton = (props) => {

    return (
        <>
            {props.notActive ?
                <TouchableOpacity style={[styles.button, { backgroundColor: 'white' }, props.style]} onPress={props.onPress}>
                    {props.children}
                </TouchableOpacity>
                : <TouchableOpacity onPress={props.onPress} >
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4BD95A', '#4AADD7']} style={[styles.button, props.style]}>
                        {props.children}
                    </LinearGradient>
                </TouchableOpacity>}
        </>
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
        // backgroundColor: 'white',
    }
})
export default LinearButton
