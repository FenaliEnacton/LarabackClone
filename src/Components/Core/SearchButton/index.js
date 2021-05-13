import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from '@assets/icons';
import {Theme} from '@assets/Theme';

const SearchButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.btn, props.btnStyle]}
      onPress={() => props.navigation.navigate('Search')}>
      <Icon.AntDesign name={'search1'} color={Theme.COLORS.white} size={16} />
    </TouchableOpacity>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    alignItems: 'center',
    marginLeft: 10,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  icon: {},
});
