import {FlatList, StyleSheet, Text, View, RefreshControl} from 'react-native';
import FloatActionButton from '../../components/uı/floatActionButton';
import {ADDTASKS} from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import TaskCard from '../../components/home/taskCard';

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [tasks, setTasks] = useState([]);

  const getTask = async () => {
    let myTask = [];
    try {
      const task = await AsyncStorage.getItem('task');
      myTask.push(JSON.parse(task));
      console.log(task);
      setTasks(myTask);
    } catch (error) {
      console.log(error);
    }
  };

  const onRefresh = () => {
    setRefreshing(true); //yenileme basladiginda refreshing true yap
    getTask(); //gorevleri yeniden al
    setRefreshing(false); //yenileme bittiginde refreshing stateini false yap
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => <TaskCard item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
