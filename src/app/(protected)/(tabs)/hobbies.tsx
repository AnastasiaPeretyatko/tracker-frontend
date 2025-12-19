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

  const last5Days = Array.from({ length: 5 }, (_, i) =>
    moment()
      .subtract(4 - i, 'days')
      .format('ddd'),
  );

  return (
    <View style={{ flexDirection: 'column', gap: 16, position: 'relative' }}>
      <View style={styles.header}>
        <TextUI size="lg">Hobby</TextUI>
        <View
          style={{
            flexDirection: 'row',
            width: '50%',
            justifyContent: 'space-between',
          }}
        >
          {last5Days.map((day) => (
            <TextUI size="sm" key={day}>
              {day.toUpperCase()}
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
          renderItem={({ item }) => <HobbyCard hobby={item} />}
        />
      )}

      <Button
        label="Add task"
        variant="primary"
        onPress={() => router.push('/hobbies/new')}
      />
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

export default HobbiesPage;
