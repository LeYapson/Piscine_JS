function isFriday(date) {
  return date.getDay() === 5;
}

function isWeekend(date) {
  return date.getDay() === 6 || date.getDay() === 0;
}

function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }

function lastDayOfMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}