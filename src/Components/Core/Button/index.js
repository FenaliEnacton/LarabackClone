import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity, Platform} from 'react-native';
import {Theme} from '@assets/Theme';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Button = props => {
  return (
    <TouchableOpacity
      style={[styles.button, props.style]}
      onPress={props.onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    height: (height * 5.5) / 100,
    width: (width * 80) / 100,
    marginTop: (height * 3) / 100,
    alignSelf: 'center',
    borderRadius: 8,
    backgroundColor: Theme.COLORS.primary,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, 0.7)',
        shadowOffset: {
          height: 0.5,
          width: 1,
        },
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 5,
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
export default Button;
