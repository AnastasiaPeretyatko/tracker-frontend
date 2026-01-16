import TextUI from '@/shared/ui/TextUI';
import { View } from 'react-native';
import ComplitedBlock from './ComplitedBlock';
import { useMemo } from 'react';
import moment from 'moment';
import { HobbiesLog } from '@/entities/hobbies_log/model/hobbies_log.entity';
import { getWeeksInMonth } from '@/shared/helpers/getWeeksInMonth';

interface Props {
  month: string;
  numMonth: number;
  logs: HobbiesLog[];
}

const AnaliticsMonth = ({ month, numMonth, logs }: Props) => {
  const completedDates = useMemo(() => {
    return new Set(
      logs.filter((h) => h.date).map((h) => moment(h.date).date()),
    );
  }, [logs, numMonth]);

  console.log({ completedDates, logs });

  return (
    <View style={{ width: '30%', flexDirection: 'column', gap: 4 }}>
      <TextUI>{month}</TextUI>
      {getWeeksInMonth(2025, numMonth).map((el) => (
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            gap: 4,
          }}
        >
          {el.map((d) => (
            <ComplitedBlock
              isDate={d === 0}
              isComplited={d !== 0 && completedDates.has(d)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default AnaliticsMonth;
