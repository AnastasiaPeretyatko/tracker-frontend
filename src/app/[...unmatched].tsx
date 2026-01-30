import TextUI from '@/shared/ui/TextUI';
import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const UnmatchedCustom = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
      }}
    >
      <TextUI size="lg">404</TextUI>
      <TextUI size="base">Something went wrong.</TextUI>
      <Link href="/(tabs)/index">
        <TextUI>Home</TextUI>
      </Link>
    </View>
  );
};

export default UnmatchedCustom;
