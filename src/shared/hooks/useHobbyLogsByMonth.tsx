import { useMemo } from 'react';
import { BSON } from 'realm';
import dayjs from 'dayjs';
import { useQuery, useRealm } from '@realm/react';
import { HobbiesLog } from '@/entities/hobbies_log/model/hobbies_log.entity';

const useHobbyLogsByMonth = (hobbyId: string) => {
  const realm = useRealm();
  const allLogs = useQuery(HobbiesLog);

  console.log('kekek');

  const logsByMonth = useMemo(() => {
    console.log({ hobbyId });
    if (!hobbyId) return {};

    // 1️⃣ Получаем все HobbiesLog, связанные с этим hobby
    const logs = realm
      .objects(HobbiesLog)
      .filtered('hobbies._id == $0', new BSON.UUID(hobbyId));

    console.log({ logs });

    // 2️⃣ Сортируем по дате (по возрастанию)
    const sortedLogs = logs.sorted('date', false); // false = ASC

    // 3️⃣ Группируем по месяцам
    return sortedLogs.reduce<Record<string, HobbiesLog[]>>((acc, log) => {
      const month = dayjs(log.date).format('YYYY-MM'); // 2025-12
      if (!acc[month]) acc[month] = [];
      acc[month].push(log);
      return acc;
    }, {});
  }, [allLogs, hobbyId]);

  return logsByMonth;
};

export default useHobbyLogsByMonth;
