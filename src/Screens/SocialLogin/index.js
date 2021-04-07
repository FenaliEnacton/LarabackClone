import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import LoginHeader from '../../Components/loginHeader'
import Icon from 'react-native-vector-icons/AntDesign';
import FbIcon from 'react-native-vector-icons/MaterialIcons';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SocialLogin = ({ navigation }) => {
    return (
        // <View>
        <ImageBackground source={require("../../Images/Login.jpg")} style={{ flex: 1, width: width, height: height, }}>
            <LoginHeader step={"STEP 1"} heading={"Create an account"} desc={"Create an account to continue!"} />

            <View style={styles.EmailView}>
                <TouchableOpacity style={styles.loginbutton} >
                    <View style={styles.icon} >
                        <Icon name="mail" size={17} color="black" />
                    </View>
                    <View style={styles.buttonTextView}>
                        <Text style={styles.buttonText}>Continue with Email</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={styles.orView}>
                <View style={styles.line}></View>
                <Text style={{ color: 'grey', fontWeight: 'bold' }}>or</Text>
                <View style={styles.line}></View>
            </View>


            <View style={styles.buttonView}>
                <TouchableOpacity style={[styles.loginbutton, { backgroundColor: 'black', borderWidth: 1, borderColor: "grey" }]}>
                    <View style={styles.icon} >
                        <Icon name="apple1" size={17} color="white" />
                    </View>
                    <View style={styles.buttonTextView}>
                        <Text style={[styles.buttonText, { color: 'white' }]}>Continue with Apple</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.loginbutton, { backgroundColor: '#0288d1' }]}>
                    <View style={styles.icon} >
                        <FbIcon name="facebook" size={20} color="white" />
                    </View>
                    <View style={styles.buttonTextView}>
                        <Text style={[styles.buttonText, { color: 'white' }]}>Continue with Facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginbutton}>
                    <View style={styles.icon} >
                        <Icon name="google" size={17} color="black" />
                    </View>
                    <View style={styles.buttonTextView}>
                        <Text style={styles.buttonText}>Continue with Google</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{ alignSelf: 'center', height: 20, flexDirection: 'row' }}>
                <Text style={{ color: 'grey', fontSize: 12 }}>Already have an account ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: 'white' }}>Log in</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >
        //</View >
    )
}
const styles = StyleSheet.create({
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
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    buttonTextView: {
        justifyContent: 'center',
        flex: 1
    },
    buttonText: {
        //justifyContent: 'center',
        alignSelf: 'center',
        //alignContent: 'center',
        fontSize: 12
    },
    icon: {
        //flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        marginLeft: 12,
    },
    orView: {
        flexDirection: 'row',
        //backgroundColor: 'green',
        width: (width * 85) / 100,
        justifyContent: 'space-evenly',
        height: 20,
        alignSelf: 'center'
    },
    line: {
        height: 0.5,
        width: (width / 2) - 50,
        backgroundColor: 'grey',
        alignSelf: 'center',
    },
    buttonView: {
        alignSelf: 'center',
        marginTop: 15,
        height: (height * 25) / 100,
        justifyContent: 'space-evenly'
    }
})
export default SocialLogin
