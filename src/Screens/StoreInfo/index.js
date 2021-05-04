import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { AppImages } from '@assets/Images';
import Icon from 'react-native-vector-icons/AntDesign';
import IconLike from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const StoreInfo = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5]
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: 'black' }}>
                <ImageBackground source={AppImages.cookieBg} style={styles.brandimg} resizeMode='cover'>
                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['rgba(50, 50, 50,0.1)', 'rgba(35,38,36,100)']} style={styles.fadedStyle} locations={[0, 0.60]}>

                        <View style={styles.header}>
                            <TouchableOpacity style={styles.iconView} onPress={() => navigation.navigate('Search')}>
                                <Icon name='close' size={15} color='white' />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconView}>
                                <IconLike name='heart-outlined' size={15} color='white' />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: (height * 20) / 100, alignItems: 'center' }}>
                            <Image source={AppImages.cookieLogo} style={{ height: 80, width: 80, borderRadius: 40 }} />
                            <Text style={styles.storeTitle}>Partake Cookies</Text>
                            <Text style={styles.storeDesc}>for curly, coily & tight-textured hair. Black-owned & Black-centered. Celebrating our authentic beauty</Text>
                            <Text style={{ marginTop: 10 }}></Text>
                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00ff69', '#00ffda']} style={styles.buttons}>
                                <TouchableOpacity style={styles.buttons} >
                                    <Text style={styles.buttonText} >SHOP NOW</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                        </View>

                    </LinearGradient>
                </ImageBackground>
                <View style={[styles.productHeading, { marginTop: 80 }]}>
                    <Text style={{ color: 'white', fontWeight: '700' }}>Hair products for black women</Text>
                    <TouchableOpacity style={{ borderBottomColor: 'white', borderBottomWidth: 1 }}>
                        <Text style={{ color: 'white' }}>View All</Text>
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
                                    <View style={styles.productCard}>
                                        <Image source={AppImages.homeProduct} style={[styles.midImg, { borderRadius: 15 }]} />
                                    </View>
                                    <TouchableOpacity onPress={() => console.log("object")} style={{ marginVertical: 8 }}>
                                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00ff69', '#00ffda']} style={styles.cashbackButtons}>
                                            <Text style={styles.CBbuttonText} >10% Cash Back</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={styles.text}>Title</Text>
                                        <Text style={styles.text}>Description</Text>
                                        <Text style={styles.text}>Price</Text>
                                    </View>
                                </View>

                            )
                        }}
                    />
                </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    brandimg: {
        height: (height * 50) / 100,
        width: width,
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: width,
        paddingHorizontal: 10
    },
    fadedStyle: {
        height: (height * 70) / 100,
        width: width,
    },
    storeTitle: {
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    iconView: {
        backgroundColor: 'rgb(50,50,50)',
        borderRadius: 10,
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    storeDesc: {
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        width: (width * 85) / 100
    },
    buttons: {
        alignSelf: "center",
        height: 45,
        width: (width * 40) / 100,
        borderRadius: 30,
        justifyContent: "center"
    },
    buttonText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "700"
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
        backgroundColor: 'white',
        marginRight: 10
    },
    midImg: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(60,60,60)',
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
        color: 'white',
        fontWeight: 'bold'
    },
})
export default StoreInfo
