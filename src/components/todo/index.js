import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/constants';

const Todo = ({todo = {}}) => {
  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{todo?.text}</Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('us-US')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity>
          <Icon
            name={todo?.completed ? 'checkcircle' : 'checkcircleo'}
            size={25}
            color={colors.green}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={25} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="closecircle" size={25} color={colors.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
