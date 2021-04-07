import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, FlatList } from 'react-native'
import LoginHeader from '../../Components/loginHeader'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return (
        <ImageBackground source={require("../../Images/Login.jpg")} style={{ flex: 1, width: width, height: height, }}>
            <LoginHeader step={"STEP 2"} heading={"Select some of your favorite brands"} />
            <View style={styles.IconContainer}>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => (index.toString)}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.IconBox}>
                                <View style={styles.IconView}></View>
                                <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>The marathon clothing</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    IconContainer: {
        marginTop: 22,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    IconBox: {
        height: 120,
        width: 100,
        //backgroundColor: 'pink',
        marginHorizontal: 3,
        marginVertical: 9,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    IconView: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'white',

    }
})
export default index
