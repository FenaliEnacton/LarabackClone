import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import {
    Header,
    HeaderLeft,
} from '@components/core'
import { Theme } from '@assets/Theme'
import { AppImages } from '@assets/Images'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = ({ navigation }) => {
    return (
        <ImageBackground source={AppImages.app_bg} style={{ flex: 1, width: width, height: height, }}>
            <Header>
                <Text style={[styles.whiteText, { fontWeight: 'bold' }]}>PROFILE</Text>
            </Header>

            <ScrollView>
                <View style={styles.profileDetails}>
                    <View style={styles.userName}>
                        <Icon name={'user'} size={20} color={Theme.COLORS.white} />
                        <Text style={[styles.whiteText, { fontWeight: 'bold' }]}> Hey!</Text>
                        <Text style={[styles.whiteText, { color: 'green', fontWeight: 'bold' }]}> Theo</Text>
                    </View>

                    <LinearGradient start={{ x: 0.7, y: 0.0 }} end={{ x: 0.0, y: 0.7 }} colors={['#4AADD7', '#4BD95A']} style={styles.cbBalance}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ color: 'white', fontSize: 12 }}>CASH BACK BALANCE</Text>
                                <Text style={[styles.whiteText, { fontSize: 35, fontStyle: 'italic' }]}>2,000 pts</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.redeemBtn}>
                            <Text style={[styles.whiteText, { fontSize: 12 }]}>REDEEM SHOULD APP</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <TouchableOpacity style={[styles.listGreyBox, { marginTop: 30, borderBottomColor: '#5A5B5B', borderBottomWidth: 0.3 }]} onPress={() => { navigation.navigate('CashBackActivities') }}>
                    <Text style={styles.whiteText}>Cash Back Activities</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </TouchableOpacity>
                <View style={[styles.listGreyBox, { borderBottomColor: '#5A5B5B', borderBottomWidth: 0.3 }]}>
                    <Text style={styles.whiteText}>Cash back Payment</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </View>
                <View style={styles.listGreyBox}>
                    <Text style={styles.whiteText}>Missing Cashback</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </View>

                <View style={[styles.listGreyBox, { marginTop: 20 }]}>
                    <Text style={styles.whiteText}>Favorites</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </View>

                <View style={[styles.listGreyBox, { marginTop: 20, borderBottomColor: '#5A5B5B', borderBottomWidth: 0.3 }]}>
                    <Text style={styles.whiteText}>Refer & Earn</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </View>
                <View style={styles.listGreyBox}>
                    <Text style={styles.whiteText}>Share & Earn</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </View>

                <View style={[styles.listGreyBox, { marginTop: 20, borderBottomColor: '#5A5B5B', borderBottomWidth: 0.3 }]}>
                    <Text style={styles.whiteText}>FAQ's</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </View>
                <View style={[styles.listGreyBox, { borderBottomColor: '#5A5B5B', borderBottomWidth: 0.3 }]}>
                    <Text style={styles.whiteText}>Contact Us</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </View>
                <View style={[styles.listGreyBox, { borderBottomColor: '#5A5B5B', borderBottomWidth: 0.3 }]}>
                    <Text style={styles.whiteText}>Account Settings</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </View>
                <View style={[styles.listGreyBox, { borderBottomColor: '#5A5B5B', borderBottomWidth: 0.3 }]}>
                    <Text style={styles.whiteText}>Privacy Policy</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </View>
                <View style={[styles.listGreyBox, { borderBottomColor: '#5A5B5B', borderBottomWidth: 0.3 }]}>
                    <Text style={styles.whiteText}>Terms of Service</Text>
                    <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                </View>

                <TouchableOpacity style={styles.logoutView}>
                    <Text style={[styles.whiteText, { fontSize: 12 }]}>LOG OUT</Text>
                </TouchableOpacity>
                <View style={{ height: 60, width: width }}></View>
            </ScrollView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    greyBox: {
        height: 60,
        width: width,
        backgroundColor: Theme.COLORS.bg_grey,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    whiteText: {
        color: Theme.COLORS.white,
        fontSize: 15,

    },
    profileDetails: {
        width: (width * 90) / 100,
        alignSelf: 'center',
        marginTop: 30
    },
    userName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cbBalance: {
        height: 150,
        width: '100%',
        borderRadius: 10,
        marginTop: 15,
        padding: 20,
        justifyContent: 'space-between'
    },
    redeemBtn: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: Theme.COLORS.white,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'

    },
    listGreyBox: {
        height: 50,
        width: width,
        backgroundColor: Theme.COLORS.bg_grey,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoutView: {
        height: 42,
        width: (width * 40) / 100,
        borderRadius: 20,
        marginVertical: 20,
        borderColor: 'green',
        borderWidth: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default index
