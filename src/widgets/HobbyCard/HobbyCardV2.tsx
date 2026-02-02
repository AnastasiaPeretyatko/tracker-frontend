import { Hobbies } from '@/entities/hobbies/model/hobbies.entity';
import { DAYS } from '@/shared/common/enum';
import { COLOR } from '@/shared/common/tokens';
import FireIcon from '@/shared/icons/FireIcon';
import Heading from '@/shared/ui/Heading';
import TextUI from '@/shared/ui/TextUI';
import moment from 'moment';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  hobby: Hobbies;
};

const HobbyCardV2 = ({ hobby }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <FireIcon width={20} />
          <TextUI>48</TextUI>
        </View>
        <Heading type="h4">WEEKS</Heading>
      </View>
      <TextUI>{hobby.title}</TextUI>
      <WeeksProgress hobby={hobby} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '49%',
    flex: 1,
    borderRadius: 12,
    backgroundColor: 'pink',
    gap: 8,
    padding: 8,
  },
});

const WeeksProgress = ({ hobby }: { hobby: Hobbies }) => {
  const daysOfWeek = Array.from({ length: 7 }, (_, i) =>
    moment().startOf('week').add(i, 'days'),
  );

  console.log({ daysOfWeek });

  // const hobbyLogs = useQuery(HobbiesLog).filtered('hobbies == $0', hobby);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flexDirection: 'row', gap: 1 }}>
        {DAYS.map((d) => {
          // const logForDay = hobbyLogs?.find((log) => d.isSame(log.date, 'day'));
          return (
            <View style={[weekStyles.base, weekStyles.isActive]}>
              <TextUI size="xs">{d}</TextUI>
            </View>
          );
        })}
      </View>
      <TextUI size="xs" variant="describe">
        2/7
      </TextUI>
    </View>
  );
};

const weekStyles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 5,
  },
  isActive: {
    backgroundColor: 'red',
  },
  notActive: {
    borderWidth: 1,
    borderColor: COLOR.GRAY_PRIMARY,
  },
});

export default HobbyCardV2;
