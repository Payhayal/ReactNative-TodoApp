import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Header from './src/components/header';
import styles from './src/components/header/style';
import generalStyles from './src/utils/generalStyles';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const App = () => {
  return (
    <SafeAreaView style={generalStyles.flex1}>
      <Header title="My Todo App" />
      <View>
        <Text>week1 heyyy!!!</Text>
        <Icon name="pluscircle" size={25} color="red" />
      </View>
    </SafeAreaView>
  );
};

export default App;
