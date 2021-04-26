import React from 'react'
import { View, Text, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import LoginHeader from '../../Components/loginHeader'
import { Formik } from 'formik';
import TextBox from '../../Components/TextBox'

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const index = ({ navigation }) => {
    return (
        <ImageBackground source={require("../../Images/Login.jpg")} style={{ flex: 1, width: width, height: height, }}>
            <LoginHeader step={"STEP 1"} heading={"Create an account"} desc={"Create an account to continue!"} />
            <View style={{ marginTop: 30 }}>
                <Formik
                    initialValues={{ email: '' }}
                    onSubmit={values => console.log(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextBox
                                placeholder={'First Name'} />

                            <TextBox
                                placeholder={'First Name'} />

                            <TextBox
                                placeholder={'First Name'} />
                            {/* <Button onPress={handleSubmit} title="Submit" /> */}
                        </View>
                    )}
                </Formik>

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
