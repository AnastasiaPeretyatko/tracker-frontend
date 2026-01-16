import { COLOR } from '@/shared/common/tokens';
import React, { ReactNode } from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';

type Props = {
  label?: string;
  variant?: 'base' | 'primary' | 'add_task' | 'tab';
  loading?: boolean;
  children?: ReactNode | string;
  isSelected?: boolean;
} & PressableProps;

const Button = ({
  label,
  variant = 'base',
  loading,
  children,
  isSelected = false,
  ...props
}: Props) => {
  return (
    <Pressable
      style={[styles.base, styles[variant], isSelected && styles.selected]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? 'white' : 'black'} />
      ) : (
        <Text style={styles[`text_${variant}`]}>{children}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  base: {
    width: 'auto',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center', // 👈 вертикаль
    padding: 10,
    borderRadius: 6,
  },

  primary: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 16,
  },
  add_task: {
    width: 'auto',
    // position: 'absolute',
    // right: 0,
    // bottom: 100,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 16,
  },
  text_add_task: {
    color: 'white',
    fontSize: 16,
  },
  text_primary: {
    color: 'white',
    fontSize: 16,
  },
  tab: {
    flexGrow: 1,
  },
  selected: {
    backgroundColor: 'white',
  },
});

export default Button;
