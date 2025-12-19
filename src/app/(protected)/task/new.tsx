import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import TextUI from '@/shared/ui/TextUI';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useRealm } from '@realm/react';

enum TASK_SCHEDULE_TYPE {
  DAILY = 'daily',
  EVERY_N_DAYS = 'every_n_days',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  SPECIFIC_DATES = 'specific_dates',
}

type Inputs = {
  title: string;
  description: string;
  type: TASK_SCHEDULE_TYPE;
};

const NewTaskPage = () => {
  const realm = useRealm();

  const [data, setData] = React.useState({
    title: '',
  });
  const router = useRouter();

  const onSubmit = () => {
    realm.write(() => {
      realm.create('Hibbies', {
        _id: new Realm.BSON.UUID(),
        title: data.title,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    });

    router.back();
  };

  const onClose = () => {
    router.back();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      contentContainerStyle={styles.container}
    >
      <View style={styles.sheet}>
        <View style={{ flex: 1, gap: 10 }}>
          <TextUI size="md">New task</TextUI>
          <Input
            placeholder="Title"
            onChangeText={(text) =>
              setData((prev) => ({ ...prev, title: text }))
            }
          />
        </View>
        <Button label="Save" variant="primary" onPress={onSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  sheet: {
    height: '50%', // половина экрана
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
});

export default NewTaskPage;
