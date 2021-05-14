import React from 'react'
import { View, Text, ScrollView, TextInput, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Image, FlatList, Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme'
import { translate } from '@translations';
import { BgImage, ProductCard, BrandLogo } from '@components/generic'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <BgImage>
            <View style={styles.searchView}>
                <View style={styles.searchBar}>
                    <TouchableOpacity style={styles.searchIcon}>
                        <Icon name={'search1'} size={20} color={Theme.COLORS.white} />
                    </TouchableOpacity>
                    <TextInput style={{ flex: 1 }}
                        placeholder={translate('searchPlaceholder')}
                        placeholderTextColor={Theme.COLORS.grey} />
                    <TouchableOpacity style={[styles.searchIcon]} onPress={Keyboard.dismiss}>
                        <Icon name={'close'} size={20} color={Theme.COLORS.white} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* <ScrollView nestedScrollEnabled={true}> */}
            <View style={styles.popularBrandView}>
                <View style={[styles.productHeading]}>
                    <Text style={styles.whiteText}>{translate('popularBrand')}</Text>
                    <TouchableOpacity style={styles.viewAll}>
                        <Text style={{ color: Theme.COLORS.white }}>{translate('viewAll')}</Text>
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
                                <View style={styles.renderView}>
                                    <BrandLogo onPress={() => { navigation.navigate('StoreInfo') }}>
                                        <Image source={AppImages.cookieLogo} style={styles.popularBrandIcon} />
                                    </BrandLogo>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>

            <View style={styles.productHeading}>
                <Text style={styles.whiteText}>{translate('browseCategory')}</Text>
                <TouchableOpacity style={styles.viewAll}>
                    <Text style={{ color: Theme.COLORS.white }}>{translate('viewAll')}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.categoryView}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        //console.log("Index:", index);
                        return (
                            <View >
                                <View style={{ flexDirection: "row" }} >
                                    <TouchableOpacity style={[styles.categoryCard]} onPress={() => { navigation.navigate('CategoryDetails') }}>
                                        <ImageBackground borderRadius={10} source={AppImages.homeBrandLogo} style={styles.brandImg} >
                                            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                                colors={[Theme.COLORS_SET[2][index % Theme.COLORS_SET[2].length], Theme.COLORS_SET[4][index % Theme.COLORS_SET[4].length]]}
                                                style={[styles.categoryCard, { position: 'absolute', opacity: 0.6 }]}>
                                            </LinearGradient>
                                            <Text>Hair Care</Text>
                                        </ImageBackground>
                                    </TouchableOpacity>
                                    <View style={{ padding: (width * 2) / 100 }}></View>
                                </View>
                                {data.length - 1 == index ? <View style={{ height: 60, width: width }}></View> : null}
                            </View>
                        )
                    }}
                />
            </View>

        </BgImage>
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
    whiteText: {
        ...Theme.fontStyles.h3Bold,
        color: Theme.COLORS.white
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
    viewAll: {
        borderBottomColor: Theme.COLORS.white,
        borderBottomWidth: 1
    },
    productHeading: {
        flexDirection: 'row',
        //backgroundColor: 'pink',
        justifyContent: 'space-between',
        marginHorizontal: (width * 4) / 100
    },
    renderView: {
        justifyContent: 'center',
        marginRight: 15
    },
    popularBrandIconView: {
        height: 100,
        width: width,
        marginLeft: (width * 4) / 100,

    },
    popularBrandIcon: {
        height: '100%',
        width: '100%',
        borderRadius: 40,
        // backgroundColor: 'pink',
        // marginRight: 15
    },
    categoryView: {
        marginTop: 20,
        marginHorizontal: (width * 4) / 100,
        flex: 1
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
