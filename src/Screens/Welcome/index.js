import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import LinearButton from '../../Components/LinearButton'
import Button from '../../Components/Button'
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';
import FirstLogo from './FirstLogo'
import { onBoardingData } from '@assets/AppDataConfig';
import Swiper from 'react-native-swiper';
import SecondLogo from './SecondLogo';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const Welcome = ({ navigation }) => {
    // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return (
        <Swiper
            showsPagination={true}
            loop={false}
            dotStyle={styles.dot}
            paginationStyle={styles.paginationDot}
            activeDotStyle={styles.activeDot}>
            {onBoardingData.map((e, index) => {
                return (
                    <ImageBackground
                        style={{
                            flex: 1, width: width, height: height,
                            backgroundColor: Theme.COLORS.bg_transparent
                        }}
                        imageStyle={{ opacity: 0.5 }}
                        source={e.image}
                        key={index.toString()}>
                        <View style={{ flex: 6, justifyContent: 'flex-end' }}>
                            <View style={{ marginBottom: 40 }}>
                                {e.headerIcon == 1 ? <FirstLogo /> : null}
                                {e.headerIcon == 2 ? <SecondLogo /> : null}
                            </View>
                            <View style={{ marginBottom: 90 }}>
                                <Text style={styles.titleText}>{e.title}</Text>
                                <Text style={styles.descText}>{e.desc}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: "space-evenly" }} >
                            <LinearButton onPress={() => navigation.navigate('SocialLogin')} >
                                <Text style={styles.buttonText} >GET STARTED</Text>
                            </LinearButton>
                            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('FavBrand')}>
                                <Text style={[styles.buttonText, { color: 'white' }]} >LOG IN</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                );
            })}
        </Swiper>
        // <ImageBackground style={{
        //     flex: 1, width: width, height: height,
        //     backgroundColor: Theme.COLORS.bg_transparent
        // }}
        //     imageStyle={{ opacity: 0.5 }}
        //     source={AppImages.welcome1} >

        //     <View style={{ flex: 4, justifyContent: "space-evenly", marginTop: 100 }} >

        //     </View>
        //     <View style={{ flex: 1, justifyContent: "space-evenly" }} >
        //         <LinearButton>
        //             <Button onPress={() => navigation.navigate('SocialLogin')} >
        //                 <Text style={styles.buttonText} >GET STARTED</Text>
        //             </Button>
        //         </LinearButton>
        //         <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Login')}>
        //             <Text style={[styles.buttonText, { color: 'white' }]} >LOG IN</Text>
        //         </TouchableOpacity>
        //     </View>
        // </ImageBackground>

    )
}

export default Welcome

const styles = StyleSheet.create({
    buttons: {
        alignSelf: "center",
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 30,
        justifyContent: "center"
    },
    buttonText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "700"
    },
    paginationDot: {
        marginBottom: 90,
        //height: 5,
    },
    activeDot: {
        width: 17,
        height: 4,
        backgroundColor: '#4BD95A'
    },
    dot: {
        height: 4,
        //backgroundColor: Theme.COLORS.grey
    },
    titleText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Theme.COLORS.white,
        paddingHorizontal: 50
    },
    descText: {
        ...Theme.fontStyles.h2Bold,
        color: Theme.COLORS.white,
        textAlign: 'center',
        paddingHorizontal: 40,
        marginTop: 10
    }
})
