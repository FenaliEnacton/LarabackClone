import React, { useState } from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import LoginHeader from '../../../Components/Core/LoginHeader'
import { translate } from '@translations';
import { Formik, ErrorMessage } from 'formik';
import { string, object, date } from 'yup';
import TextBox from '../../../Components/Core/TextBox'
import Button from '../../../Components/Core/LinearButton'
import { AppImages } from '@assets/Images';
import { Theme } from '@assets/Theme';
import { BgImage } from '@components/generic'
import Icon from 'react-native-vector-icons/Feather';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ForgetPassword = ({ navigation }) => {

    const FormSchema = object().shape({

        Email: string()
            .trim()
            .email(translate('email_is_not_valid'))
            .required(translate('required_field')),
    });

    const handleFormSubmit = (values, err) => {
        console.log("values", values)
        navigation.navigate('FavBrand')
    }
    return (
        <BgImage>
            <LoginHeader heading={translate('resetPassword')} desc={translate('forgetPassDesc')} />
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                <Formik
                    initialValues={{ Email: '' }}
                    validationSchema={FormSchema}
                    onSubmit={(values, errors) => handleFormSubmit(values, errors)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View>

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

                            <Button style={{ marginTop: 20 }}
                                onPress={handleSubmit}
                                notActive={values.Email && !errors.Email
                                    ? false
                                    : true}
                            >
                                <Text style={styles.loginText}>{translate('login')}</Text>
                            </Button>
                        </View>
                    )}
                </Formik>

            </View>
        </BgImage>
    )
}

const styles = StyleSheet.create({
    bg_img: {
        flex: 1,
        width: width,
        height: height,
    },
    buttonTextView: {
        justifyContent: 'center',
        flex: 1
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 12
    },
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
    loginText: {
        ...Theme.fontStyles.h3Bold
    },
})
export default ForgetPassword
