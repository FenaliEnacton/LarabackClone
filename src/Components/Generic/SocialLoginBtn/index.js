import React from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Theme } from '@assets/Theme';
const width = Dimensions.get('window').width;
const SocialLoginBtn = (props) => {
    return (
        <View>
            <TouchableOpacity style={[styles.loginbutton, props.style]} onPress={props.onPress}>
                <View style={styles.icon} >
                    {props.children}
                </View>
                <View style={styles.buttonTextView}>
                    <Text style={[styles.buttonText, props.textStyle]}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    loginbutton: {
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 22,
        backgroundColor: Theme.COLORS.white,
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'center'
    },
    buttonTextView: {
        justifyContent: 'center',
        flex: 1,
    },
    buttonText: {
        ...Theme.fontStyles.h3Regular,
        alignSelf: 'center',
        fontSize: 12
    },
    icon: {
        //flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        marginLeft: 12,
    },
})
export default SocialLoginBtn
