import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {AppImages} from '@assets/Images';

const HeaderMenuButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.btn, props.btnStyle]}
      onPress={() => props.onPress()}>
      <Image source={AppImages.menu_icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default HeaderMenuButton;

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    width: '100%',
    height: '100%',
    // backgroundColor: 'black',
  },
  icon: {
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    height: 20,
    width: 20,
  },
});
