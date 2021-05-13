import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import { Theme } from '@assets/Theme'
import { AppImages } from '@assets/Images'
import {
    Header,
    HeaderLeft,
    HeaderBackButton
} from '@components/core'
import RightIcon from 'react-native-vector-icons/EvilIcons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const CashbackActivities = ({ navigation }) => {
    const data = [1, 2, 3, 4]
    const lastElement = data[data.length - 1]
    return (
        <ImageBackground source={AppImages.app_bg} style={{ flex: 1, width: width, height: height, }}>
            <Header>
                <HeaderLeft >
                    <HeaderBackButton onPress={() => { navigation.goBack() }} />
                </HeaderLeft>
                <Text style={{ color: 'white' }}>CASH BACK ACTIVITIES</Text>
            </Header>

            <View style={styles.activityCard}>
                <View style={styles.dateView}>
                    <Text style={styles.whiteText}>June 2021</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <>
                                <View
                                    style={[styles.cashbackDetails,
                                    lastElement === index + 1 ? { height: 65 }
                                        : { borderBottomColor: '#5A5B5B', borderBottomWidth: 0.3 }
                                    ]}>
                                    <View style={[styles.statusLine, { backgroundColor: 'green' }]}></View>

                                    <View style={styles.userDetails}>
                                        <Text style={styles.whiteText}>pay@gmail.com</Text>
                                        <Text style={[styles.whiteText, { marginTop: 5 }]}>payal | Amount: $100</Text>
                                    </View>
                                    <View style={styles.cashbackStatus}>
                                        <Text style={styles.whiteText}>Sat,June 19,2021</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View
                                                style={[
                                                    styles.statusButton,
                                                    { backgroundColor: 'lightgreen' },
                                                ]}>
                                                <Text style={styles.statusText}>Confirmed</Text>
                                            </View>
                                            <Text style={[styles.whiteText, { marginLeft: 5 }]}>#96f6899</Text>
                                        </View>
                                    </View>
                                </View>
                            </>
                        )
                    }}
                />
            </View>
            <TouchableOpacity style={styles.listGreyBox}>
                <Text style={[styles.whiteText, { fontSize: 15 }]}>Cash Back Payment</Text>
                <RightIcon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
            </TouchableOpacity>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    activityCard: {
        width: (width * 93) / 100,
        alignSelf: 'center',
        backgroundColor: Theme.COLORS.bg_grey,
        marginTop: 40,
        borderRadius: 10,
        //height: 400
    },
    dateView: {
        height: 40,
        borderBottomColor: '#5A5B5B',
        borderBottomWidth: 0.3,
        justifyContent: 'center',
        paddingLeft: 13
    },
    cashbackDetails: {
        height: 55,
        flexDirection: 'row'
    },
    statusLine: {
        height: 55,
        width: 3,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
    userDetails: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    cashbackStatus: {
        flex: 1,
        marginRight: 10,
        //backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    whiteText: {
        color: Theme.COLORS.white,
        fontSize: 12
    },
    statusButton: {
        paddingHorizontal: 10,
        paddingVertical: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    statusText: {
        fontSize: 10,
        textTransform: 'capitalize',
    },
    listGreyBox: {
        height: 50,
        width: (width * 93) / 100,
        alignSelf: 'center',
        backgroundColor: Theme.COLORS.bg_grey,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },

})
export default CashbackActivities
