import React, { useState } from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import LoginHeader from '../../Components/loginHeader'
import { BlurView } from "@react-native-community/blur";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = ({ navigation }) => {
    const [icon, setIcon] = useState([]);
    const brandClickHandler = (id) => {
        setIcon((prev) => {
            return [
                ...prev,
                id
            ]
        })
    }

    const removeSelection = (id) => {
        setIcon((prev) => {
            return prev.filter(icon => icon != id);
        })
    }

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return (
        <ImageBackground source={require("../../Images/Login.jpg")} style={{ flex: 1, width: width, height: height, }}>
            <LoginHeader step={"STEP 2"} heading={"Select some of your favorite brands"} />
            <View style={styles.IconContainer}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => (index.toString())}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.IconBox}>
                                <TouchableOpacity style={styles.IconView} onPress={() => brandClickHandler(index)}>
                                    {icon.map((data) => {
                                        if (data == index)
                                            return <TouchableOpacity style={styles.tick} onPress={() => removeSelection(index)}>
                                                <Image source={require("../../Images/greentick.jpg")} style={styles.imgTick} />
                                            </TouchableOpacity>
                                    })}
                                </TouchableOpacity>
                                <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>The marathon clothing</Text>
                            </View>
                        )
                    }}
                />
            </View>
            {/* <View style={styles.BlurNavBar}></View> */}
            <BlurView
                style={styles.BlurNavBar}
                overlayColor=""
                blurType="light"
                blurAmount={5}
                reducedTransparencyFallbackColor="white"
            />
            <View style={styles.navBar}>
                <TouchableOpacity style={[styles.buttons, { backgroundColor: '#dce6e1' }]} onPress={() => navigation.navigate('Success')} >
                    <Text style={styles.buttonText} >CONTINUE</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.skipView} >
                    <Text style={[styles.buttonText, { color: 'white' }]} >SKIP</Text>
                </TouchableOpacity>
            </View>
            {/* </BlurView> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    IconContainer: {
        marginTop: 22,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    IconBox: {
        height: 120,
        width: 100,
        //backgroundColor: 'pink',
        marginHorizontal: 3,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    IconView: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'white',

    },
    tick: {
        // backgroundColor: '#000000AA',
        height: 80,
        width: 80,
        borderRadius: 40,
        justifyContent: 'center'
    },
    imgTick: {
        height: 60,
        width: 60,
        //resizeMode: 'contain',
        borderRadius: 40,
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    BlurNavBar: {
        height: (height * 13) / 100,
        width: width,
        backgroundColor: 'rgba(40, 40, 40, 0.8)',
        position: 'absolute',
        bottom: 0,
        //opacity: 0.8
    },
    navBar: {
        height: (height * 13) / 100,
        width: width,
        position: 'absolute',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        bottom: 0,
    },
    buttons: {
        alignSelf: "center",
        height: (height * 6) / 100,
        width: (width * 80) / 100,
        borderRadius: 30,
        justifyContent: "center"
    },
    buttonText: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: "700"
    },
    skipView: {
        height: 20,
        width: 60,
        //backgroundColor: 'pink',
        justifyContent: 'center'
    }
})
export default index
