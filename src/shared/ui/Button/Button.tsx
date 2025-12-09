import React from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

type Props = {
  label: string;
  variant?: 'base' | 'primary' | 'add_task';
} & PressableProps;

const Button = ({ label, variant = 'base', ...props }: Props) => {
  return (
    <Pressable style={[styles.base, styles[variant]]} {...props}>
      <Text style={styles[variant]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 6,
  },

  primary: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 16,
  },
  add_task: {
    width: 'auto',
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 16,
  },
});

export default Button;
