import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';

const Input = ({
  placeholder = 'write somthing',
  keyboardType = 'default',
  multiline = false,
  hasIcon = false,
  iconName = 'pluscircle',
  onIconPress = () => {},
  value = '',
  onChangeText = () => {},
}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        multiline={multiline}
        value={value}
        onChangeText={onChangeText}
      />
      {hasIcon && (
        <TouchableOpacity onPress={onIconPress}>
          <Icon name={iconName} style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
