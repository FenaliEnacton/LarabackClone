import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from '@assets/icons';
import {Theme} from '@assets/Theme';

const RadioButton = ({gen, onChange, selectedIndex}) => {
  const [checked, setChecked] = useState(selectedIndex);
  var gender = ['female', 'male'];
  return (
    <>
      <View style={styles.btn}>
        {gender.map((gender, key) => {
          return (
            <View key={gender}>
              {checked == key ? (
                <TouchableOpacity style={styles.btn}>
                  <Icon.FontAwesome
                    name={'dot-circle-o'}
                    size={15}
                    color={Theme.COLORS.primary}
                  />
                  <Text style={styles.text}>{gender}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setChecked(key);
                    gen(checked);
                    onChange(gender);
                  }}
                  style={styles.btn}>
                  <Icon.FontAwesome
                    name={'circle-o'}
                    size={15}
                    color={Theme.COLORS.primary}
                  />
                  <Text style={styles.text}>{gender}</Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  radio: {
    flexDirection: 'row',
  },
  img: {
    height: 20,
    width: 20,
    marginHorizontal: 5,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 70,
    //backgroundColor: 'red',
    marginHorizontal: 10,
    // justifyContent: 'space-around',
  },
  text: {
    ...Theme.fontStyles.h3Regular,
    marginLeft: 4,
    color: Theme.COLORS.grey,
    textTransform: 'capitalize',
  },
});

export default RadioButton;
