import { http } from '@/shared/api';
import { useNotification } from '@/shared/hooks/useNotification';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import TextUI from '@/shared/ui/TextUI';
import { AxiosError } from 'axios';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const AddTaskModal = () => {
  const { showErrorMessage, showSuccessMessage } = useNotification();

  const onSubmit = async () => {
    try {
      const { data } = await http.post('/tasks', {
        title: 'Task 1',
        description: 'Description 1',
      });

      showSuccessMessage({
        title: 'Task created successfully',
      });

      console.log('Task created', { data });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log('Error', error.response?.data.message, {
          error: error.response?.data,
        });
        showErrorMessage({
          title: error.response?.data.message,
        });
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextUI size="md">Create a reminded</TextUI>
      <Input placeholder="Enter title" />
      <Input placeholder="Enter description" />
      <Button
        label="Create"
        variant="primary"
        onPress={() => {
          onSubmit();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    gap: 16,
  },
});

export default AddTaskModal;
