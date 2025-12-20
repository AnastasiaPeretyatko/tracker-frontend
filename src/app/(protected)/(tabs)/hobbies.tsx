import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import Button from '@/shared/ui/Button/Button';
import TextUI from '@/shared/ui/TextUI';
import HobbyCard from '@/widgets/HobbyCard/HobbyCard';
import { useQuery } from '@realm/react';
import { useRouter } from 'expo-router';
import moment from 'moment';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const HobbiesPage = () => {
  const router = useRouter();
  const hobbies = useQuery(Hobbies);

  const currentDay = moment().format('LL');

  const last5Days = Array.from({ length: 5 }, (_, i) =>
    moment()
      .subtract(4 - i, 'days')
      .format('ddd'),
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View>
          <TextUI size="md">Hobbie</TextUI>
          <TextUI size="sm" variant="describe">
            {currentDay}
          </TextUI>
        </View>
        <Button variant="add_task" onPress={() => router.push('/hobbies/new')}>
          +
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <View
          style={{
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-between',
          }}
        >
          {last5Days.map((day) => (
            <TextUI size="sm" key={day} variant="describe">
              {day}
            </TextUI>
          ))}
        </View>
      </View>
      {hobbies.length === 0 ? (
        <View>
          <TextUI size="sm">You don't have any habits yet.</TextUI>
        </View>
      ) : (
        <FlatList
          data={hobbies}
          style={{ flexDirection: 'column', flex: 1 }}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({ item }) => <HobbyCard hobby={item} />}
        />
      )}

      {/* <Button
        label="Add task"
        variant="primary"
        onPress={() => router.push('/hobbies/new')}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    gap: 16,
    position: 'relative',
    flex: 1,
  },
  header: {
    // flexDirection: 'column',
    // alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HobbiesPage;
