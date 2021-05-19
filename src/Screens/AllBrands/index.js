import React from 'react'
import { View, Text, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Image, FlatList, Keyboard } from 'react-native'
import {
    Header,
    HeaderLeft,
    ScrollContent
} from '@components/core'
import Icon from 'react-native-vector-icons/AntDesign';
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme'
import { translate } from '@translations';
import { BgImage } from '@components/generic'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const AllBrands = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <BgImage>
            <Header>
                <HeaderLeft onPress={() => { navigation.goBack() }}>
                    <Icon name={'left'} size={17} color={Theme.COLORS.white} />
                </HeaderLeft>
                <Text style={styles.titleText}>{translate('allBrands')}</Text>
            </Header>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={data}
                    style={{ height: height - 80 }}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.itemContainer}>
                                <View style={styles.itemLogo}>
                                    <Image source={AppImages.cookieLogo} style={styles.itemLogo} />
                                </View>
                                <View style={styles.brandDesc}>
                                    <Text style={styles.brandNameText}>My Earnings</Text>
                                    <Text style={styles.cbText}>5% Cash Back</Text>
                                </View>
                                <TouchableOpacity style={styles.rightIconView}
                                    onPress={() => { navigation.navigate('StoreInfo') }}>
                                    <Icon name={'right'} size={17} color={Theme.COLORS.white} />
                                </TouchableOpacity>
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
    itemContainer: {
        width: (width * 93) / 100,
        // height: 100,
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        //backgroundColor: 'red',
        alignItems: 'center'
    },
    itemLogo: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        marginRight: 10
    },
    brandDesc: {
        justifyContent: 'center',
        //backgroundColor: 'red',
        flex: 6
    },
    brandNameText: {
        ...Theme.fontStyles.h2Regular,
        color: Theme.COLORS.white
    },
    cbText: {
        ...Theme.fontStyles.h5Regular,
        color: Theme.COLORS.primary,
        marginTop: 3
    },
    rightIconView: {
        flex: 1,
        alignItems: 'flex-end',
    }
})
export default AllBrands
