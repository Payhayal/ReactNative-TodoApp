import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/constants';

const Todo = ({todo = {}, todos = [], setTodos = () => {}}) => {
  const deleteTodo = () => {
    Alert.alert('Delete', `Are you sure you want to delete ${todo?.text}?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const filteredTodos = todos.filter(item => item.id !== todo.id);
          setTodos(filteredTodos);
        },
        style: 'destructive',
      },
    ]);
  };

  const changeCompleted = () => {
    Alert.alert(
      'Update',
      `Are you sure ${todo?.text} will be marked as ${
        todo.completed ? 'uncompleted' : 'completed'
      }?`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Update',
          onPress: () => {
            const UpdateArr = [];
            for (let i = 0; i < todos.length; i++) {
              if (todos[i]?.id !== todo.id) {
                UpdateArr.push(todos[i]);
              } else {
                const newTodo = {
                  ...todo,
                  completed: !todo.completed,
                };
                UpdateArr.push(newTodo);
              }
            }
            setTodos(UpdateArr);
          },
          style: 'destructive',
        },
      ],
    );
  };

  return (
    <View style={styles.todoWrapper}>
      <View style={styles.textWrapper}>
        <Text style={[styles.title, todo?.completed && styles.completedTitle]}>
          {todo?.text}
        </Text>
        <Text style={styles.date}>
          {new Date(todo?.date).toLocaleDateString('us-US')}
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <TouchableOpacity onPress={changeCompleted}>
          <Icon
            name={todo?.completed ? 'checkcircle' : 'checkcircleo'}
            size={25}
            color={colors.green}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="edit" size={25} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={25} color={colors.danger} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Todo;
