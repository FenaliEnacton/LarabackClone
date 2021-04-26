import React from 'react'
import { View, Text, ScrollView, TextInput, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <ImageBackground source={require("../../Images/Login.jpg")} style={{ flex: 1, width: width, height: height, }}>
            <View style={styles.searchView}>
                <View style={styles.searchBar}>
                    <TouchableOpacity style={styles.searchIcon}>
                        <Icon name={'search1'} size={20} color={'white'} />
                    </TouchableOpacity>
                    <TextInput style={{ flex: 1 }}
                        placeholder='Search for black brands and products'
                        placeholderTextColor='grey' />
                    <TouchableOpacity style={[styles.searchIcon]}>
                        <Icon name={'close'} size={20} color={'white'} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.popularBrandView}>
                    <View style={[styles.productHeading]}>
                        <Text style={{ color: 'white', fontWeight: '700' }}>Most Popular Brands</Text>
                        <TouchableOpacity style={{ borderBottomColor: 'white', borderBottomWidth: 1 }}>
                            <Text style={{ color: 'white' }}>View All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.popularBrandIconView}>
                        <FlatList
                            data={data}
                            keyExtractor={(item, index) => index.toString()}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{ justifyContent: 'center' }}>
                                        <TouchableOpacity style={styles.popularBrandIcon}>

                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginHorizontal: (width * 4) / 100 }}>
                    <Text style={{ color: 'white', fontWeight: '700' }}>Browse Categories</Text>
                </View>

                <View style={{ marginTop: 20, marginHorizontal: (width * 4) / 100, flex: 1 }}>
                    <FlatList
                        data={data}
                        nestedScrollEnabled={true}
                        // style={{ height: 350 }}
                        scrollEventThrottle={16}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={2}
                        renderItem={({ item, index }) => {
                            //console.log("Index:", index);
                            return (
                                <View >
                                    <View style={{ flexDirection: "row" }} >
                                        <View style={[styles.categoryCard]}>
                                            <Text style={{ textAlign: "center" }} >{index}</Text>
                                        </View>
                                        <View style={{ padding: (width * 2) / 100 }}></View>
                                    </View>
                                    {/* {
                                    index == (data.length - 1) ? <View style={{ height: 60 }} ></View> : null
                                } */}
                                </View>
                            )
                        }}
                    />
                </View>

                <View style={{ height: 60, width: width }}></View>
            </ScrollView>
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    searchView: {
        height: 90,
        width: width,
        backgroundColor: 'rgba(40, 40, 40, 0.8)',
        justifyContent: 'flex-end'
    },
    searchBar: {
        height: (height * 9) / 100,
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        width: 50,
        alignItems: 'center'
    },
    popularBrandView: {
        height: 190,
        justifyContent: 'center',
        //backgroundColor: 'green'
    },
    productHeading: {
        flexDirection: 'row',
        //backgroundColor: 'pink',
        justifyContent: 'space-between',
        marginHorizontal: (width * 4) / 100
    },
    popularBrandIconView: {
        height: 100,
        width: width,
        marginLeft: (width * 4) / 100,

    },
    popularBrandIcon: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'pink',
        marginRight: 15
    },
    categoryCard: {
        height: 75,
        width: (width * 44) / 100,
        backgroundColor: 'white',
        marginBottom: (width * 4) / 100,
        borderRadius: 10,
        justifyContent: "space-evenly",
    }
})
export default index
