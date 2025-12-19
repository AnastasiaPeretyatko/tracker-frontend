import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import Button from '../../../shared/ui/Button/Button';
import { useRouter } from 'expo-router';
import { useQuery } from '@realm/react';
import { Task } from '@/entities/tasks/model/task.entity';

moment.locale('ru');

const Home = () => {
  const router = useRouter();
  const tasks = useQuery(Task);

  return (
    <View
      style={{
        gap: 16,
        position: 'relative',
        height: '100%',
        flexDirection: 'column',
        flex: 1,
      }}
    >
      {/* <Link href="/task/new2">Add task</Link>
      <View style={styles.wrapper_header}>
        <Text style={styles.header}>{moment().format('dd').toUpperCase()}</Text>
        <View style={styles.wrapper_date}>
          <Text style={styles.date}>{moment().format('MMMM D')}</Text>
          <Text style={styles.date}>{moment().format('YYYY')}</Text>
        </View>
      </View>
      <WeekCalendar />*/}
      <Button
        label="+"
        variant="add_task"
        onPress={() => router.push('/task/new')}
      />
      <Text>TASK LIST</Text>
      <Text>{JSON.stringify(tasks, null, 2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  wrapper_date: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default Home;
