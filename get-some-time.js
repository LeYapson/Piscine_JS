//Create a function named firstDayWeek, which accepts a specific week in a given year:

//number: representing a week of the year (between 1 and 53).
//string: representing a year.

//Your function should return a string representing the date of the first day of that specific week in the format dd-mm-yyyy.


function firstDayWeek(week, year) {
    const date = new Date(year, 0, 1 + (week - 1) * 7);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year2 = date.getFullYear();
    return `${day}-${month}-${year2}`;
}

console.log(firstDayWeek(1, 2020));