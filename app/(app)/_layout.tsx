import { Redirect, Stack } from 'expo-router';
import { useAtomValue } from 'jotai';
import { authAtom } from '../../entities/auth/model/auth.state';

export default function Layout() {
  const { token } = useAtomValue(authAtom);

  if (!token) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { paddingTop: 20, paddingHorizontal: 20 },
      }}
    >
      <Stack.Screen name="home" />
    </Stack>
  );
}
