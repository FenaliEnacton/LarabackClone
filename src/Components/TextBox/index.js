import React from 'react'
import { View, TextView, StyleSheet, Dimensions, TextInput } from 'react-native'
import { BlurView } from "@react-native-community/blur";

const height = Dimensions.get('window').height
const width = Dimensions.get('window').width

const InputText = (props) => {
    return (
        <View>
            {/* <BlurView
                style={styles.blurView}
                overlayColor=""
                blurType="light"
                blurAmount={5}
                reducedTransparencyFallbackColor="white"
            > */}
            <TextInput
                style={styles.TextInput}
                placeholder={props.placeholder}
                placeholderTextColor='grey'
            />
            {/* </BlurView> */}
        </View>
    )
}
const styles = StyleSheet.create({
    blurView: {
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 5,
        backgroundColor: 'rgba(60, 60, 60, 0.5)',
    },
    TextInput: {
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 5,
        borderColor: 'grey',
        alignSelf: 'center',
        borderWidth: 0.5,
        paddingLeft: 10,
        marginVertical: 10,
        backgroundColor: 'rgba(60, 60, 60, 0.5)',

    }
})
export default InputText
