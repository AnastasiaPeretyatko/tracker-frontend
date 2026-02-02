import React from 'react';
import { StyleSheet, Text, TextProps, View } from 'react-native';

type Props = {
  size?: 'sm' | 'md' | 'lg' | 'base' | 'xs';
  children: React.ReactNode | string;
  variant?: 'describe';
} & TextProps;

const TextUI = ({ children, size = 'base', variant, ...props }: Props) => {
  return (
    <Text style={[styles[size], variant && styles[variant]]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  kek: {
    fontFamily: 'Roboto',
  },
  xs: {
    fontSize: 14,
  },
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
  describe: {
    // fontSize: 16,
    color: 'gray',
  },
});

export default TextUI;
