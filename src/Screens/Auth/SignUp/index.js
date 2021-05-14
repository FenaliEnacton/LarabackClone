import React, { useState } from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import LoginHeader from '../../../Components/loginHeader'
import { translate } from '@translations';
import { Formik, ErrorMessage } from 'formik';
import { string, object, date } from 'yup';
import TextBox from '../../../Components/TextBox'
import Button from '../../../Components/LinearButton'
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';
import { BgImage } from '@components/generic'
import Icon from 'react-native-vector-icons/Feather';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const SignUp = ({ navigation }) => {

    const FormSchema = object().shape({
        firstName: string().trim().required(translate('required_field')),
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
        <BgImage>
            <LoginHeader step={"STEP 1"} heading={translate('createAccount')} desc={translate('createAccountToContinue')} />
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                <Formik
                    initialValues={{ firstName: '', Email: '', Password: '' }}
                    validationSchema={FormSchema}
                    onSubmit={(values, errors) => handleFormSubmit(values, errors)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View>
                            <TextBox
                                containerStyle={!errors.firstName && values.firstName
                                    ? { borderColor: Theme.COLORS.primary, borderWidth: 0.5 }
                                    : null}
                                placeholder={translate('firstName')}
                                value={values.firstName}
                                onChangeText={handleChange('firstName')}
                            >
                                {!errors.firstName && values.firstName
                                    ? <Icon name='check' size={15} color={Theme.COLORS.primary} />
                                    : null}
                            </TextBox>
                            <ErrorMessage name="firstName">
                                {msg => <Text style={styles.errorMessage}>{msg}</Text>}
                            </ErrorMessage>

                            <TextBox
                                containerStyle={!errors.Email && values.Email
                                    ? { borderColor: Theme.COLORS.primary, borderWidth: 0.5 }
                                    : null}
                                placeholder={translate('email')}
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
                                placeholder={translate('password')}
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
                                notActive={values.firstName && values.Email && values.Password && !errors.firstName && !errors.Email && !errors.Password
                                    ? false
                                    : true}
                            >
                                <Text style={styles.signupText}>{translate('signUp')}</Text>
                            </Button>
                        </View>
                    )}
                </Formik>
                <View style={styles.policyView}>
                    <Text style={styles.policyText}>{translate('privacyConfirmation')}</Text>
                </View>
            </View>
        </BgImage>
    )
}

const styles = StyleSheet.create({
    inputText: {
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.white
    },
    loginbutton: {
        height: (height * 5) / 100,
        width: (width * 85) / 100,
        borderRadius: 20,
        backgroundColor: Theme.COLORS.white,
        flexDirection: 'row',
    },
    errorMessage: {
        ...Theme.appStyle.errorMessage,
        // marginTop: 5,
        alignSelf: 'center',
        width: width - 20,
        textAlign: 'right',
    },
    successTextInput: {
        height: 45,
        width: (width * 85) / 100,
        borderRadius: 5,
        borderColor: Theme.COLORS.primary,
        alignSelf: 'center',
        borderWidth: 0.5,
        paddingLeft: 10,
        marginVertical: 10,
        color: Theme.COLORS.white,
        backgroundColor: 'rgba(60, 60, 60, 0.5)',
    },
    signupText: {
        ...Theme.fontStyles.h3Bold
    },
    policyText: {
        ...Theme.fontStyles.h4Regular,
        textAlign: 'center',
        color: Theme.COLORS.grey
    },
    policyView: {
        width: (width * 75) / 100,
        marginTop: 15
    }
})
export default SignUp
