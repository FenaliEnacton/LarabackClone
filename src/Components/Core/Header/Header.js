import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Theme } from '@assets/Theme'
const width = Dimensions.get('window').width

const Header = (props) => {
    return (
        <View style={[styles.greyBox, props.style]}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    greyBox: {
        height: 60,
        width: width,
        backgroundColor: Theme.COLORS.bg_grey,
        //paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    whiteText: {
        color: Theme.COLORS.white,
        fontSize: 15,
        fontWeight: 'bold'
    },
})
export default Header
