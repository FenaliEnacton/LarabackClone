import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HeaderTitle = (props) => {
    return (
        <View style={styles.TitleView}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    TitleView: {
        // backgroundColor: 'white'
    }
})
export default HeaderTitle