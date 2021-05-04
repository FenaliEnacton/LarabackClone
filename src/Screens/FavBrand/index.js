import React, { useState } from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import LoginHeader from '../../Components/loginHeader'
import { BlurView } from "@react-native-community/blur";
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../Components/Button'
import LinearButton from '../../Components/LinearButton'
import { AppImages } from '@assets/Images';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = ({ navigation }) => {
    const [icon, setIcon] = useState([]);
    const brandClickHandler = (id) => {
        console.log("id :", id)
        setIcon((prev) => {
            return [
                ...prev,
                id
            ]
        })
        console.log("icon :", icon)
    }

    const removeSelection = (id) => {
        setIcon((prev) => {
            return prev.filter(icon => icon != id);
        })
    }

    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return (
        <ImageBackground source={AppImages.app_bg} style={{ flex: 1, width: width, height: height, }}>
            <LoginHeader step={"STEP 2"} heading={"Select some of your favorite brands"} />
            <ScrollView removeClippedSubviews={false}>
                <View style={styles.IconContainer}>
                    <FlatList
                        data={data}
                        nestedScrollEnabled
                        keyExtractor={(item, index) => (index.toString())}
                        numColumns={3}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.IconBox}>
                                    <TouchableOpacity style={styles.IconView} onPress={() => brandClickHandler(index)}>
                                        {icon.map((data, i) => {
                                            if (data == index)
                                                return <TouchableOpacity style={styles.tick} key={() => i.toString()}>
                                                    <LinearButton style={styles.imgTick}>
                                                        <Icon name='check' size={15} />
                                                    </LinearButton>
                                                    <TouchableOpacity style={styles.IconView} onPress={() => removeSelection(index)}></TouchableOpacity>
                                                </TouchableOpacity>
                                        })}
                                    </TouchableOpacity>
                                    <Text style={styles.brandNameText}>The marathon clothing</Text>
                                </View>
                            )
                        }}
                    />
                    <View style={{ height: 80, width: width }}></View>
                </View>
            </ScrollView>
            {/* <View style={styles.BlurNavBar}></View> */}
            <BlurView
                style={styles.BlurNavBar}
                overlayColor=""
                blurType="light"
                blurAmount={5}
                reducedTransparencyFallbackColor="white"
            />
            <View style={styles.navBar}>
                {icon != '' ?
                    <LinearButton >
                        <Button onPress={() => navigation.navigate('Success')} >
                            <Text style={styles.buttonText} >CONTINUE</Text>
                        </Button>
                    </LinearButton>
                    :
                    <Button style={{ backgroundColor: '#dce6e1' }} >
                        <Text style={styles.buttonText} >CONTINUE</Text>
                        <Text>should select atleast one brand</Text>
                    </Button>
                }
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
        //justifyContent: 'space-evenly',
        alignItems: 'center',
        height: height,
        //backgroundColor: 'pink'
    },
    IconBox: {
        //height: 115,
        width: 100,
        //backgroundColor: 'yellow',
        marginHorizontal: (width * 2) / 100,
        marginVertical: 8,
        alignItems: 'center',
        //justifyContent: 'space-between'
    },
    brandNameText: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 13
    },
    IconView: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'white',
        alignSelf: 'center'

    },
    tick: {
        height: 90,
        width: 90,
        borderRadius: 45,
        //position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        backgroundColor: 'black',
        borderColor: 'red',
        borderWidth: 2.5,
        padding: 10
    },
    imgTick: {
        position: 'absolute',
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        left: 0,
        top: 5,
        zIndex: 99,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BlurNavBar: {
        height: 90,
        width: width,
        backgroundColor: 'rgba(40, 40, 40, 0.8)',
        position: 'absolute',
        bottom: 0,
        //opacity: 0.8
    },
    navBar: {
        height: 90,
        width: width,
        position: 'absolute',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        //backgroundColor: 'rgba(40, 40, 40, 0.9)',
        bottom: 0,
    },
    buttons: {
        alignSelf: "center",
        height: (height * 6) / 100,
        width: (width * 80) / 100,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: 'center'
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
