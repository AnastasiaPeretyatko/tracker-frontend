import HobbyAnalitics from '@/features/HobbyAnalitics';
import HobbyDetails from '@/features/HobbyDetails';
import Tabs from '@/shared/ui/Tabs';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const listHobbiesPage = [
  {
    key: 1,
    title: 'Info',
    children: <HobbyDetails />,
  },
  {
    key: 2,
    title: 'Analitics',
    children: <HobbyAnalitics />,
  },
];

const InfoHobbiePage = () => {
  return (
    <SafeAreaView>
      <Tabs list={listHobbiesPage} />
    </SafeAreaView>
  );
};

export default InfoHobbiePage;
