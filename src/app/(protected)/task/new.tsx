import Badget from '@/shared/ui/Badget';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Input/Input';
import TextUI from '@/shared/ui/TextUI';
import React from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { http } from '@/shared/api';
import { useRouter } from 'expo-router';

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
  const {
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await http.post('/tasks', data);
      console.log({ response, data: response.data });
    } catch (error) {
      console.log(error);
    }
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
          <Controller
            control={control}
            name="title"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Title"
                variant="outline"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="description"
            rules={{ required: true }}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Description"
                variant="outline"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          <TextUI size="sm">Schedule</TextUI>
          <View style={{ flexWrap: 'wrap', flexDirection: 'row', gap: 10 }}>
            {Object.values(TASK_SCHEDULE_TYPE).map((type) => (
              <Badget
                key={type}
                onPress={() => setValue('type', type)}
                selected={type === watch('type')}
              >
                {type}
              </Badget>
            ))}
          </View>
        </View>
        <Button
          label="Save"
          variant="primary"
          onPress={handleSubmit(onSubmit)}
        />
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
