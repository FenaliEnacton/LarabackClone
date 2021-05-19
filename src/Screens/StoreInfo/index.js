import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { AppImages } from '@assets/Images';
import LinearButton from '../../Components/LinearButton';
import { Theme } from '@assets/Theme';
import Icon from 'react-native-vector-icons/AntDesign';
import IconLike from 'react-native-vector-icons/Entypo';
import { translate } from '@translations';
import { ProductCard } from '@components/generic'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const StoreInfo = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5]
    return (
        <ScrollView style={{ backgroundColor: 'black' }}>
            <View style={{ height: 450, backgroundColor: 'rgba(36,38,36,100)' }}>
                <ImageBackground source={AppImages.cookieBg} style={styles.brandimg} resizeMode='cover'>
                    <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
                        colors={['rgba(21, 21, 21, 0)', 'rgba(21, 21, 21, 0.5)', ' rgba(21, 21, 21, 0.813433)', 'rgba(36,38,36,100)']}
                        style={styles.fadedStyle} >

                        <View style={styles.header}>
                            <TouchableOpacity style={styles.iconView} onPress={() => navigation.goBack()}>
                                <Icon name='close' size={15} color={Theme.COLORS.white} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconView}>
                                <IconLike name='heart-outlined' size={15} color={Theme.COLORS.white} />
                            </TouchableOpacity>
                        </View>

                    </LinearGradient>
                </ImageBackground>
                <View style={styles.storeDetails}>
                    <Image source={AppImages.cookieLogo} style={styles.logo} />
                    <Text style={styles.storeTitle}>Partake Cookies</Text>
                    <Text style={styles.storeDesc}>for curly, coily & tight-textured hair. Black-owned & Black-centered. Celebrating our authentic beauty</Text>
                    <View style={styles.cbCoinView}></View>
                    <LinearButton style={styles.buttons} >
                        <Text style={styles.buttonText} >{translate('shopNow')}</Text>
                    </LinearButton>
                </View>
            </View>

            <View style={[styles.productHeading, { marginTop: -50 }]}>
                <Text style={styles.whiteText}>{translate('popularBrand')}</Text>
                <TouchableOpacity style={styles.viewAll} >
                    <Text style={{ color: Theme.COLORS.white }}>{translate('viewAll')}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.productView}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    renderItem={({ item, index }) => {
                        return (
                            <View >
                                <ProductCard></ProductCard>
                            </View>

                        )
                    }}
                />
            </View>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    brandimg: {
        height: 200,
        width: width,
    },
    fadedStyle: {
        height: 200,
        width: width,
    },
    logo: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    whiteText: {
        ...Theme.fontStyles.h3Regular,
        color: Theme.COLORS.white
    },
    viewAll: {
        borderBottomColor: Theme.COLORS.white,
        borderBottomWidth: 1
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: width,
        paddingHorizontal: 10
    },
    storeDetails: {
        marginTop: 130,
        alignItems: 'center',
        position: 'absolute',
        alignSelf: 'center'
    },
    storeTitle: {
        ...Theme.fontStyles.h1Bold,
        marginTop: 10,
        fontSize: 20,
        color: Theme.COLORS.white
    },
    iconView: {
        backgroundColor: Theme.COLORS.bg_transparent,
        borderRadius: 10,
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    storeDesc: {
        ...Theme.fontStyles.h3Regular,
        color: Theme.COLORS.white,
        marginTop: 7,
        textAlign: 'center',
        width: (width * 85) / 100
    },
    buttons: {
        alignSelf: "center",
        height: 45,
        width: (width * 40) / 100,
        borderRadius: 30,
        justifyContent: "center",
        marginTop: 15
    },
    cbCoinView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonText: {
        ...Theme.fontStyles.h3Bold,
        textAlign: "center",
    },
    productHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: (width * 4) / 100
    },
    productView: {
        height: 260,
        width: width,
        marginTop: 10,
        marginLeft: (width * 4) / 100,
        //backgroundColor: 'green',

    },
    productCard: {
        height: 150,
        width: (width * 37) / 100,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.white,
        marginRight: 10
    },
    midImg: {
        height: '100%',
        width: '100%',
        backgroundColor: Theme.COLORS.bg_transparent,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cashbackButtons: {
        height: 17,
        width: 80,
        borderRadius: 5,
        justifyContent: "center",

    },
    CBbuttonText: {
        textAlign: "center",
        fontSize: 10,
        fontWeight: "700",
    },
    text: {
        color: Theme.COLORS.white,
        fontWeight: 'bold'
    },
})
export default StoreInfo
