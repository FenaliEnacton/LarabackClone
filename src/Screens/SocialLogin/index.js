import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import LoginHeader from '../../Components/loginHeader'
import Icon from 'react-native-vector-icons/AntDesign';
import FbIcon from 'react-native-vector-icons/MaterialIcons';
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SocialLogin = ({ navigation }) => {
    return (
        // <View>
        <ImageBackground source={AppImages.app_bg} style={{ flex: 1, width: width, height: height, }}>
            <LoginHeader step={"STEP 1"} heading={"Create an account"} desc={"Create an account to continue!"} />

            <View style={styles.EmailView}>
                <TouchableOpacity style={styles.loginbutton} onPress={() => { navigation.navigate('SignUp') }}>
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
                <Text style={{ color: Theme.COLORS.grey, fontWeight: 'bold' }}>or</Text>
                <View style={styles.line}></View>
            </View>


            {/* <View style={styles.buttonView}> */}
            <TouchableOpacity style={[styles.loginbutton, { backgroundColor: Theme.COLORS.black, borderWidth: 1, borderColor: Theme.COLORS.grey }]}>
                <View style={styles.icon} >
                    <Icon name="apple1" size={17} color={Theme.COLORS.white} />
                </View>
                <View style={styles.buttonTextView}>
                    <Text style={[styles.buttonText, { color: Theme.COLORS.white }]}>Continue with Apple</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.loginbutton, { backgroundColor: Theme.COLORS.facebook }]}>
                <View style={styles.icon} >
                    <FbIcon name="facebook" size={20} color="white" />
                </View>
                <View style={styles.buttonTextView}>
                    <Text style={[styles.buttonText, { color: Theme.COLORS.white }]}>Continue with Facebook</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginbutton}>
                <View style={styles.icon} >
                    <Icon name="google" size={17} color={Theme.COLORS.black} />
                </View>
                <View style={styles.buttonTextView}>
                    <Text style={styles.buttonText}>Continue with Google</Text>
                </View>
            </TouchableOpacity>
            {/* </View> */}


            <View style={styles.alreadyAccountView}>
                <Text style={{ color: 'grey', fontSize: 12 }}>Already have an account ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={{ color: Theme.COLORS.white }}>Log in</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >
        //</View >
    )
}
const styles = StyleSheet.create({
    EmailView: {
        //height: (height * 15) / 100,
        // backgroundColor: 'pink',
        alignItems: 'center',
        marginVertical: 15
    },
    loginbutton: {
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 22,
        backgroundColor: Theme.COLORS.white,
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'center'
        //alignItems: 'center',
        //justifyContent: 'center'
    },
    buttonTextView: {
        justifyContent: 'center',
        flex: 1,
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
        backgroundColor: Theme.COLORS.grey,
        alignSelf: 'center',
    },
    buttonView: {
        alignSelf: 'center',
        marginTop: 15,
        //height: (height * 25) / 100,
        justifyContent: 'center',
        //backgroundColor: 'red'
    },
    alreadyAccountView: {
        alignSelf: 'center',
        height: 20,
        flexDirection: 'row',
        marginTop: 15
    }
})
export default SocialLogin
