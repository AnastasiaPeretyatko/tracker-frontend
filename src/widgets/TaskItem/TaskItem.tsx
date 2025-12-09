import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AdvancedCheckbox } from 'react-native-advanced-checkbox';

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

type Props = {
  task: Task;
};

const TaskItem = ({ task }: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  const onChangeStateCheckbox = (value: string | boolean) => {
    setIsChecked(!!value);
  };

  return (
    <View style={styles.wrapper}>
      <AdvancedCheckbox
        value={isChecked}
        onValueChange={onChangeStateCheckbox}
        size={24}
        checkedColor="black"
        uncheckedColor="black"
      />

      <View style={styles.wrapper_text}>
        <Text style={[styles.title, isChecked && styles.title_completed]}>
          {task.title}
        </Text>
        <Text style={styles.description}>{task.description}</Text>
      </View>
      <View>
        <Text>{task.id}</Text>
      </View>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 16,
    paddingHorizontal: 5,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 20,
    alignItems: 'flex-start',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3,
  },
  wrapper_text: {
    flexDirection: 'column',
    gap: 2,
    paddingVertical: 4,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  title_completed: {
    textDecorationLine: 'line-through',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});
