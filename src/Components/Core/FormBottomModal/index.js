import React, {useState, forwardRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Content from '../Content/keyboardAwareScrollContent';
import Modal from 'react-native-translucent-modal';
import {Theme} from '@assets/Theme';

const FormBottomModal = forwardRef((props, ref) => {
  const {setBottomModalVisibleFalse, bottomModalShow} = props;
  // const [yPosition, setyPosition] = useState(700);
  // const transformHeight = new Animated.Value(yPosition);

  // const startAnimation = () => {
  //   Animated.timing(transformHeight, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const hidePopup = () => {
  //   Animated.timing(transformHeight, {
  //     toValue: yPosition,
  //     duration: 400,
  //     useNativeDriver: true,
  //   }).start();
  //   setTimeout(() => {
  //     setBottomModalVisibleFalse();
  //   }, 500);
  // };

  const hideModal = () => {
    setBottomModalVisibleFalse();
  };

  return (
    <Modal
      ref={ref}
      transparent={true}
      animationType="fade"
      onRequestClose={hideModal}
      visible={bottomModalShow}>
      <View
        activeOpacity={1}
        onPress={hideModal}
        style={styles.modalBackground}>
        <View
          // onLayout={(event) => {
          //   const {height} = event.nativeEvent.layout;
          //   setyPosition(height);
          // }}
          style={[styles.modalContent]}>
          <Content style={{marginTop: 0}}>{props.children}</Content>
        </View>
      </View>
    </Modal>
  );
});

// function mapStateToProps(state) {
//   return {};
// }

const styles = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
  },
  modalContent: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: Theme.COLORS.white,
    width: '100%',
    bottom: 0,
    position: 'absolute',
    paddingTop: 5,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default FormBottomModal;
