import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';
import { ScrollView } from 'react-native-gesture-handler'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const FirstLogo = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
    const numColumns = Math.ceil(data.length / 3);
    //console.log("object", numColumns * 2)
    return (
        <View style={styles.contentView} >
            <ScrollView
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            //contentContainerStyle={{ paddingHorizontal: 20 }}
            >
                <FlatList
                    data={data}
                    scrollEnabled={false}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={numColumns}
                    keyExtractor={(item, index) => (index.toString())}
                    renderItem={({ item, index }) => {
                        return (
                            < View >
                                <View style={{ flexDirection: "row" }} >
                                    <View style={
                                        index == 0 || index == (numColumns * 2) ? { marginLeft: 30 } : { marginLeft: 20 }} >
                                        <View style={[styles.logoView,
                                        index == numColumns ? { marginLeft: -20 } : null]} >
                                            <Text>{item}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                />

            </ScrollView>
        </View >
    )
}
const styles = StyleSheet.create({
    contentView: {
        //height: 180,
        width: width,
        justifyContent: "center",
        //backgroundColor: 'red'
    },
    logoView: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: Theme.COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'

    }
})
export default FirstLogo
