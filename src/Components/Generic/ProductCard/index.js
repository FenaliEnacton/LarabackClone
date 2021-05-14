import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { AppImages } from '@assets/Images';
import LinearButton from '../../LinearButton'
import { Theme } from '@assets/Theme';
import { translate } from '@translations';

const width = Dimensions.get('window').width
const ProductCard = (props) => {
    return (
        <>
            <View style={styles.productCard}>
                <Image source={AppImages.homeProduct} style={styles.Img} />
            </View>
            <TouchableOpacity style={{ marginVertical: 8 }}>
                <LinearButton style={styles.buttons}>
                    <Text style={styles.buttonText} >10% Cash Back</Text>
                </LinearButton>
            </TouchableOpacity>
            <View>
                <Text style={styles.text}>Title</Text>
                <Text style={styles.text}>Description</Text>
                <Text style={styles.text}>Price</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    productCard: {
        height: 150,
        width: (width * 37) / 100,
        borderRadius: 10,
        backgroundColor: Theme.COLORS.white,
        marginRight: 10
    },
    Img: {
        height: '100%',
        width: '100%',
        backgroundColor: Theme.COLORS.bg_transparent,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    },
    buttons: {
        height: 17,
        width: 80,
        borderRadius: 5,
        justifyContent: "center",
        alignSelf: 'flex-start'
    },
    buttonText: {
        ...Theme.fontStyles.h5Bold,
        textAlign: "center",
    },
    text: {
        ...Theme.fontStyles.h3Bold,
        color: Theme.COLORS.white
    }
})
export default ProductCard
