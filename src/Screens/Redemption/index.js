import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import {
    Header,
    HeaderLeft,
    ScrollContent,
    TransparentModal
} from '@components/core'
import { Theme } from '@assets/Theme'
import { AppImages } from '@assets/Images';
import { translate } from '@translations';
import { BgImage } from '@components/generic'
import Icon from 'react-native-vector-icons/AntDesign';
import DownIcon from 'react-native-vector-icons/Feather';
import LinearButton from '../../Components/LinearButton'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Redemption = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const data = [
        {
            id: 1,
            title: "Cash",
            method: [1]
        },
        {
            id: 2,
            title: "Gift Cards",
            method: [1, 2, 3, 4, 5, 6]
        },
        {
            id: 2,
            title: "Donations",
            method: [1, 2, 3, 4]
        }
    ]
    const modalToggle = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <BgImage>
            <Header>
                <HeaderLeft onPress={navigation.goBack()}>
                    <Icon name={'left'} size={20} color={Theme.COLORS.white} />
                </HeaderLeft>
                <Text style={styles.titleText}>{translate('redeemCoins')}</Text>
            </Header>
            <ScrollView nestedScrollEnabled={false}>
                {data.map((e, i) => {
                    return (
                        <View style={styles.renderView} key={i.toString()}>
                            <Text style={styles.methodText}>{e.title}</Text>
                            <FlatList
                                data={e.method}
                                keyExtractor={(item, index) => index.toString()}
                                numColumns={2}
                                scrollEnabled={false}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={{ marginTop: 10 }}>
                                            <TouchableOpacity style={[styles.methodCard,
                                            index % 2 == 0 ? { marginRight: (width * 3) / 100 } : null
                                            ]}
                                                onPress={() => modalToggle()}
                                            >
                                                <Image style={styles.methodCard}
                                                    resizeMode='cover'
                                                    source={AppImages.paypal} />
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }}
                            />
                        </View>
                    )
                })}
            </ScrollView>
            <TransparentModal bottomModalShow={modalVisible} >
                <View >
                    <View style={styles.modalHeader}>
                        <TouchableOpacity style={{ position: 'absolute', left: 10 }} onPress={() => modalToggle()}>
                            <Icon name='close' size={20} color={Theme.COLORS.white} />
                        </TouchableOpacity>
                        <Text style={styles.titleText}>{translate('redeemCoins')}</Text>
                    </View>
                    <View style={styles.modalContentView}>
                        <View style={styles.modalMethodCard}></View>
                        <Text style={styles.methodText}>Nike Gift Card</Text>
                        <TouchableOpacity style={styles.amountDropdown}>
                            <Text style={styles.greyText}>Select Amount</Text>
                            <DownIcon name='chevron-down' size={20} color={Theme.COLORS.white} />
                        </TouchableOpacity>
                        <LinearButton notActive={true} style={{ marginTop: 20 }} >
                            <Text style={styles.btnText}>{translate('continue')}</Text>
                        </LinearButton>
                        <Text style={styles.policyText}>{translate('privacyConfirmation')}</Text>
                    </View>
                </View>
            </TransparentModal>
        </BgImage>
    )
}
const styles = StyleSheet.create({
    titleText: {
        ...Theme.fontStyles.h2Regular,
        color: Theme.COLORS.white
    },
    policyText: {
        ...Theme.fontStyles.h4Regular,
        textAlign: 'center',
        color: Theme.COLORS.grey,
        marginTop: 15,
        width: (width * 75) / 100
    },
    btnText: {
        ...Theme.fontStyles.h3Bold
    },
    greyText: {
        ...Theme.COLORS.h4Regular,
        color: Theme.COLORS.grey
    },
    modalHeader: {
        width: width,
        flexDirection: 'row',
        //marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    modalMethodCard: {
        height: 130,
        width: (width * 85) / 100,
        borderRadius: 10,
        backgroundColor: 'orange'
    },
    modalContentView: {
        marginTop: 90,
        alignItems: 'center',
        //backgroundColor: 'red'
    },
    amountDropdown: {
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Theme.COLORS.grey,
        marginTop: 50,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    renderView: {
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: (width * 3) / 100,
        //alignItems: 'center'
    },
    methodText: {
        ...Theme.fontStyles.h2Bold,
        color: Theme.COLORS.white,
        marginTop: 15
    },
    methodCard: {
        height: 80,
        width: (width * 45) / 100,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.white,
        marginBottom: 3
    }
})
export default Redemption
