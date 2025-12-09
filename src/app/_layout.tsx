import { AuthProvider } from '@/shared/utils/authContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';

moment.locale('ru');

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen
          name="(protected)"
          options={{
            statusBarStyle: 'dark',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
            animation: 'none',
          }}
        />
      </Stack>
    </AuthProvider>
  );
}
