import moment from "moment";

/**
 * возвращает moment-дату по номеру дня в месяце
 *
 * @param momentDate - дата, в месяце которой ищем нужный нам день
 * @param dayIndex - номер дня
 */
export const getDateByDayIndex = (momentDate: moment.Moment, dayIndex: number): moment.Moment => {
  return momentDate.startOf("month").add(dayIndex, "days");
};

export const getDurationInDays = (start: moment.Moment, end: moment.Moment) => {
  return moment(end).diff(moment(start), "days", true);
};

/**
 * конвертирует минуты из численного формата в формат HH:mm, например 250 -> 04:10
 *
 * @param minutes - минуты
 * @return - минуты в виде HH:mm
 */
export const minutesToHHMM = (minutes: number) =>
  moment().utcOffset(0).startOf("day").add(minutes, "minutes").format("HH:mm");

/**
 *
 * конвертирует минуты в объект, где ключами являются кол-во часов и минут. 250 -> {hours: 4, minutes: 10}
 *
 * @param minutesCount - минуты
 * @return - минуты и часы в виде {hours, minutes}
 * */
export const minutesToHoursAndMinutes = (minutesCount: number) => {
  const hours = Math.floor(minutesCount / 60);
  const minutes = minutesCount % 60;

  return { hours, minutes };
};

/**
 * конвертирует время из HH:mm в объект, где ключами являются кол-во часов и минут. 250 -> {hours: 4, minutes: 10}
 *
 * @param timeAsHHMM - время в формате HH:mm
 * @return - минуты и часы в виде {hours, minutes}
 * */

export const HHMMtoHoursAndMinutesObj = (timeAsHHMM: string) => {
  const [hours, minutes] = timeAsHHMM.split(":");
  return { hours: +hours, minutes: +minutes };
};
