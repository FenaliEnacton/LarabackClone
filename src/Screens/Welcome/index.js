import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import LinearButton from '../../Components/Core/LinearButton'
import { AppImages } from '@assets/Images';
import { translate } from '@translations';
import { Theme } from '@assets/Theme';
import FirstLogo from './FirstLogo'
import { onBoardingData } from '@assets/AppDataConfig';
import Swiper from 'react-native-swiper';
import ThirdLogo from './ThirdLogo'
import FourthLogo from './FourthLogo';

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
                                {e.headerIcon == 3 ? <ThirdLogo /> : null}
                                {e.headerIcon == 4 ? <FourthLogo /> : null}
                            </View>
                            <View style={{ marginBottom: 80 }}>
                                <View style={{ height: 80, justifyContent: 'flex-end' }}>
                                    <Text style={styles.titleText}>{e.title}</Text>
                                </View>
                                <Text style={styles.descText}>{e.desc}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: "space-evenly" }} >
                            <LinearButton onPress={() => navigation.navigate('SocialLogin')} >
                                <Text style={styles.buttonText} >{translate('getStarted')}</Text>
                            </LinearButton>
                            <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Login')}>
                                <Text style={[styles.buttonText, { color: 'white' }]} >{translate('login')}</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                );
            })}
        </Swiper>


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
        ...Theme.fontStyles.h1Bold,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: Theme.COLORS.primary,
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
