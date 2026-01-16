import moment from 'moment';

export const getWeeksInMonth = (year: number, month: number): number[][] => {
  const firstDay = moment(`${year}-${month}-01`, 'YYYY-MM-DD');
  const startDay = firstDay.weekday(); // день недели первого дня
  const daysInMonth = firstDay.daysInMonth();

  // массив дней месяца
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // добавляем пустые дни в начале месяца
  for (let i = 0; i < startDay; i++) {
    daysArray.unshift(0);
  }

  // разбиваем на недели
  const weeks: number[][] = [];
  for (let i = 0; i < daysArray.length; i += 7) {
    weeks.push(daysArray.slice(i, i + 7));
  }

  return weeks;
};
