import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import Button from '@/shared/ui/Button/Button';
import TextUI from '@/shared/ui/TextUI';
import CreateHobbyModal from '@/widgets/CreateHobbyModal';
import HobbyCard from '@/widgets/HobbyCard/HobbyCard';
import BottomSheet from '@gorhom/bottom-sheet';
import { useQuery } from '@realm/react';
import moment from 'moment';
import React, { useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const HobbiesPage = () => {
  const hobbies = useQuery(Hobbies);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const currentDay = moment().format('LL');

  const last5Days = Array.from({ length: 5 }, (_, i) =>
    moment()
      .subtract(4 - i, 'days')
      .format('ddd'),
  );

  const openSheet = () => {
    bottomSheetRef.current?.snapToIndex(1);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, height: '100%' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Button onPress={openSheet}>ADD</Button>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <View>
              <TextUI size="md">Hobbie</TextUI>
              <TextUI size="sm" variant="describe">
                {currentDay}
              </TextUI>
            </View>
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
        </View>
        <CreateHobbyModal bottomSheetRef={bottomSheetRef} />
      </SafeAreaView>
    </GestureHandlerRootView>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default HobbiesPage;
