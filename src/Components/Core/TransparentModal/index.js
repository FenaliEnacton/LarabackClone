import React from 'react'
import { View, StyleSheet, Animated, Dimensions, StatusBar } from 'react-native';
import Modal from 'react-native-translucent-modal';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Theme } from '@assets/Theme';

import { BlurView } from "@react-native-community/blur";

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const TransparentModal = (props) => {
    const { bottomModalShow } = props;
    StatusBar.setHidden(true)
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                onRequestClose={() => { }}
                visible={bottomModalShow}>


                <>
                    <BlurView
                        style={styles.blurView}
                        overlayColor=""
                        blurType="light"
                        blurAmount={10}
                        reducedTransparencyFallbackColor={Theme.COLORS.white}
                    />

                    {/* </BlurView> */}
                    <View style={{ position: 'absolute' }}>

                        {props.children}
                    </View>
                </>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        position: 'absolute',
    },
    blurView: {
        flex: 1,
        height: Height,
        width: Width,
        backgroundColor: 'rgba(22, 23, 28, 0.9)'
    }
})
export default TransparentModal
