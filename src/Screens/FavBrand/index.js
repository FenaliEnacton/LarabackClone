import React, { useState } from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import LoginHeader from '../../Components/loginHeader'
import { BlurView } from "@react-native-community/blur";
import Icon from 'react-native-vector-icons/Feather';
import LinearButton from '../../Components/LinearButton'
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';
import LinearGradient from 'react-native-linear-gradient';

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
            {/* <ScrollView removeClippedSubviews={false}> */}
            <View style={styles.IconContainer}>
                <FlatList
                    data={data}
                    style={{ flex: 1 }}
                    //nestedScrollEnabled
                    keyExtractor={(item, index) => (index.toString())}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.IconBox}>
                                <TouchableOpacity style={styles.IconView} onPress={() => brandClickHandler(index)}>
                                    {icon.map((data, i) => {
                                        if (data == index)
                                            return <TouchableOpacity style={styles.tick} key={() => i.toString()}>
                                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4BD95A', '#4AADD7']} style={styles.imgTick}>
                                                    <Icon name='check' size={15} />
                                                </LinearGradient>
                                                <TouchableOpacity style={styles.IconView} onPress={() => removeSelection(index)}></TouchableOpacity>
                                            </TouchableOpacity>
                                    })}
                                </TouchableOpacity>
                                <Text style={styles.brandNameText}>The marathon clothing</Text>
                            </View>
                        )
                    }}
                />
                <View style={{ height: 90, width: width }}></View>
            </View>
            {/* </ScrollView> */}
            {/* <View style={styles.BlurNavBar}></View> */}
            <BlurView
                style={styles.BlurNavBar}
                overlayColor=""
                blurType="light"
                blurAmount={5}
                reducedTransparencyFallbackColor={Theme.COLORS.white}
            />
            <View style={styles.navBar}>
                <LinearButton onPress={() => navigation.navigate('Success')} notActive={icon == '' ? true : false}>
                    <Text style={styles.buttonText} >CONTINUE</Text>
                </LinearButton>

                <TouchableOpacity style={styles.skipView} >
                    <Text style={[styles.buttonText, { color: Theme.COLORS.white }]} >SKIP</Text>
                </TouchableOpacity>
            </View>
            {/* </BlurView> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    IconContainer: {
        marginTop: 22,
        alignItems: 'center',
        //height: height,
        flex: 1,
        // backgroundColor: 'pink',
        width: (width * 90) / 100,
        alignSelf: 'center',
        // position: 'absolute'
    },
    IconBox: {
        //height: 115,
        width: 100,
        marginVertical: 8,
        alignItems: 'center',
        // backgroundColor: 'yellow',
        marginHorizontal: (width * 1) / 100
        //justifyContent: 'space-between'
    },
    brandNameText: {
        color: Theme.COLORS.white,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 13
    },
    IconView: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: Theme.COLORS.white,
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
        backgroundColor: Theme.COLORS.white,
        borderColor: 'red',
        borderWidth: 2.5,
        padding: 10
    },
    imgTick: {
        position: 'absolute',
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.white,
        left: 0,
        top: 5,
        zIndex: 99,
        justifyContent: 'center',
        alignItems: 'center'
    },
    BlurNavBar: {
        height: 90,
        width: width,
        backgroundColor: Theme.COLORS.blur_transparent,
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
