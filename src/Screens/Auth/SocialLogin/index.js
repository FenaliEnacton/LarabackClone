import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import LoginHeader from '../../../Components/loginHeader'
import { translate } from '@translations';
import Icon from 'react-native-vector-icons/AntDesign';
import FbIcon from 'react-native-vector-icons/MaterialIcons';
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';
import { SocialLoginBtn } from '@components/generic'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const SocialLogin = ({ navigation }) => {
    return (
        // <View>
        <ImageBackground source={AppImages.app_bg} style={styles.bg_img}>
            <LoginHeader step={"STEP 1"} heading={translate('createAccount')} desc={translate('createAccountToContinue')} />

            <View style={styles.EmailView}>
                <SocialLoginBtn
                    text={translate('continueEmail')}
                    onPress={() => { navigation.navigate('SignUp') }}>
                    <Icon name="mail" size={17} color="black" />
                </SocialLoginBtn>
            </View>


            <View style={styles.orView}>
                <View style={styles.line}></View>
                <Text style={{ color: Theme.COLORS.grey, fontWeight: 'bold' }}>or</Text>
                <View style={styles.line}></View>
            </View>

            <SocialLoginBtn
                text={translate('continueApple')}
                style={styles.greyBorder}
                textStyle={{ color: Theme.COLORS.white }}>
                <Icon name="apple1" size={17} color={Theme.COLORS.white} />
            </SocialLoginBtn>

            <SocialLoginBtn
                text={translate('continueFacebook')}
                style={{ backgroundColor: Theme.COLORS.facebook }}
                textStyle={{ color: Theme.COLORS.white }}>
                <FbIcon name="facebook" size={20} color="white" />
            </SocialLoginBtn>

            <SocialLoginBtn
                text={translate('continueGoogle')}>
                <Icon name="google" size={17} color={Theme.COLORS.black} />
            </SocialLoginBtn>


            <View style={styles.alreadyAccountView}>
                <Text style={{ color: 'grey', fontSize: 12 }}>{translate('alreadyHaveAccount')}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.whiteText}>{translate('login')}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground >
        //</View >
    )
}
const styles = StyleSheet.create({
    bg_img: {
        flex: 1,
        width: width,
        height: height,
    },
    EmailView: {
        alignItems: 'center',
        marginVertical: 15
    },
    greyBorder: {
        backgroundColor: Theme.COLORS.black,
        borderWidth: 1,
        borderColor: Theme.COLORS.grey
    },
    orView: {
        flexDirection: 'row',
        width: (width * 85) / 100,
        justifyContent: 'space-evenly',
        height: 20,
        alignSelf: 'center'
    },
    line: {
        height: 0.5,
        width: (width / 2) - 50,
        backgroundColor: Theme.COLORS.grey,
        alignSelf: 'center',
    },
    buttonView: {
        alignSelf: 'center',
        marginTop: 15,
        justifyContent: 'center',
    },
    alreadyAccountView: {
        alignSelf: 'center',
        height: 20,
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center'
    },
    whiteText: {
        ...Theme.fontStyles.h3Regular,
        color: Theme.COLORS.white
    }
})
export default SocialLogin
