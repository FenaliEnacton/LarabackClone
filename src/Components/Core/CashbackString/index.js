import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  View,
  Text,
  Image,
} from 'react-native';
import Icon from '@assets/icons';
import {Theme} from '@assets/Theme';
import {AppImages} from '../../../Assets/Images';

const CashbackString = (props) => {
  return (
    <View style={[styles.container, props.cb_style]}>
      {/* <Icon.FontAwesome
        name={'money'}
        style={[styles.icon, props.icon]}
        color={Theme.COLORS[props.color ? props.color : 'secondary']}
        size={props.icon_size ? props.icon_size : 14}
      /> */}
      <Image
        source={AppImages.cb_string_icon}
        style={[
          styles.icon,
          props.icon,
          {
            height: props.icon_size ? props.icon_size : 14,
            width: props.icon_size ? props.icon_size : 14,
          },
        ]}
      />
      <Text style={[styles.cb_text, props.cb_text]}>
        {props.cashback_string}
      </Text>
    </View>
  );
};

export default CashbackString;

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'flex-start',
    marginTop: 2,
    marginRight: 5,
    height: 14,
    width: 14,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cb_text: {
    ...Theme.fontStyles.h3Bold,
    color: Theme.COLORS.secondary,
  },
});
