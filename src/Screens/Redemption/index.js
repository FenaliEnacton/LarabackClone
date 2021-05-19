import React, { useState, useRef } from 'react'
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
import ModalDropdown from 'react-native-modal-dropdown';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Redemption = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedAmt, setselectedAmt] = useState('')
    const [checkAmt, setCheckAmt] = useState(false)
    const subject = useRef('')
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
    const amount = ['10$', '20$', '30$', '40$']
    const modalToggle = () => {
        setModalVisible(!modalVisible)
    }


    const handleSubmit = () => {
        setCheckAmt(!checkAmt)
        //navigation.navigate('FavBrand')
    }

    return (
        <BgImage>
            <Header>
                <HeaderLeft onPress={() => { navigation.goBack() }}>
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
                                            index % 2 == 0 ? { marginRight: (width * 4) / 100 } : null
                                            ]}
                                                onPress={() => modalToggle()}
                                            >
                                                <Image style={styles.methodImg}
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


                        <TouchableOpacity style={[styles.amountDropdown,
                        selectedAmt ? { borderColor: Theme.COLORS.primary, borderWidth: 0.5 }
                            : null
                        ]}>
                            <ModalDropdown
                                ref={subject}
                                options={amount}
                                defaultValue={'Select Amount'}
                                style={styles.dropdownModalView}
                                textStyle={styles.greyText}
                                dropdownStyle={styles.dropdownValStyle}
                                dropdownTextStyle={styles.dropdownText}
                                dropdownTextHighlightStyle={{ color: Theme.COLORS.black }}
                                onSelect={(i, val) => {
                                    setselectedAmt(val);
                                }}
                            >
                            </ModalDropdown>
                            <DownIcon name='chevron-down' size={20} color={Theme.COLORS.white} />
                        </TouchableOpacity>

                        {!selectedAmt && checkAmt ? <Text style={styles.errorMessage}>{translate('requiredField')}</Text> : null}

                        <LinearButton
                            notActive={selectedAmt ? false : true}
                            style={{ marginTop: 20 }}
                            onPress={() => { handleSubmit() }}>
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
    errorMessage: {
        ...Theme.appStyle.errorMessage,
        marginTop: 5,
        alignSelf: 'center',
        width: width - 20,
        textAlign: 'right',
    },
    pickerStyle: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: 'red'
    },
    dropdownModalView: {
        width: '90%',
        height: '100%',
        justifyContent: 'center'
    },
    dropdownValStyle: {
        width: (width * 85) / 100,
        //height: 50,
        marginLeft: -10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    dropdownText: {
        ...Theme.fontStyles.h3Regular,
        color: Theme.COLORS.grey,
        textAlign: 'center'
    },
    btnText: {
        ...Theme.fontStyles.h3Bold
    },
    greyText: {
        ...Theme.COLORS.h3Regular,
        color: Theme.COLORS.white
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
        flex: 1,
        width: (width * 85) / 100,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Theme.COLORS.grey,
        marginTop: 40,
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
        borderRadius: 20,
        backgroundColor: Theme.COLORS.grey,
        marginBottom: 3
    },
    methodImg: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    }
})
export default Redemption
