import { DAYS } from '@/shared/common/enum';
import { COLOR, VAR } from '@/shared/common/tokens';
import FiCalendar from '@/shared/icons/FiCalendar';
import Heading from '@/shared/ui/Heading';
import TextUI from '@/shared/ui/TextUI';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';

type Props = {
  selectedDay?: number[];
  onSelectedDay: (val: number[]) => void;
};

const BlockSelectionDay = ({ onSelectedDay, selectedDay = [] }: Props) => {
  const [checkedDay, setCheckedDay] = useState<number[]>(selectedDay);

  const onCheckedDay = (val: number) => {
    setCheckedDay((prev) => {
      const next = prev.includes(val)
        ? prev.filter((i) => i !== val)
        : [...prev, val].sort((a, b) => a - b);

      onSelectedDay(next);
      return next;
    });
  };

  return (
    <View
      style={{
        backgroundColor: COLOR.GRAY_LIGHT,
        borderRadius: VAR.BORDER_RADIUS.MD,
        padding: 10,
        width: '100%',
        gap: 10,
      }}
    >
      <View style={{ flexDirection: 'row', gap: 5 }}>
        <FiCalendar width={16} color={COLOR.GRAY_PRIMARY} />
        <Heading type="h3">Every</Heading>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        {DAYS.map((day, index) => (
          <Pressable
            key={index + day}
            onPress={() => onCheckedDay(index)}
            style={{
              borderRadius: '100%',
              width: 40,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: checkedDay?.includes(index)
                ? '#E82869'
                : COLOR.GRAY,
            }}
          >
            <TextUI size="sm">{day}</TextUI>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default BlockSelectionDay;
