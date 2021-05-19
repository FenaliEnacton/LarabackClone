import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Image, FlatList, Keyboard } from 'react-native'
import {
    Header,
    HeaderLeft,
    ScrollContent
} from '@components/core'
import Icon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme'
import { translate } from '@translations';
import { BgImage } from '@components/generic'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const AllCategory = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    return (
        <BgImage>
            <Header>
                <HeaderLeft onPress={() => { navigation.goBack() }}>
                    <Icon name={'left'} size={17} color={Theme.COLORS.white} />
                </HeaderLeft>
                <Text style={styles.titleText}>{translate('allBrands')}</Text>
            </Header>
            <View style={styles.container}>
                <FlatList
                    data={data}
                    style={{ height: height - 80 }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        //console.log("Index:", index);
                        return (
                            <View >
                                <TouchableOpacity style={[styles.categoryCard,
                                index % 2 == 0 ? { marginRight: (width * 4) / 100 } : null
                                ]}
                                    onPress={() => { navigation.navigate('CategoryDetails') }}>
                                    <ImageBackground borderRadius={10} source={AppImages.homeBrandLogo} style={styles.brandImg} >
                                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                            colors={[Theme.COLORS_SET[2][index % Theme.COLORS_SET[2].length], Theme.COLORS_SET[4][index % Theme.COLORS_SET[4].length]]}
                                            style={[styles.categoryCard, { position: 'absolute', opacity: 0.6 }]}>
                                        </LinearGradient>
                                        <Text style={styles.categoryName}>Hair Care</Text>
                                    </ImageBackground>
                                </TouchableOpacity>

                                {/* {data.length - 1 == index ? <View style={{ height: 60, width: width }}></View> : null} */}
                            </View>
                        )
                    }}
                />
            </View>
        </BgImage>
    )
}
const styles = StyleSheet.create({
    titleText: {
        ...Theme.fontStyles.h2Regular,
        color: Theme.COLORS.white
    },
    container: {
        marginHorizontal: (width * 3) / 100,
        marginTop: 20
    },
    categoryCard: {
        height: 80,
        width: (width * 45) / 100,
        backgroundColor: Theme.COLORS.white,
        marginBottom: (width * 4) / 100,
        borderRadius: 10,
    },
    brandImg: {
        height: 80,
        width: (width * 45) / 100,
        marginBottom: (width * 4) / 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: Theme.COLORS.blur_transparent
    },
    categoryName: {
        ...Theme.fontStyles.h2Bold,
        color: Theme.COLORS.white
    }

})
export default AllCategory
