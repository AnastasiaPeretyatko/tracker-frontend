import { Tabs } from 'expo-router';
import CustomeNavbar from '../../../features/CustomNavbar/CustomeNavbar';

export default function ProtectedLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomeNavbar {...props} />}
      screenOptions={{
        headerShown: false,
        sceneStyle: { paddingTop: 50, paddingHorizontal: 20 },
      }}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
