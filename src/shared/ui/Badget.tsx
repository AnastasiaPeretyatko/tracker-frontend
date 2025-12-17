import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import TextUI from './TextUI';
import BsCheck from '../icons/BsCheck';

interface Props {
  size?: 'sm' | 'md' | 'lg' | 'base';
  children: React.ReactNode | string;
  onPress?: () => void;
  selected?: boolean;
}

const Badget = ({ size, children, onPress, selected }: Props) => {
  return (
    <Pressable style={styles.wrapper} onPress={onPress}>
      {selected && <BsCheck />}
      <TextUI size={size}>{children}</TextUI>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    paddingHorizontal: 6,
    paddingVertical: 2,
    flexDirection: 'row',
  },
});

export default Badget;
