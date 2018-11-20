const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

export function createDate(date, convert = false) {
  const month = months[date.getMonth()];
  const day = days[date.getDay()];
  let minute = date.getMinutes();

  if (String(minute).length === 1) {
    minute += '0';
  }

  if (convert) {
    return `${date.getHours()}:${date.getMinutes()}, ${date.getDate()} ${month} ${date.getFullYear()}`;
  }

  return `${date.getDate()} ${month} ${date.getFullYear()}, ${day}, ${date.getHours()}:${minute}`;
}
