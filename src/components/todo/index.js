import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../utils/constants';
import EditModal from '../editModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Todo = ({todo = {}, todos = [], setTodos = () => {}}) => {
  const [openModal, setOpenModal] = useState(false);
  const [willEditText, setWillEditText] = useState(todo.text);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const deleteTodo = () => {
    Alert.alert('Delete', `Are you sure you want to delete "${todo?.text}"?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          const filteredTodos = todos.filter(item => item.id !== todo.id);
          AsyncStorage.setItem('@todos', JSON.stringify(filteredTodos)).then(
            () => setTodos(filteredTodos),
          );
        },
        style: 'destructive',
      },
    ]);
  };

  const changeCompleted = () => {
    Alert.alert(
      'Update',
      `Are you sure "${todo?.text}" will be marked as ${
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
            AsyncStorage.setItem('@todos', JSON.stringify(UpdateArr)).then(() =>
              setTodos(UpdateArr),
            );
          },
          style: 'destructive',
        },
      ],
    );
  };

  const editTodo = () => {
    // VALIDATION
    if (willEditText === '') {
      setHasError(true);
      setErrorMsg('*Text field cannot be left empty');
      setTimeout(() => {
        setHasError(false);
        setErrorMsg('');
      }, 2000);
      return;
    }
    // UPDATE INPUT
    const tempArr = [];
    for (let i = 0; i < todos?.length; i++) {
      if (todos[i].id !== todo.id) {
        tempArr.push(todos[i]);
      } else {
        const updatedTodo = {
          ...todo,
          text: willEditText,
        };
        tempArr.push(updatedTodo);
      }
    }
    AsyncStorage.setItem('@todos', JSON.stringify(tempArr)).then(() => {
      setTodos(tempArr);
      setOpenModal(false);
    });
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
        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Icon name="edit" size={25} color={colors.bgPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteTodo}>
          <Icon name="closecircle" size={25} color={colors.danger} />
        </TouchableOpacity>
      </View>
      <EditModal
        willEditText={willEditText}
        setWillEditText={setWillEditText}
        visible={openModal}
        closeModal={() => setOpenModal(false)}
        onConfirm={editTodo}
        hasError={hasError}
        errorMsg={errorMsg}
      />
    </View>
  );
};

export default Todo;
