import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppColors from '../../theme/color';
import {Divider, Button} from '@ui-kitten/components';
import moment from 'moment';
import {setCategory} from '../../utils/function';
import {status, taskValues} from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TaskDetail = ({route}) => {
  const {item} = route?.params;

  //DELETE BUTONU // Tasklari Silmek icin

  const deleteTask = async () => {
    try {
      //mevcut gorevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');
      let myTask = savedTasks ? JSON.parse(savedTasks) : [];

      if (savedTasks === null) {
        return; //kayitli gorev yoksa fonksiyonu durdur
      }

      const tasks = JSON.parse(savedTasks);
      // Silinecek gorevi filtreli
      const filteredTasks = tasks.filter(task => task.id !== item.id);
      //filtrelenmis gorevleri depola
      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));
      console.log('Gorev Silindi');
    } catch (error) {
      console.log('G,rev silinirken hata olustu:', error);
    }
  };

  // UPDATE BUTONLARI icin Guncelleme

  const updateTask = async newStatus => {
    try {
      //mevcut gorevleri al
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks == null) {
        return; //kayitli gorev yoksa fonksiyonu durdur
      }
      const tasks = JSON.parse(savedTasks);

      //guncellenecek gorevleri bul
      const updatedTask = tasks.map(task => {
        if (task.id === item.id) {
          return {...task, status: newStatus}; //yeni durumu uygula
        }
        return task;
      });

      //guncellenmis gorevleri depola
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTask));
      console.log('Gorev Guncellendi', updateTask);
    } catch (error) {
      console.log('Gorev guncellinirken hata olustu:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Title:</Text>
          <Text>{item.title}</Text>
        </View>
        <Divider />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Description:</Text>
          <Text>{item.description}</Text>
        </View>
        <Divider />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Start Date:</Text>
          <Text> {moment(item.startDate).format('YYYY/MM/DD ')}</Text>
        </View>
        <Divider />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>End Date:</Text>
          <Text> {moment(item.endDate).format('YYYY/MM/DD ')}</Text>
        </View>
        <Divider />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Category:</Text>
          <Text>{setCategory(item.category)}</Text>
        </View>
        <Divider />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Status:</Text>
          <Text>
            {taskValues.find(task => task.status === item?.status).title}
          </Text>
        </View>
        <Divider />
      </ScrollView>

      <View>
        <Button
          onPress={() => updateTask(status.PENDING)}
          style={styles.button}
          status="primary">
          START
        </Button>
        <Button
          onPress={() => updateTask(status.COMLETED)}
          style={styles.button}
          status="success">
          COMPLATED
        </Button>
        <Button
          onPress={() => updateTask(status.CANCEL)}
          style={styles.button}
          status="danger">
          CANCEL
        </Button>
        <Button onPress={deleteTask} style={styles.button} status="warning">
          DELETE
        </Button>
      </View>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    padding: 10,
  },
  button: {
    marginVertical: 5,
  },
});
