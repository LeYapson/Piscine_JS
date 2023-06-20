function isFriday(date) {
  return date.getDay() === 5;
}

function isWeekend(date) {
  return date.getDay() === 6 || date.getDay() === 0;
}

const isLeapYear = (date) => {
    let year = date.getFullYear()
    return new Date(year, 1, 29).getDate() === 29
}

function lastDayOfMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}