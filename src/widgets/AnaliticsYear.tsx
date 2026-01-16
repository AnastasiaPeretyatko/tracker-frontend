import React from 'react';
import { StyleSheet, View } from 'react-native';
import AnaliticsMonth from './AnaliticsMonth';
import useHobbyLogsByMonth from '@/shared/hooks/useHobbyLogsByMonth';
import { month } from '@/shared/common/enum';

interface Props {
  hobbyId: string;
}

const AnaliticsYear = ({ hobbyId }: Props) => {
  const hobbyLogs = useHobbyLogsByMonth(hobbyId);

  console.log();

  return (
    <View style={styles.wrapper}>
      {month.map((m, index) => (
        <AnaliticsMonth
          key={index}
          month={m}
          numMonth={index + 1}
          logs={
            hobbyLogs[`${2025}-${String(index + 1).padStart(2, '0')}`] || []
          }
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 4,
  },
});

export default AnaliticsYear;
