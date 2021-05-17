import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HeaderLeft = (props) => {
    return (
        <TouchableOpacity style={styles.IconView} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    IconView: {
        position: 'absolute',
        left: 10,
        //alignSelf: 'flex-end'
        // paddingLeft: 10,
        //backgroundColor: 'white'
    }
})
export default HeaderLeft
