import React from 'react';
import { FlatList, View } from 'react-native';
import { getCurrentWeek } from '../../shared/helpers';
import DayBlock from './DayBlock';

const WeekCalendar = () => {
  const week = getCurrentWeek();

  return (
    <View>
      <FlatList
        data={week}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        scrollEnabled={false}
        renderItem={({ item }) => <DayBlock date={item} />}
      />
    </View>
  );
};

export default WeekCalendar;
