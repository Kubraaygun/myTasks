import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FloatActionButton from '../../components/uı/floatActionButton';
import {ADDTASKS} from '../../utils/routes';

ADDTASKS;

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>home</Text>
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
