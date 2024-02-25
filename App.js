import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from './src/components/header';
import generalStyles from './src/utils/generalStyles';
import Input from './src/components/input';
import {colors} from './src/utils/constants';
import Todo from './src/components/todo';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      date: new Date(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText('');
  };

  return (
    <SafeAreaView style={[generalStyles.flex1, generalStyles.bgWhite]}>
      <Header title="My Todo App" />
      <Input
        value={text}
        onChangeText={text => setText(text)}
        placeholder="Write..."
        hasIcon
        onIconPress={addTodo}
      />
      <View style={styles.todosWrapper}>
        {todos.length === 0 ? (
          <Text style={styles.emptyText}>You have no todos yet!</Text>
        ) : (
          <ScrollView style={styles.scrollView}>
            {todos?.map(todo => (
              <Todo
                todos={todos}
                setTodos={setTodos}
                key={todo?.id}
                todo={todo}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  todosWrapper: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default App;
