import React from 'react';
import {StyleSheet} from 'react-native';
import {Theme} from '@assets/Theme';
import FocusAwareStatusBar from '../FocusAwareStatusBar';
import {SafeAreaView} from 'react-native-safe-area-context';
const Container = props => {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      <>
        <FocusAwareStatusBar
          translucent
          backgroundColor={
            props.statusBarColor ? props.statusBarColor : 'transparent'
          }
          barStyle={props.barStyle ? props.barStyle : 'light-content'}
        />
        {props.children}
      </>
    </SafeAreaView>
  );
};
export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'transparent',
    backgroundColor: Theme.COLORS.background,
  },
});
