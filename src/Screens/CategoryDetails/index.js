import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';
import Icon from 'react-native-vector-icons/AntDesign';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const CategoryDetails = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    return (
        // <ScrollView>
        <View style={{
            flex: 1,
            backgroundColor: 'rgba(35,38,36,100)'
        }}>
            <ImageBackground source={AppImages.category1} style={styles.catImg} resizeMode='cover'>
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={['rgba(21, 21, 21, 0)', 'rgba(21, 21, 21, 0.5)', ' rgba(21, 21, 21, 0.813433)', 'rgba(36,38,36,100)']}
                    style={styles.fadedView}
                >
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.cloaseIconView} onPress={() => navigation.navigate('Search')}>
                            <Icon name='close' size={15} color={Theme.COLORS.white} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 110, alignItems: 'center', marginHorizontal: 20 }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Hair Care</Text>
                        <Text style={{ color: Theme.COLORS.white, textAlign: 'center', marginTop: 5 }}>Find product to protect your crown, Save on hair care designed for and by the people</Text>
                    </View>
                </LinearGradient>
            </ImageBackground>

            <View style={styles.IconContainer}>
                <FlatList
                    data={data}
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => (index.toString())}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.IconBox}>
                                <TouchableOpacity style={styles.IconView} onPress={() => console.log(index)}>

                                </TouchableOpacity>
                                <Text style={styles.brandNameText}>The marathon clothing</Text>
                            </View>
                        )
                    }}
                />
                {/* <View style={{ height: 90, width: width }}></View> */}
            </View>
        </View>
        // </ScrollView>
    )
}
const styles = StyleSheet.create({
    catImg: {
        height: 200,
        width: width,
    },
    fadedView: {
        height: 200,
        width: width
    },
    header: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        width: width,
        paddingHorizontal: 10
    },
    cloaseIconView: {
        backgroundColor: Theme.COLORS.bg_transparent,
        borderRadius: 10,
        height: 20,
        width: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconContainer: {

        alignItems: 'center',
        //height: height,
        flex: 1,
        // backgroundColor: 'pink',
        width: (width * 90) / 100,
        alignSelf: 'center',
        // position: 'absolute'
    },
    IconBox: {
        //height: 115,
        width: 100,
        marginVertical: 8,
        alignItems: 'center',
        // backgroundColor: 'yellow',
        marginHorizontal: (width * 1) / 100
        //justifyContent: 'space-between'
    },
    brandNameText: {
        color: Theme.COLORS.white,
        fontSize: 12,
        textAlign: 'center',
        marginTop: 10
    },
    IconView: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: Theme.COLORS.white,
        alignSelf: 'center'

    },
})
export default CategoryDetails
