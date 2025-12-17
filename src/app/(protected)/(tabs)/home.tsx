import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import WeekCalendar from '../../../widgets/WeekCalandar/WeekCalendar';
import Button from '../../../shared/ui/Button/Button';
import { useRouter } from 'expo-router';

moment.locale('ru');

const Home = () => {
  const router = useRouter();
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
      <View style={styles.wrapper_header}>
        <Text style={styles.header}>{moment().format('dd').toUpperCase()}</Text>
        <View style={styles.wrapper_date}>
          <Text style={styles.date}>{moment().format('MMMM D')}</Text>
          <Text style={styles.date}>{moment().format('YYYY')}</Text>
        </View>
      </View>
      <WeekCalendar />
      <Button
        label="+"
        variant="add_task"
        onPress={() => router.push('/task/new')}
      />
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
