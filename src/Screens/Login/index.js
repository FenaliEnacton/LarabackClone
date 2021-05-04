import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import LoginHeader from '../../Components/loginHeader'

import { Formik } from 'formik';
import TextBox from '../../Components/TextBox'
import Button from '../../Components/Button'
import { AppImages } from '@assets/Images';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = ({ navigation }) => {
    return (
        <ImageBackground source={AppImages.app_bg} style={{ flex: 1, width: width, height: height, }}>
            <LoginHeader step={"STEP 1"} heading={"Create an account"} desc={"Create an account to continue!"} />
            <View style={{ marginTop: 30, alignItems: 'center' }}>
                <Formik
                    initialValues={{ firstName: '', email: '', password: '' }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextBox
                                placeholder={'First Name'}
                                value={values.firstName} />

                            <TextBox
                                placeholder={'Email'}
                                value={values.firstName} />

                            <TextBox
                                placeholder={'Password'}
                                value={values.firstName} />

                            <Button style={{ marginTop: 20, backgroundColor: 'white' }} onPress={() => navigation.navigate('FavBrand')}>
                                <Text>SIGN UP</Text>
                            </Button>
                        </View>
                    )}
                </Formik>
                <View style={{ width: (width * 80) / 100, marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', color: 'grey' }}>By tapping continuing, you agree our terms & Conditions and privacy policy</Text>
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
        backgroundColor: 'white'
    },
    loginbutton: {
        height: (height * 5) / 100,
        width: (width * 85) / 100,
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
})
export default index
