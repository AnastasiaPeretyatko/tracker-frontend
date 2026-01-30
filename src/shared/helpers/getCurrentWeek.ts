import moment from 'moment';

export function getCurrentWeek() {
  const startOfWeek = moment().startOf('week').add(0, 'day'); // понедельник

  return Array.from({ length: 7 }, (_, i) => startOfWeek.clone().add(i, 'day'));
}

export function formatDayName(date: moment.Moment) {
  return moment(date).format('dd').toUpperCase();
}
