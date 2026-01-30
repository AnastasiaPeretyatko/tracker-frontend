import React, { ReactNode, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button/Button';
import { COLOR } from '../common/tokens';

interface Props {
  list: {
    key: number;
    title: string;
    children: ReactNode;
  }[];
}

const Tabs = ({ list }: Props) => {
  const [isSelected, setIsSelected] = useState(list[0].title);

  return (
    <View style={{ flexDirection: 'column', gap: 10 }}>
      <View style={styles.container}>
        {list.map((item) => (
          <Button
            key={item.key + item.title}
            variant="tab"
            isSelected={isSelected === item.title}
            onPress={() => setIsSelected(item.title)}
          >
            {item.title}
          </Button>
        ))}
      </View>
      {list.find((item) => item.title === isSelected)?.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 4,
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: COLOR.INPUT_BG,

    // iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    // Android
    elevation: 4,
  },
});

export default Tabs;
