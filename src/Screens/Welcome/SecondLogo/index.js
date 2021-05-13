import React from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';
import { ScrollView } from 'react-native-gesture-handler'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SecondLogo = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 0]
    const numColumns = data.length
    return (
        <View >
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
                    //horizontal={true}
                    keyExtractor={(item, index) => (index.toString())}
                    renderItem={({ item, index }) => {
                        //console.log("index", index % 2 == 0)
                        return (
                            < View >
                                <View style={[styles.boxView,
                                index % 2 != 0 ? { marginTop: 20 } : null
                                ]}>

                                </View>
                            </View>
                        )
                    }}
                />

            </ScrollView>


        </View>
    )
}
const styles = StyleSheet.create({
    boxView: {
        height: 50,
        width: 65,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.white,
        marginLeft: 10,


    }
})
export default SecondLogo
