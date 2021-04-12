import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, FlatList, TouchableOpacity } from 'react-native'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


const Intro = ({ navigation }) => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return (
        // <View style={{ flex: 1, backgroundColor: "blue" }} >
        <ImageBackground blurRadius={5} style={{ flex: 1, width: width, height: height, backgroundColor: "rgba(52,52,52,0.8)" }} source={require("../../Images/background.jpg")} >
            <View style={{ flex: 5, justifyContent: "center" }} >
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
                                        <View style={{ marginLeft: 20, height: 60, width: 60, borderRadius: 50, backgroundColor: "pink" }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }} >
                                        {index == 0 ? <View style={{ marginLeft: 20 }} ></View> : null}
                                        <View style={{ marginLeft: -20, height: 60, width: 60, borderRadius: 50, backgroundColor: "white" }} ></View>
                                    </View>
                                    <View style={{ flexDirection: "row" }} >
                                        {index == 0 ? <View style={{ marginLeft: 20 }} ></View> : null}
                                        <View style={{ marginLeft: 20, height: 60, width: 60, borderRadius: 50, backgroundColor: "rgb(0,0,255)" }} ></View>
                                    </View>
                                </View>
                            )
                        }}
                    />

                </View>
                <View>
                    <Text style={{ textAlign: "center", fontWeight: '700', fontSize: 32, marginTop: 40, color: "white" }} >Shop black owned.</Text>
                    <Text style={{ textAlign: "center", fontWeight: '700', fontSize: 32, color: "white" }} >Get rewarded.</Text>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "white", marginHorizontal: 50, marginTop: 7 }} >Earn point everytime you shop at our 100+</Text>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "white", marginHorizontal: 20 }} >Black Owned buissinesses - and get even more</Text>
                    <Text style={{ textAlign: "center", fontSize: 14, color: "white", marginHorizontal: 50 }} >points with your special offers.</Text>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: "space-evenly" }} >
                <TouchableOpacity style={[styles.buttons, { backgroundColor: 'pink' }]} onPress={() => navigation.navigate('SocialLogin')} >
                    <Text style={styles.buttonText} >GET STARTED</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate('Home')}>
                    <Text style={[styles.buttonText, { color: 'white' }]} >LOG IN</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        // </View>
    )
}

export default Intro

const styles = StyleSheet.create({
    buttons: {
        alignSelf: "center",
        height: 50,
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
