import React from 'react';
import { StyleSheet, Text, TextProps, View } from 'react-native';

type Props = {
  size?: 'sm' | 'md' | 'lg' | 'base';
  children: React.ReactNode | string;
} & TextProps;

const TextUI = ({ children, size = 'base', ...props }: Props) => {
  return (
    <View>
      <Text style={[styles[size]]} {...props}>
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sm: {
    fontSize: 16,
  },
  md: {
    fontSize: 24,
  },
  lg: {
    fontSize: 32,
  },
  base: {
    fontSize: 18,
  },
  xl: {
    fontSize: 40,
  },
});

export default TextUI;
