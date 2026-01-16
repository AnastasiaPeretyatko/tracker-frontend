import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  isComplited?: boolean;
  isDate?: boolean;
}

const ComplitedBlock = ({ isDate, isComplited = false }: Props) => {
  return (
    <View
      style={
        !isDate
          ? isComplited
            ? styles.complited
            : styles.notComplited
          : styles.base
      }
    />
  );
};

const styles = StyleSheet.create({
  base: {
    width: 12,
    height: 12,
  },
  notComplited: {
    width: 12,
    height: 12,
    borderRadius: 4,
    backgroundColor: 'gray',
  },
  complited: {
    borderRadius: 4,
    backgroundColor: '#4AD5A0',
    width: 12,
    height: 12,
  },
});

export default ComplitedBlock;
