import {Alert, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {Input, Button, Radio, RadioGroup} from '@ui-kitten/components';
import CustomDatePicker from '../../components/uı/customDatePicker';

const AddTask = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          description: '',
          startDate: null,
          endDate: null,
          category: null,
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values, null, 2))}>
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View>
            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.title}
              label={'Title'}
              placeholder=""
              onChangeText={handleChange('title')}
            />

            <Input
              size="large"
              style={{marginVertical: 10}}
              value={values.description}
              label={'Description'}
              placeholder=""
              onChangeText={handleChange('description')}
            />

            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.startDate}
              label={'Start Date'}
              onSelectDate={date => setFieldValue('startDate', date)}
            />

            <CustomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.endDate}
              label={'End Date'}
              onSelectDate={date => setFieldValue('endDate', date)}
            />

            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio status="success">Software</Radio>
              <Radio status="success">Design</Radio>
              <Radio status="success">Operations</Radio>
            </RadioGroup>

            <Button
              status="success"
              style={{marginTop: 30}}
              onPress={handleSubmit}>
              CREATE
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
