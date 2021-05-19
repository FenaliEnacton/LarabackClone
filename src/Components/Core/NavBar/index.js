import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { BlurView } from "@react-native-community/blur";
import Icon from 'react-native-vector-icons/AntDesign';
import HomeIcon from 'react-native-vector-icons/Entypo';
import StarIcon from 'react-native-vector-icons/Feather';
import ProfileIcon from 'react-native-vector-icons/FontAwesome';


const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const NavBar = ({ navigation, state }) => {
    //console.log("state : ", state)
    return (
        <View style={styles.container}>
            <BlurView
                style={styles.blurView}
                overlayColor=""
                blurType="light"
                blurAmount={4}
                reducedTransparencyFallbackColor="white"
            />
            <View style={styles.navView}>
                <TouchableOpacity style={styles.iconView} onPress={() => navigation.navigate('Home')}>
                    {state.index == 0 ? <HomeIcon name={'home'} size={22} color={'white'} /> : <HomeIcon name={'home'} size={22} color={'grey'} />}
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconView} onPress={() => navigation.navigate('Search')}>
                    {state.index == 1 ? <Icon name={"search1"} size={22} color={'white'} /> : <Icon name={"search1"} size={22} color={'grey'} />}
                    <Text style={styles.text}>Search</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconView} onPress={() => console.log("Rewards")}>
                    {state.index == 2 ? <StarIcon name={'star'} size={22} color={'white'} /> : <StarIcon name={'star'} size={22} color={'grey'} />}
                    <Text style={styles.text}>Rewards</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconView} onPress={() => navigation.navigate('Profile')}>
                    {state.index == 3 ? <ProfileIcon name={'user-circle-o'} size={22} color={'white'} /> : <ProfileIcon name={'user-circle-o'} size={22} color={'grey'} />}
                    <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        width: width,
        position: 'absolute',
        bottom: 0,
        borderTopColor: 'grey',
        borderTopWidth: 0.5
    },
    blurView: {
        height: 60,
        width: width,
        //backgroundColor: 'pink',
    },
    navView: {
        position: 'absolute',
        height: 60,
        width: width,
        backgroundColor: 'rgba(30, 30, 30, 0.7)',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        color: 'grey',
        fontSize: 12
    },
    iconView: {
        alignItems: 'center'
    }
})
export default NavBar
