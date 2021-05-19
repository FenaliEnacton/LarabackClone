import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import LoginHeader from '../../Components/loginHeader'
import { BlurView } from "@react-native-community/blur";
import { translate } from '@translations';
import { AppImages } from '@assets/Images';
import Icon from 'react-native-vector-icons/Feather';
import LinearButton from '../../Components/LinearButton'
import { Theme } from '@assets/Theme';
import { BgImage, BrandLogo } from '@components/generic'
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
    const handleContinue = () => {
        if (icon != '') {
            navigation.navigate('Success')
        }
    }
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return (
        <BgImage>
            <LoginHeader step={"STEP 2"} heading={translate('favoriteBrand')} />
            <View style={styles.IconContainer}>
                <FlatList
                    data={data}
                    style={{ flex: 1 }}
                    keyExtractor={(item, index) => (index.toString())}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.IconBox}>
                                <BrandLogo onPress={() => brandClickHandler(index)}>
                                    <Image source={AppImages.melaLogo} style={styles.popularBrandIcon} />
                                    {icon.map((data, i) => {
                                        if (data == index)
                                            return <TouchableOpacity style={styles.tick} key={() => i.toString()}>
                                                {/* <Image source={AppImages.cookieLogo} style={styles.popularBrandIcon} /> */}
                                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#4BD95A', '#49EACD']} style={styles.imgTick}>
                                                    <Icon name='check' size={15} />
                                                </LinearGradient>
                                                <BrandLogo onPress={() => removeSelection(index)}>
                                                    <Image source={AppImages.melaLogo} style={styles.popularBrandIcon} />
                                                </BrandLogo>
                                            </TouchableOpacity>
                                    })}
                                </BrandLogo>
                                <Text style={styles.brandNameText}>The marathon clothing</Text>
                                {data.length - 1 == index ? <View style={{ height: 90, width: width }}></View> : null}
                            </View>
                        )
                    }}
                />
            </View>
            <BlurView
                style={styles.BlurNavBar}
                overlayColor=""
                blurType="light"
                blurAmount={5}
                reducedTransparencyFallbackColor={Theme.COLORS.white}
            />
            <View style={styles.navBar}>
                <LinearButton onPress={() => handleContinue()} notActive={icon == '' ? true : false}>
                    <Text style={styles.buttonText} >{translate('continue')}</Text>
                </LinearButton>

                <TouchableOpacity style={styles.skipView} onPress={() => navigation.navigate('Success')}>
                    <Text style={[styles.buttonText, { color: Theme.COLORS.white }]} >{translate('skip')}</Text>
                </TouchableOpacity>
            </View>

        </BgImage>
    )
}

const styles = StyleSheet.create({
    IconContainer: {
        marginTop: 22,
        alignItems: 'center',
        flex: 1,
        width: (width * 90) / 100,
        alignSelf: 'center',
    },
    IconBox: {
        width: 100,
        marginVertical: 8,
        alignItems: 'center',
        //backgroundColor: 'pink',
        marginHorizontal: (width * 1) / 100
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
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        position: 'absolute',
        backgroundColor: Theme.COLORS.blur_transparent,
        borderColor: 'red',
        borderWidth: 2.5,
        padding: 10,
        marginTop: -5
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
    popularBrandIcon: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
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
        ...Theme.fontStyles.h3Bold,
        textAlign: "center",
    },
    skipView: {
        height: 20,
        width: 60,
        justifyContent: 'center',
        marginBottom: 7
    }
})
export default index
