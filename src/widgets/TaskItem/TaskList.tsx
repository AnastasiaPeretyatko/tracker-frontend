import React from 'react';
import { FlatList } from 'react-native';
import TaskItem from './TaskItem';

const tasks = [
  {
    id: 1,
    title: 'Task 1',
    description: 'Description 1',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Task 2',
    description: 'Description 2',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Task 3',
    description: 'Description 3',
    isCompleted: false,
  },
];

const TaskList = () => {
  return (
    <FlatList
      data={tasks}
      style={{ flex: 1 }} // FlatList растягивается на весь родительский flex
      contentContainerStyle={{ paddingBottom: 80 }} // чтобы кнопка не закрывала задачи
      renderItem={({ item }) => <TaskItem task={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default TaskList;
