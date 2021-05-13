import React from 'react'
import { View, Text, ScrollView, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Image, FlatList, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import LinearButton from '../../Components/LinearButton'
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Home = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5]
    return (
        <ImageBackground source={AppImages.app_bg} style={{ flex: 1, width: width, height: height, }}>
            <View style={styles.container}>

                <View style={styles.heading}>
                    <Text style={styles.text}>SOUL'D</Text>
                    <Text style={{ fontSize: 10, color: Theme.COLORS.white }}>REFER & EARN $20+</Text>
                </View>
                <View style={styles.searchView}>
                    <View style={styles.searchBar}>
                        <View style={styles.searchIcon}>
                            <Icon name={'search1'} size={20} color={Theme.COLORS.white} />
                        </View>
                        <TouchableOpacity onPress={() => { navigation.navigate('Search') }} style={{ color: Theme.COLORS.grey }}>
                            <Text style={{ color: Theme.COLORS.grey }}>Search for black brands and products</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.topBrandView}>
                        <FlatList
                            data={data}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ justifyContent: 'center' }}>
                                        <TouchableOpacity style={styles.topBrandCard}>

                                            <Image source={AppImages.homeBrandLogo} style={styles.branImg} />

                                            <View style={styles.brandTextView}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>RAYCON</Text>
                                                <Text style={{ fontSize: 13, color: Theme.COLORS.grey }}>Extra cashback on the new Performer Earbugs</Text>
                                                <LinearButton style={styles.buttons} onPress={() => console.log("object")}>
                                                    <Text style={styles.buttonText} >10% Cash Back</Text>
                                                </LinearButton>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}

                        />
                    </View>

                    <View style={styles.midImgView}>
                        <ImageBackground source={AppImages.homeMid} style={styles.midImg} imageStyle={{ opacity: 0.5 }}>
                            <Text style={[styles.text, { fontSize: 40, fontStyle: 'italic', marginLeft: -80 }]}>beautiful</Text>
                            <Text style={[styles.text, { fontSize: 40, fontStyle: 'italic', marginTop: -15, marginLeft: 60 }]}>roots</Text>
                        </ImageBackground>
                    </View>

                    <View style={[styles.productHeading, { marginTop: -60 }]}>
                        <Text style={{ color: Theme.COLORS.white, fontWeight: '700' }}>Hair products for black women</Text>
                        <TouchableOpacity style={{ borderBottomColor: Theme.COLORS.white, borderBottomWidth: 1 }}>
                            <Text style={{ color: Theme.COLORS.white }}>View All</Text>
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
                                            <LinearButton style={styles.buttons}>
                                                <Text style={styles.buttonText} >10% Cash Back</Text>
                                            </LinearButton>
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

                    <View style={{ backgroundColor: Theme.COLORS.bg_grey }}>
                        <View style={[styles.productHeading, { marginTop: 20 }]}>
                            <Text style={{ color: Theme.COLORS.white, fontWeight: '700' }}>Most Popular Brands</Text>
                            <TouchableOpacity style={{ borderBottomColor: Theme.COLORS.white, borderBottomWidth: 1 }}>
                                <Text style={{ color: Theme.COLORS.white }}>View All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.popularBrandView}>
                            <FlatList
                                data={data}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View>
                                            <TouchableOpacity style={styles.popularBrandIcon}>

                                            </TouchableOpacity>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                    </View>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                </ScrollView>
            </View>

        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: (height * 3) / 100,
        paddingHorizontal: (width * 4) / 100,
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'pink'
    },
    text: {
        color: Theme.COLORS.white,
        fontWeight: 'bold'
    },
    searchView: {
        height: (height * 9) / 100,
    },
    searchBar: {
        height: (height * 5) / 100,
        borderColor: Theme.COLORS.grey,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: Theme.COLORS.bg_grey,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        width: 40,
        alignItems: 'center'
    },
    topBrandView: {
        height: 130,
        marginBottom: 20,
        width: width,
        justifyContent: 'center',
        marginLeft: (width * 4) / 100,
        // backgroundColor: 'pink'
    },
    topBrandCard: {
        height: 130,
        width: (width * 80) / 100,
        backgroundColor: Theme.COLORS.white,
        borderRadius: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    branImg: {
        height: '100%',
        width: (width * 40) / 100,
        flex: 1.8,
        //resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    brandTextView: {
        flex: 2,
        justifyContent: 'space-evenly',
        marginHorizontal: 15,
        //backgroundColor: 'pink'
    },
    buttons: {
        height: 17,
        width: 80,
        borderRadius: 5,
        justifyContent: "center",
        alignSelf: 'flex-start'
    },
    buttonText: {
        textAlign: "center",
        fontSize: 10,
        fontWeight: "700",
    },
    midImgView: {
        height: 280,
        width: width,
    },
    midImg: {
        height: '100%',
        width: '100%',
        backgroundColor: Theme.COLORS.bg_transparent,
        justifyContent: 'center',
        alignItems: 'center',
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
    popularBrandView: {
        //height: 100,
        width: width,
        marginLeft: (width * 4) / 100,
        marginVertical: 20,
    },
    popularBrandIcon: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'pink',
        marginRight: 15
    }
})
export default Home
