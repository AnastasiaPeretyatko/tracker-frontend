import React, { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';
import { COLOR } from '../common/tokens';

type Props = {
  type: 'h1' | 'h2' | 'h3';
  children: ReactNode | string;
};

const Heading = ({ type, children }: Props) => {
  return <Text style={[styles.base, styles[type]]}>{children}</Text>;
};

const styles = StyleSheet.create({
  base: {
    textTransform: 'uppercase',
    color: COLOR.GRAY_PRIMARY,
  },
  h1: {
    fontWeight: 700,
    fontSize: 20,
  },
  h2: {
    fontWeight: 600,
    fontSize: 18,
  },
  h3: {
    fontWeight: 700,
    fontSize: 16,
  },
});

export default Heading;
