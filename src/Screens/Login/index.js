import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import LoginHeader from '../../Components/loginHeader'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = ({ navigation }) => {
    return (
        <ImageBackground source={require("../../Images/Login.jpg")} style={{ flex: 1, width: width, height: height, }}>
            <LoginHeader step={"STEP 1"} heading={"Create an account"} desc={"Create an account to continue!"} />
            <View style={styles.EmailView}>
                <TouchableOpacity style={styles.loginbutton} onPress={() => navigation.navigate('FavBrand')} >
                    <View style={styles.buttonTextView}>
                        <Text style={styles.buttonText}>Continue with Email</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    buttonTextView: {
        justifyContent: 'center',
        flex: 1
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 12
    },
    EmailView: {
        height: (height * 15) / 100,
        //backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginbutton: {
        height: (height * 5) / 100,
        width: (width * 85) / 100,
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
})
export default index
