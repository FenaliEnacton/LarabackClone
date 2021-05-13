import React from 'react';
import {
  Platform,
  View,
  Text,
  ActivityIndicator,
  ViewPropTypes,
  I18nManager,
  Dimensions,
  StyleSheet,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import PropTypes from 'prop-types';
import {Theme} from '@assets/Theme';

const Loader = props => {
  const {show, style = {}, transparent = false, vertical, text} = props;
  if (show)
    return (
      <View
        style={[
          styles.container,
          style,
          transparent && {
            backgroundColor: 'transparent',
          },
        ]}>
        <View
          style={[
            styles.loader,
            vertical === false && {
              flexDirection: 'row',
            },
          ]}>
          <ActivityIndicator
            size={vertical === false ? 'small' : 'large'}
            color={Theme.COLORS.primary}
          />
          {text ? (
            <Text
              style={[
                styles.loaderText,
                vertical === false && {
                  paddingTop: 0,
                  paddingLeft: 5,
                },
              ]}>
              {text}
            </Text>
          ) : null}
        </View>
      </View>
    );
  return null;
};

Loader.propTypes = {
  ...ViewPropTypes,
  transparent: PropTypes.bool,
};
export default Loader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0007',
    position: 'absolute',
    top: 0,
    left: 0,
    width: windowWidth,
    height: windowHeight + 100,
    zIndex: 99999999,
  },
  loader: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2D3DC',
    borderRadius: 5,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, 0.7)',
        shadowOffset: {height: 0, width: 0},
        shadowOpacity: 0.7,
      },
      android: {
        elevation: 20,
      },
    }),
  },
  loaderText: {
    fontSize: 14,
    paddingTop: 5,
    color: '#fff',
  },
});
