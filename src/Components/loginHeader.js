import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const HeaderHeight = (height * 12) / 100

const LoginHeader = ({ step, heading, desc }) => {
    return (

        <View style={styles.container}>
            <Text style={{ color: '#28c979', fontWeight: 'bold' }}>{step}</Text>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={{ color: 'white' }}>{desc}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: HeaderHeight,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 42,
        //backgroundColor: 'pink'
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 20

    },
})
export default LoginHeader
