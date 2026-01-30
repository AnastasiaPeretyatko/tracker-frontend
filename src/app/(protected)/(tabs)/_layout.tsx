import CustomeNavbar from '@/features/CustomNavbar/CustomeNavbar';
import { Tabs } from 'expo-router';

export default function ProtectedLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomeNavbar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="hobbies" options={{ title: 'Hobbies' }} />
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
