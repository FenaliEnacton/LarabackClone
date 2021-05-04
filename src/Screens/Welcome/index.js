import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import LinearButton from '../../Components/LinearButton'
import Button from '../../Components/Button'
import { AppImages } from '@assets/Images';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const Welcome = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return (
        // <View style={{ flex: 1, backgroundColor: "blue" }} >
        <ImageBackground style={{
            flex: 1, width: width, height: height,
            backgroundColor: "rgb(50,50,50)"
        }}
            imageStyle={{ opacity: 0.5 }}
            source={AppImages.welcome1} >

            <View style={{ flex: 4, justifyContent: "space-evenly", marginTop: 100 }} >
                <View style={{ height: 180, width: width, justifyContent: "center" }} >
                    <FlatList
                        data={data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item, index) => (index.toString())}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{}}  >
                                    <View style={{ flexDirection: "row" }} >
                                        {index == 0 ? <View style={{ marginLeft: 20 }} ></View> : null}
                                        <View style={{ marginLeft: 20, height: 50, width: 50, borderRadius: 50, backgroundColor: 'white' }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }} >
                                        {index == 0 ? <View style={{ marginLeft: 20 }} ></View> : null}
                                        <View style={{ marginLeft: -20, height: 50, width: 50, borderRadius: 50, backgroundColor: 'white' }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }} >
                                        {index == 0 ? <View style={{ marginLeft: 20 }} ></View> : null}
                                        <View style={{ marginLeft: 20, height: 50, width: 50, borderRadius: 50, backgroundColor: 'white' }} ></View>
                                    </View>
                                </View>
                            )
                        }}
                    />

                </View>
                <View>
                    <Text style={{ textAlign: "center", fontWeight: '700', fontSize: 32, color: "white" }} >Shop black owned.</Text>
                    <Text style={{ textAlign: "center", fontWeight: '700', fontSize: 32, color: "white" }} >Get rewarded.</Text>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "white", marginHorizontal: 50, marginTop: 7 }} >Earn point everytime you shop at our 100+</Text>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "white", marginHorizontal: 20 }} >Black Owned buissinesses - and get even more</Text>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "white", marginHorizontal: 50 }} >points with your special offers.</Text>
                </View>
                <View style={{ height: 100, width: width }}></View>
            </View>
            <View style={{ flex: 1, justifyContent: "space-evenly" }} >
                <LinearButton>
                    <Button onPress={() => navigation.navigate('SocialLogin')} >
                        <Text style={styles.buttonText} >GET STARTED</Text>
                    </Button>
                </LinearButton>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Home')}>
                    <Text style={[styles.buttonText, { color: 'white' }]} >LOG IN</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        // </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    buttons: {
        alignSelf: "center",
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 30,
        justifyContent: "center"
    },
    buttonText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: "700"
    }
})
