import React from 'react'
import { View, TextView, StyleSheet, Dimensions, TextInput } from 'react-native'
import { BlurView } from "@react-native-community/blur";
import { Theme } from '@assets/Theme'

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const InputText = (props) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <TextInput
                style={[styles.TextInput, props.style]}
                placeholder={props.placeholder}
                placeholderTextColor='grey'
                onChangeText={props.onChangeText}
            >

            </TextInput>
            <View style={styles.rightView}>
                {props.children}
            </View>
            {/* </BlurView> */}
        </View>
    )
}
const styles = StyleSheet.create({
    TextInput: {
        height: '100%',
        width: '100%',
        color: Theme.COLORS.white,
        flex: 9,
        alignSelf: 'center'
    },
    container: {
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 5,
        borderColor: 'grey',
        borderWidth: 0.5,
        marginVertical: 10,
        paddingLeft: 10,
        alignSelf: 'center',
        backgroundColor: 'rgba(60, 60, 60, 0.5)',
        flexDirection: 'row',
        //justifyContent: 'space-between'
    },
    rightView: {
        flex: 1,
        alignSelf: 'center'
    }
})
export default InputText
