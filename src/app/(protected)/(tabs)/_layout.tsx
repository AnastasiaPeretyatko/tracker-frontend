import CustomeNavbar from '@/features/CustomNavbar/CustomeNavbar';
import { Tabs } from 'expo-router';

export default function ProtectedLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomeNavbar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: { paddingTop: 50, paddingHorizontal: 20 },
      }}
    >
      <Tabs.Screen name="habits" options={{ title: 'Habits' }} />
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
