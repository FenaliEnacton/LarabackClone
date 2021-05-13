import React, { useState } from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, TextInput, Touchable } from 'react-native'
import LoginHeader from '../../Components/loginHeader'
import { translate } from '@translations';
import { Formik, ErrorMessage } from 'formik';
import { string, object, date } from 'yup';
import TextBox from '../../Components/TextBox'
import Button from '../../Components/LinearButton'
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';
import Icon from 'react-native-vector-icons/Feather';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Login = ({ navigation }) => {

    const FormSchema = object().shape({
        Email: string()
            .trim()
            .email(translate('email_is_not_valid'))
            .required(translate('required_field')),

        Password: string()
            .trim()
            .min(8)
            .required(translate('required_field')),
    });

    const handleFormSubmit = (values, err) => {
        console.log("values", values)
        navigation.navigate('FavBrand')
    }
    return (
        <ImageBackground source={AppImages.app_bg} style={styles.bg_style}>
            <LoginHeader heading={translate('getYouLogin')} desc={translate('loginDesc')} />
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                <Formik
                    initialValues={{ Email: '', Password: '' }}
                    validationSchema={FormSchema}
                    onSubmit={(values, errors) => handleFormSubmit(values, errors)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View>

                            <TextBox
                                containerStyle={!errors.Email && values.Email
                                    ? { borderColor: Theme.COLORS.primary, borderWidth: 0.5 }
                                    : null}
                                placeholder={'Email'}
                                value={values.Email}
                                onChangeText={handleChange('Email')}
                            >
                                {!errors.Email && values.Email
                                    ? <Icon name='check' size={15} color={Theme.COLORS.primary} />
                                    : null}
                            </TextBox>
                            <ErrorMessage name="Email">
                                {msg => <Text style={styles.errorMessage}>{msg}</Text>}
                            </ErrorMessage>

                            <TextBox
                                containerStyle={!errors.Password && values.Password
                                    ? { borderColor: Theme.COLORS.primary, borderWidth: 0.5 }
                                    : null}
                                placeholder={'Password'}
                                value={values.Password}
                                onChangeText={handleChange('Password')}
                            >
                                {!errors.Password && values.Password
                                    ? <Icon name='check' size={15} color={Theme.COLORS.primary} />
                                    : null}
                            </TextBox>
                            <ErrorMessage name="Password">
                                {msg => <Text style={styles.errorMessage}>{msg}</Text>}
                            </ErrorMessage>

                            <Button style={{ marginTop: 20 }}
                                onPress={handleSubmit}
                                notActive={values.Email && values.Password && !errors.Email && !errors.Password
                                    ? false
                                    : true}
                            >
                                <Text style={styles.loginText}>{translate('login')}</Text>
                            </Button>
                        </View>
                    )}
                </Formik>
                <TouchableOpacity
                    style={styles.forgetPassView}
                    onPress={() => { navigation.navigate('ForgetPassword') }}>
                    <Text style={[styles.greyText, { color: Theme.COLORS.white }]}>
                        {translate('forgetPassword')}
                    </Text>
                </TouchableOpacity>
                <View style={styles.alreadyAccountView}>
                    <Text style={styles.greyText}>{translate('dontHaveAccount')} </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.signupText}>{translate('signUp')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    bg_style: {
        flex: 1,
        width: width,
        height: height,
    },
    alreadyAccountView: {
        alignSelf: 'center',
        height: 20,
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center'
    },
    forgetPassView: {
        width: (width * 80) / 100,
        marginTop: 20,
        alignSelf: 'center'
    },
    greyText: {
        ...Theme.fontStyles.h4Regular,
        color: Theme.COLORS.grey,
        textAlign: 'center'
    },
    loginText: {
        ...Theme.fontStyles.h3Bold,

    },
    signupText: {
        ...Theme.fontStyles.h4Bold,
        color: Theme.COLORS.white,
    },
    errorMessage: {
        ...Theme.appStyle.errorMessage,
        // marginTop: 5,
        alignSelf: 'center',
        width: width - 20,
        textAlign: 'right',
    },
})
export default Login