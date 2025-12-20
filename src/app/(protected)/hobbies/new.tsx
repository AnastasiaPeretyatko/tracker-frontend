import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import TextUI from '@/shared/ui/TextUI';
import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useRealm } from '@realm/react';
import { useKeyboard } from '@/shared/hooks/useKeyboard';
import Badget from '@/shared/ui/Badget';
import { DatePicker } from '@/shared/ui/DatePicker';
import { TimerPicker } from 'react-native-timer-picker';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

enum TASK_SCHEDULE_TYPE {
  DAILY = 'daily',
  EVERY_N_DAYS = 'every_n_days',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  SPECIFIC_DATES = 'specific_dates',
}

const NewHobbiesPage = () => {
  const router = useRouter();
  const realm = useRealm();
  const { open } = useKeyboard();

  const [isVisibleDatePicker, setIsVisibleDatePicker] = React.useState(false);

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [type, setType] = React.useState('');

  const onSubmit = () => {
    realm.write(() => {
      realm.create('Hobbies', {
        _id: new Realm.BSON.UUID(),
        title,
        description,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    router.back();
  };

  return (
    <ScrollView>
      <View style={[styles.wrapper, { height: open ? '45%' : '45%' }]}>
        <View style={{ gap: 10 }}>
          <TextUI size="md">Create new hobby</TextUI>

          <Input
            lable="Title"
            placeholder="Title"
            onChangeText={(text) => setTitle(text)}
          />

          <Input
            multiline
            lable="Description"
            placeholder="Description"
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <TextUI variant="describe">Schedule</TextUI>
        <View
          style={{
            flexWrap: 'wrap',
            flexDirection: 'row',
            gap: 10,
            marginBottom: 10,
          }}
        >
          {Object.values(TASK_SCHEDULE_TYPE).map((t) => (
            <Badget
              size="sm"
              key={t}
              onPress={() => setType(t)}
              selected={t === (type as TASK_SCHEDULE_TYPE)}
            >
              {t}
            </Badget>
          ))}
        </View>
        <TextUI variant="describe">Time</TextUI>
        <Badget onPress={() => setIsVisibleDatePicker(!isVisibleDatePicker)}>
          Today
        </Badget>
        {isVisibleDatePicker && <DatePicker />}

        <Button
          label="Create"
          variant="primary"
          onPress={onSubmit}
          disabled={!title && !type}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    gap: 12,
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    gap: 10,
  },
});

export default NewHobbiesPage;
