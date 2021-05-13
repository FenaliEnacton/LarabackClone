import React, { useState } from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
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

const SignUp = ({ navigation }) => {
    const [state, setstate] = useState('')
    const [err, seterr] = useState('')

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
        <ImageBackground source={AppImages.app_bg} style={{ flex: 1, width: width, height: height, }}>
            <LoginHeader step={"STEP 1"} heading={"Create an account"} desc={"Create an account to continue!"} />
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
                                placeholder={'First Name'}
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
                                notActive={values.firstName && values.Email && values.Password && !errors.firstName && !errors.Email && !errors.Password
                                    ? false
                                    : true}
                            >
                                <Text>SIGN UP</Text>
                            </Button>
                        </View>
                    )}
                </Formik>
                <View style={{ width: (width * 80) / 100, marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', color: Theme.COLORS.grey }}>By tapping continuing, you agree our terms & Conditions and privacy policy</Text>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
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
    }
})
export default SignUp
