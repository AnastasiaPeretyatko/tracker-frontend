import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import WeekProgress from '@/features/WeekProgress/WeekProgress';
import TextUI from '@/shared/ui/TextUI';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

interface Props {
  hobby: Hobbies;
}

const HobbyCard = ({ hobby }: Props) => {
  const router = useRouter();

  const onClickInfoPage = () => {
    router.push(`/hobbies/${hobby._id.toString()}`);
  };

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
      <TextUI onPress={onClickInfoPage} size="base">
        {hobby.title}
      </TextUI>
      <WeekProgress hobby={hobby} />
    </View>
  );
};

export default HobbyCard;
