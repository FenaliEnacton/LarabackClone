import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Touchable, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import LottieView from 'lottie-react-native';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = ({ navigation }) => {
    return (
        <ImageBackground source={require("../../Images/Login.jpg")} style={{ flex: 1, width: width, height: height, }}>

            <View style={styles.container}>
                <View style={{ transform: [{ rotate: "180deg" }], alignItems: 'center' }}>

                    <LottieView source={require('../../Images/animation.json')} autoPlay loop={false} style={{ height: 500, width: 500, position: 'absolute', marginTop: -50 }} />
                </View>
                <TouchableOpacity style={styles.coin}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 23 }}>+200</Text>
                    <Icon name="comment-dollar" size={23} color="#ffc107" />
                </TouchableOpacity>
                <Text style={styles.successText}>You're all set!</Text>
                <Text style={{ color: 'white', textAlign: 'center', marginHorizontal: 45, marginTop: 5 }}>Congratulations! By completing your profile you have received <Text style={{ fontWeight: 'bold', color: 'white' }}>200 soul'd coins</Text></Text>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} >
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00ff69', '#00ffda']} style={styles.buttons}>
                        <Text style={styles.buttonText} >CONTINUE</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ color: 'white', fontSize: 12, marginTop: 15 }}>What are Soul'd Coins ?</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'pink'
    },
    coin: {
        height: 48,
        width: 110,
        borderRadius: 25,
        backgroundColor: 'rgba(30, 30, 30, 0.9)',
        borderColor: 'grey',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    successText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 15
    },
    buttons: {
        alignSelf: "center",
        height: (height * 6) / 100,
        width: (width * 75) / 100,
        borderRadius: 30,
        justifyContent: "center",
        marginTop: 30
    },
    buttonText: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "700"
    },
})
export default index
