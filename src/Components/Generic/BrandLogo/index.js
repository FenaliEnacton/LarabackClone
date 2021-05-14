import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { AppImages } from '@assets/Images';
import LinearButton from '../../LinearButton'
import { Theme } from '@assets/Theme';
import { translate } from '@translations';

const BrandLogo = (props) => {
    return (
        <TouchableOpacity style={[styles.popularBrandIcon, props.style]}
            onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    popularBrandIcon: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: Theme.COLORS.white,
        //marginRight: 15,
        alignSelf: 'center'
    },
})
export default BrandLogo
