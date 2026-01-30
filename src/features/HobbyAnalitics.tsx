import AnaliticsYear from '@/widgets/AnaliticsYear';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

const HobbyAnalitics = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <AnaliticsYear hobbyId={id} />
    </View>
  );
};

export default HobbyAnalitics;
