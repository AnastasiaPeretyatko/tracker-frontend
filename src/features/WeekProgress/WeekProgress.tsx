import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import { HobbiesLog } from '@/entities/hobbies_log/model/hobbies_log.entity';
import { getCurrentWeek } from '@/shared/helpers';
import { useQuery, useRealm } from '@realm/react';
import moment from 'moment';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

interface Props {
  hobby: Hobbies;
}

const WeekProgress = ({ hobby }: Props) => {
  const week = getCurrentWeek();

  const last5Days = Array.from(
    { length: 5 },
    (_, i) => moment().subtract(4 - i, 'days'),
    // .format('ddd'),
  );

  const hobbyLogs = useQuery(HobbiesLog).filtered('hobbies == $0', hobby);

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '50%',
        justifyContent: 'space-between',
      }}
    >
      {last5Days.map((day) => {
        const logForDay = hobbyLogs?.find((log) => day.isSame(log.date, 'day'));

        return (
          <WeeklyProgressItem
            key={day.format('YYYY-MM-DD')}
            hobby={hobby}
            date={day}
            selected={!!logForDay?.completed}
          />
        );
      })}
    </View>
  );
};

const WeeklyProgressItem = ({
  hobby,
  selected,
  date,
}: {
  hobby: Hobbies;
  selected: boolean;
  date: moment.Moment;
}) => {
  const realm = useRealm();

  const onClick = () => {
    const start = date.clone().startOf('day').toDate();
    const end = date.clone().endOf('day').toDate();

    const existingLog = realm
      .objects('HobbiesLog')
      .filtered(
        'hobbies == $0 AND date >= $1 AND date <= $2',
        hobby,
        start,
        end,
      )[0];

    realm.write(() => {
      if (existingLog) {
        existingLog.completed = !existingLog.completed;
        existingLog.completedAt = existingLog.completed ? new Date() : null;
      } else {
        realm.create('HobbiesLog', {
          _id: new Realm.BSON.UUID(),
          hobbies: hobby,
          date: date.toDate(),
          completed: true,
          completedAt: new Date(),
        });
      }
    });
  };

  return (
    <Pressable onPress={onClick} style={styles.wrapper}>
      <View
        style={selected ? styles.checked : styles.not_checked}
        key={date.format('YYYY-MM-DD')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 22,
    height: 22,
  },
  checked: {
    borderRadius: 5,
    backgroundColor: '#4AD5A0',
    width: 20,
    height: 20,
  },
  not_checked: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'rgba(74, 213, 160, 0.4)',
  },
});

export default WeekProgress;
