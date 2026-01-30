import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import HabitsItem from './HabitsItem';
import { useAtom } from 'jotai/react';
import { tasksAtomWithFetch } from '@/entities/tasks/model/task.state';
import TextUI from '@/shared/ui/TextUI';

const HabitsList = () => {
  const [tasks, fetchTasks] = useAtom(tasksAtomWithFetch);

  // useEffect(() => {
  //   fetchTasks();
  // }, [fetchTasks]);

  if (tasks.isLoading) {
    return <TextUI>Loading...</TextUI>;
  }

  if (tasks.error) {
    return <TextUI>{tasks.error}</TextUI>;
  }

  if (tasks.tasks.length === 0) {
    return <TextUI>No tasks</TextUI>;
  }

  return (
    <FlatList
      data={tasks.tasks}
      // style={{ flex: 1 }} // FlatList растягивается на весь родительский flex
      contentContainerStyle={{ paddingBottom: 80 }} // чтобы кнопка не закрывала задачи
      renderItem={({ item }) => <HabitsItem task={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default HabitsList;
