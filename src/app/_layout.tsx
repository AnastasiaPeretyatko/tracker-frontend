import { AuthProvider } from '@/shared/utils/authContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import moment from 'moment';
import 'moment/locale/ru';
import React from 'react';
import Toast from 'react-native-toast-message';

moment.locale('ru');

export default function RootLayout() {
  return (
    <>
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
          <Stack.Screen
            name="register"
            options={{
              headerShown: false,
              animation: 'none',
            }}
          />
        </Stack>
      </AuthProvider>
      <Toast position="top" bottomOffset={20} />
    </>
  );
}
