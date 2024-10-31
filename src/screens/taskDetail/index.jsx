import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TaskDetail = ({route}) => {
  const {item} = route?.params;
  return (
    <View>
      <Text>taskDetail</Text>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({});
