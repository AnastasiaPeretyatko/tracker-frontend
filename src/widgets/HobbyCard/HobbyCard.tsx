import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import WeekProgress from '@/features/WeekProgress/WeekProgress';
import FiCalendar from '@/shared/icons/FiCalendar';
import FireIcon from '@/shared/icons/FireIcon';
import TextUI from '@/shared/ui/TextUI';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';

interface Props {
  hobby: Hobbies;
}

const HobbyCard = ({ hobby }: Props) => {
  const router = useRouter();
  const [isFire, setIsFire] = useState(true);

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
        padding: 10,
        paddingHorizontal: 16,
        // height: 60,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          maxWidth: '50%',
        }}
      >
        <View
          style={{
            padding: 16,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            backgroundColor: '#f33f3f4a',
          }}
        >
          <FiCalendar />
        </View>
        <View style={{ width: '100%' }}>
          <TextUI onPress={onClickInfoPage} size="sm">
            {hobby.title}
          </TextUI>
          {isFire ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FireIcon width={16} color={'orange'} />
              <TextUI variant="describe" size="sm">
                14 days
              </TextUI>
            </View>
          ) : (
            <TextUI variant="describe" size="sm">
              Every day
            </TextUI>
          )}
        </View>
      </View>
      <WeekProgress hobby={hobby} />
    </View>
  );
};

export default HobbyCard;
