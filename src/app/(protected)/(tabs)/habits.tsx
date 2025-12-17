import TextUI from '@/shared/ui/TextUI';
import HabitsList from '@/widgets/HabitsItem/HabitsList';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const DAY_WEEK = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const Habits = () => {
  return (
    <View style={{ flexDirection: 'column', gap: 16 }}>
      <View style={styles.header}>
        <TextUI size="lg">Habits</TextUI>
        <View
          style={{
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-between',
          }}
        >
          {DAY_WEEK.map((day) => (
            <TextUI size="sm" key={day}>
              {day}
            </TextUI>
          ))}
        </View>
      </View>
      <HabitsList />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Habits;
