/* eslint-disable @typescript-eslint/no-require-imports */
import 'react-native-get-random-values';
import { AuthProvider } from '@/shared/utils/authContext';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';
import 'moment/locale/ru';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { RealmProvider } from '@realm/react';
import { Task } from '@/entities/tasks/model/task.entity';
import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import { HobbiesLog } from '@/entities/hobbies_log/model/hobbies_log.entity';
import { HobbiesSchedule } from '@/entities/hobbies_schedule/model/hobbies_schedule.entity';
import { useFonts } from 'expo-font';

moment.locale('ru');

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto: require('../../assets/fonts/Roboto-VariableFont_wdth,wght.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

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
