import React from 'react'
import { View, Text, ScrollView, TextInput, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <ImageBackground source={AppImages.app_bg} style={{ flex: 1, width: width, height: height, }}>
            <View style={styles.searchView}>
                <View style={styles.searchBar}>
                    <TouchableOpacity style={styles.searchIcon}>
                        <Icon name={'search1'} size={20} color={Theme.COLORS.white} />
                    </TouchableOpacity>
                    <TextInput style={{ flex: 1 }}
                        placeholder='Search for black brands and products'
                        placeholderTextColor={Theme.COLORS.grey} />
                    <TouchableOpacity style={[styles.searchIcon]}>
                        <Icon name={'close'} size={20} color={Theme.COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView nestedScrollEnabled={true}>
                <View style={styles.popularBrandView}>
                    <View style={[styles.productHeading]}>
                        <Text style={{ color: Theme.COLORS.white, fontWeight: '700' }}>Most Popular Brands</Text>
                        <TouchableOpacity style={{ borderBottomColor: Theme.COLORS.white, borderBottomWidth: 1 }}>
                            <Text style={{ color: Theme.COLORS.white }}>View All</Text>
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
                                        <TouchableOpacity style={styles.popularBrandIcon} onPress={() => { navigation.navigate('StoreInfo') }}>
                                            <Image source={AppImages.cookieLogo} style={styles.popularBrandIcon} />
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginHorizontal: (width * 4) / 100 }}>
                    <Text style={{ color: Theme.COLORS.white, fontWeight: '700' }}>Browse Categories</Text>
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
                                        <TouchableOpacity style={[styles.categoryCard]} onPress={() => { navigation.navigate('CategoryDetails') }}>
                                            <ImageBackground borderRadius={10} source={AppImages.homeBrandLogo} style={styles.brandImg} >
                                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[Theme.COLORS_SET[2][index % Theme.COLORS_SET[2].length], Theme.COLORS_SET[4][index % Theme.COLORS_SET[4].length]]} style={[styles.categoryCard, { position: 'absolute', opacity: 0.6 }]}>
                                                </LinearGradient>
                                                <Text>Hair Care</Text>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                        <View style={{ padding: (width * 2) / 100 }}></View>
                                    </View>
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
        backgroundColor: Theme.COLORS.bg_grey,
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
        height: 150,
        justifyContent: 'center',
        //backgroundColor: 'green',
        marginTop: 10
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
        // backgroundColor: 'pink',
        marginRight: 15
    },
    categoryCard: {
        height: 75,
        width: (width * 44) / 100,
        backgroundColor: Theme.COLORS.white,
        marginBottom: (width * 4) / 100,
        borderRadius: 10,
    },
    brandImg: {
        height: 75,
        width: (width * 44) / 100,
        marginBottom: (width * 4) / 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    }
})
export default index
