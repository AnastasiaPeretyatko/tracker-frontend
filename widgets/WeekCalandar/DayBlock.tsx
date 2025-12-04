import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { formatDayName } from '../../shared/helpers';
import moment from 'moment';

type Props = {
  date: moment.Moment;
};

const DayBlock = ({ date }: Props) => {
  const isToday = moment().isSame(date, 'day');
  console.log({ isToday });

  return (
    <View style={[styles.wrapper, isToday && styles.wrapper_today]}>
      <Text style={isToday && { color: 'blue', fontWeight: 'bold' }}>
        {formatDayName(date)}
      </Text>
      <Text style={isToday && { fontWeight: 'bold' }}>
        {moment(date).format('D')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid',
    paddingVertical: 5,
    paddingHorizontal: 12,
    alignItems: 'center',
    gap: 5,
  },
  wrapper_today: {
    borderColor: 'black',
    borderWidth: 2,
  },
  today_text: {
    fontWeight: 'bold',
  },
});

export default DayBlock;
