import React from 'react'
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { AppImages } from '@assets/Images';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const BgImage = (props) => {
    return (
        <ImageBackground source={AppImages.app_bg} style={[styles.bg_image, props.style]}>
            {props.children}
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    bg_image: {
        flex: 1,
        width: width,
        height: height
    }
})
export default BgImage
