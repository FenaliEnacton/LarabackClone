import React from 'react'
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import {
    Header,
    HeaderLeft,
} from '@components/core'
import { Theme } from '@assets/Theme'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/EvilIcons';
import { translate } from '@translations';
import { ProfileCBRoutes } from '@assets/RouterList'
import { BgImage } from '@components/generic'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Profile = ({ navigation }) => {
    return (
        <BgImage>
            <Header>
                <Text style={styles.routeNameText}>{translate('profile')}</Text>
            </Header>

            <ScrollView>
                <View style={styles.profileDetails}>
                    <View style={styles.userName}>
                        <Icon name={'user'} size={20} color={Theme.COLORS.white} />
                        <Text style={styles.userNameText}> Hey!</Text>
                        <Text style={[styles.userNameText, { color: 'green' }]}> Theo</Text>
                    </View>

                    <LinearGradient start={{ x: 0.7, y: 0.0 }} end={{ x: 0.0, y: 0.7 }} colors={['#4AADD7', '#4BD95A']} style={styles.cbBalance}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={styles.cbTitleText}>{translate('cashbackBalance')}</Text>
                                <Text style={[styles.whiteText, { fontSize: 35, fontStyle: 'italic' }]}>2,000 pts</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.redeemBtn} onPress={() => { navigation.navigate('Redemption') }}>
                            <Text style={[styles.cbTitleText]}>{translate('redeemCoins')}</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                <View style={{ marginTop: 10 }}>
                    {ProfileCBRoutes.map((e, index) => {
                        return (
                            <View key={index.toString()}>
                                {e.childRoutes ?
                                    (
                                        <>
                                            {e.childRoutes.map((item, i) => {
                                                return (
                                                    <TouchableOpacity
                                                        style={[styles.listGreyBox,
                                                        i == 0 ? { marginTop: 20 } : null,
                                                        e.childRoutes.length - 1 != i ? { borderBottomColor: Theme.COLORS.border_light, borderBottomWidth: 0.3 } : null]}
                                                        onPress={() => { navigation.navigate(item.route) }}
                                                        key={i.toString()}>
                                                        <Text style={styles.routeNameText}>{item.title}</Text>
                                                        <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                                                    </TouchableOpacity>
                                                )
                                            })}
                                        </>
                                    )
                                    :
                                    <TouchableOpacity style={[styles.listGreyBox, { marginTop: 20 }]}
                                        onPress={() => { navigation.navigate(e.route) }}
                                        key={index.toString()}>
                                        <Text style={styles.routeNameText}>{e.title}</Text>
                                        <Icon name={'chevron-right'} size={25} color={Theme.COLORS.white} />
                                    </TouchableOpacity>
                                }
                            </View>
                        )
                    })}
                </View>

                <TouchableOpacity style={styles.logoutView}>
                    <Text style={[styles.whiteText, { fontSize: 12 }]}>{translate('logout')}</Text>
                </TouchableOpacity>
                <View style={{ height: 60, width: width }}></View>
            </ScrollView>
        </BgImage>
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
        ...Theme.fontStyles.h1Regular,
        color: Theme.COLORS.white,
    },
    userNameText: {
        ...Theme.fontStyles.h1Bold,
        color: Theme.COLORS.white,
        fontSize: 20
    },
    profileDetails: {
        width: (width * 90) / 100,
        alignSelf: 'center',
        marginTop: 30
    },
    cbTitleText: {
        ...Theme.fontStyles.h3Bold,
        color: Theme.COLORS.white
    },
    userName: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    routeNameText: {
        ...Theme.fontStyles.h2Regular,
        color: Theme.COLORS.white
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
export default Profile
