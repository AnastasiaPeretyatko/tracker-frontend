import 'react-native-get-random-values';
import { AuthProvider } from '@/shared/utils/authContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';
import Toast from 'react-native-toast-message';
import { RealmProvider } from '@realm/react';
import { Task } from '@/entities/tasks/model/task.entity';
import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import { HobbiesLog } from '@/entities/hobbies_log/model/hobbies_log.entity';
import { HobbiesSchedule } from '@/entities/hobbies_schedule/model/hobbies_schedule.entity';

moment.locale('ru');

export default function RootLayout() {
  return (
    <RealmProvider
      schema={[Task, Hobbies, HobbiesLog, HobbiesSchedule]}
      schemaVersion={1}
    >
      <AuthProvider>
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false, statusBarStyle: 'dark' }}>
          <Stack.Screen name="(protected)" />
          <Stack.Screen name="login" options={{ animation: 'none' }} />
          <Stack.Screen name="register" options={{ animation: 'none' }} />
        </Stack>
      </AuthProvider>
      <Toast position="top" bottomOffset={20} />
    </RealmProvider>
  );
}
