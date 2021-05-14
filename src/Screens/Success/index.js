import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Touchable, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import LinearButton from '../../Components/LinearButton';
import { translate } from '@translations';
import { Theme } from '@assets/Theme';
import { BgImage } from '@components/generic'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = ({ navigation }) => {
    return (
        <BgImage>
            <View style={styles.container}>
                <View style={{ transform: [{ rotate: "180deg" }], alignItems: 'center' }}>
                    <LottieView source={require('../../Assets/Images/animation.json')}
                        autoPlay loop={false}
                        style={styles.animationStyle} />
                </View>
                <TouchableOpacity style={styles.coin}>
                    <Text style={styles.coinText}>+200</Text>
                    <Icon name="comment-dollar" size={23} color="#ffc107" />
                </TouchableOpacity>
                <Text style={styles.successText}>{translate('youAreAllSet')}</Text>
                <Text style={styles.confirmationText}>{translate('coinConfirmation')}
                    <Text style={styles.boldText}> 200 {translate('souldCoins')}</Text>
                </Text>
                <LinearButton style={{ marginTop: 30 }} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.buttonText} >{translate('continue')}</Text>
                </LinearButton>
                <TouchableOpacity>
                    <Text style={[styles.confirmationText, { marginTop: 15 }]}>{translate('whatSouldCoins')}</Text>
                </TouchableOpacity>
            </View>
        </BgImage>
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
    animationStyle: {
        height: 500,
        width: 500,
        position: 'absolute',
        marginTop: -50
    },
    coin: {
        height: 48,
        width: 110,
        borderRadius: 25,
        backgroundColor: 'rgba(30, 30, 30, 0.9)',
        borderColor: Theme.COLORS.grey,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    coinText: {
        ...Theme.fontStyles.h1Bold,
        color: Theme.COLORS.white,
        fontSize: 23
    },
    successText: {
        ...Theme.fontStyles.h1Bold,
        fontSize: 30,
        color: Theme.COLORS.white,
        marginTop: 15
    },
    confirmationText: {
        ...Theme.fontStyles.h3Regular,
        color: Theme.COLORS.white,
        textAlign: 'center',
        marginHorizontal: 45,
        marginTop: 5,
    },
    boldText: {
        ...Theme.COLORS.h2Bold,
        fontWeight: 'bold',
        color: Theme.COLORS.white
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
