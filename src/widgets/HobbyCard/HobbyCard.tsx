import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import WeekProgress from '@/features/WeekProgress/WeekProgress';
import TextUI from '@/shared/ui/TextUI';
import React from 'react';
import { View } from 'react-native';

interface Props {
  hobby: Hobbies;
}

const HobbyCard = ({ hobby }: Props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View>
        <TextUI size="base">{hobby.title}</TextUI>
        <TextUI size="sm">{hobby.description}</TextUI>
      </View>
      <WeekProgress hobby={hobby} />
    </View>
  );
};

export default HobbyCard;
