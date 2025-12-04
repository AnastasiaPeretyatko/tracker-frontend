import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Stack
          screenOptions={{
            statusBarStyle: 'dark',
            contentStyle: { backgroundColor: 'white' },
            headerShown: false,
            animation: 'fade',
          }}
        >
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
