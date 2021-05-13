import React from 'react';
import { StyleSheet, TouchableOpacity, I18nManager } from 'react-native';
import Icon from '@assets/icons';
import { Theme } from '@assets/Theme';

export default function HeaderBackButton(props) {
  return (
    <TouchableOpacity
      style={[styles.btn, props.btnStyle]}
      onPress={() => props.onPress()}>
      <Icon.EvilIcons
        // style={styles.icon}
        name={'chevron-left'}
        color={Theme.COLORS.white}
        size={30}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'flex-start',
    marginTop: 5,
  },
});
