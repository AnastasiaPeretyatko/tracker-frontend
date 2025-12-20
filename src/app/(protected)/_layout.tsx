import { AuthContext } from '@/shared/utils/authContext';
import { Redirect, Stack } from 'expo-router';
import { useContext } from 'react';

export default function ProtectedLayout() {
  const authState = useContext(AuthContext);

  if (!authState.isReady) {
    return null;
  }

  if (!authState.isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="task/new"
        options={{
          presentation: 'formSheet',
          gestureDirection: 'vertical',
          animation: 'slide_from_bottom',
          sheetGrabberVisible: true,
          sheetInitialDetentIndex: 0,
          sheetAllowedDetents: [0.5, 1.0],
          keyboardHandlingEnabled: false,
        }}
      />
      <Stack.Screen
        name="hobbies/new"
        options={{
          presentation: 'modal',
          gestureDirection: 'vertical',
          animation: 'default',
          // sheetGrabberVisible: true,
          // sheetInitialDetentIndex: 0,
          // sheetAllowedDetents: [0.7, 1.0],
          // keyboardHandlingEnabled: false,
        }}
      />
    </Stack>
  );
}
