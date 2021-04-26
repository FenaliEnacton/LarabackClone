import React from 'react'
import { View, Text, ScrollView, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = () => {
    const data = [1, 2, 3, 4, 5]
    return (
        <ImageBackground source={require("../../Images/Login.jpg")} style={{ flex: 1, width: width, height: height, }}>
            <View style={styles.container}>

                <View style={styles.heading}>
                    <Text style={styles.text}>SOUL'D</Text>
                    <Text style={{ fontSize: 10, color: 'white' }}>REFER & EARN $20+</Text>
                </View>
                <View style={styles.searchView}>
                    <TouchableOpacity style={styles.searchBar}>
                        <View style={styles.searchIcon}>
                            <Icon name={'search1'} size={20} color={'white'} />
                        </View>
                        <Text style={{ color: 'grey' }}>Search for black brands and products</Text>
                    </TouchableOpacity>
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

                                            <Image source={require("../../Images/brandLogo.jpg")} style={styles.branImg} />

                                            <View style={styles.brandTextView}>
                                                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>RAYCON</Text>
                                                <Text style={{ fontSize: 13, color: 'grey' }}>Extra cashback on the new Performer Earbugs</Text>
                                                <TouchableOpacity onPress={() => console.log("object")} >
                                                    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00ff69', '#00ffda']} style={styles.buttons}>
                                                        <Text style={styles.buttonText} >10% Cash Back</Text>
                                                    </LinearGradient>
                                                </TouchableOpacity>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}

                        />
                    </View>

                    <View style={styles.midImgView}>
                        <ImageBackground source={require("../../Images/homeMid.jpg")} style={styles.midImg} imageStyle={{ opacity: 0.5 }}>
                            <Text style={[styles.text, { fontSize: 40, fontStyle: 'italic', marginLeft: -80 }]}>beautiful</Text>
                            <Text style={[styles.text, { fontSize: 40, fontStyle: 'italic', marginTop: -15, marginLeft: 60 }]}>roots</Text>
                        </ImageBackground>
                    </View>

                    <View style={[styles.productHeading, { marginTop: -60 }]}>
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
                                            <Image source={require("../../Images/productImg.jpg")} style={[styles.midImg, { borderRadius: 15 }]} />
                                        </View>
                                        <TouchableOpacity onPress={() => console.log("object")} style={{ marginVertical: 8 }}>
                                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00ff69', '#00ffda']} style={styles.buttons}>
                                                <Text style={styles.buttonText} >10% Cash Back</Text>
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

                    <View style={[styles.productHeading, { marginTop: 20 }]}>
                        <Text style={{ color: 'white', fontWeight: '700' }}>Most Popular Brands</Text>
                        <TouchableOpacity style={{ borderBottomColor: 'white', borderBottomWidth: 1 }}>
                            <Text style={{ color: 'white' }}>View All</Text>
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
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                    <Text>Hello</Text>
                </ScrollView>
            </View>

        </ImageBackground>
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
        color: 'white',
        fontWeight: 'bold'
    },
    searchView: {
        height: (height * 9) / 100,
    },
    searchBar: {
        height: (height * 5) / 100,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(40, 40, 40, 0.8)',
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        width: 40,
        alignItems: 'center'
    },
    topBrandView: {
        height: 150,
        marginBottom: 20,
        width: width,
        justifyContent: 'center',
        marginLeft: (width * 4) / 100
        //backgroundColor: 'pink'
    },
    topBrandCard: {
        height: 150,
        width: (width * 85) / 100,
        backgroundColor: 'white',
        borderRadius: 10,
        marginRight: 10,
        flexDirection: 'row'
    },
    branImg: {
        height: 150,
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
        backgroundColor: 'rgb(60,60,60)',
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
        backgroundColor: 'white',
        marginRight: 10
    },
    popularBrandView: {
        height: 100,
        width: width,
        marginLeft: (width * 4) / 100,
        marginTop: 15
    },
    popularBrandIcon: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'pink',
        marginRight: 15
    }
})
export default index
