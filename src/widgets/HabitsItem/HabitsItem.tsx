import { ITask } from '@/entities/tasks/model/task.state';
import TextUI from '@/shared/ui/TextUI';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const HabitsItem = ({ task }: { task: ITask }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ flexDirection: 'column', gap: 4 }}>
        <TextUI size="base">{task.title}</TextUI>
        <TextUI size="sm">{task.description}</TextUI>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '50%',
          justifyContent: 'space-between',
        }}
      >
        <View style={styles.square_active}>
          <View style={styles.square_inactive} />
        </View>
        <View style={styles.square_active} />
        <View style={styles.square_active} />
        <View style={styles.square_active} />
        <View style={styles.square_active} />
        <View style={styles.square_active} />
        <View style={styles.square_active} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  square_active: {
    borderRadius: 5,
    // backgroundColor: 'green',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square_inactive: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
});

export default HabitsItem;
