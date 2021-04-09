import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Touchable, Image, FlatList } from 'react-native'
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

                <TouchableOpacity style={styles.searchView}>
                    <View style={styles.searchIcon}>
                        <Icon name={'search1'} size={20} color={'white'} />
                    </View>
                    <Text style={{ color: 'grey' }}>Search for black brands and products</Text>
                </TouchableOpacity>

                <View style={styles.topBrandView}>
                    <FlatList
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{ justifyContent: 'center' }}>
                                    <TouchableOpacity style={styles.topBrand}>

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
            </View>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: (height * 3) / 100,
        marginHorizontal: (width * 4) / 100,
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
        height: 200,
        width: width,
        justifyContent: 'center',
        //backgroundColor: 'pink'
    },
    topBrand: {
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
        //alignSelf: "center",
        height: 16,
        width: 100,
        borderRadius: 5,
        justifyContent: "center",
        //marginTop: 30
    },
    buttonText: {
        textAlign: "center",
        fontSize: 10,
        fontWeight: "700"
    },
})
export default index
