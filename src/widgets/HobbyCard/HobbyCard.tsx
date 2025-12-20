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
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 4,
        height: 60,
      }}
    >
      <View>
        <TextUI size="base">{hobby.title}</TextUI>
        {hobby.description && (
          <TextUI size="sm" variant="describe" numberOfLines={1}>
            {hobby.description}
          </TextUI>
        )}
      </View>
      <WeekProgress hobby={hobby} />
    </View>
  );
};

export default HobbyCard;
