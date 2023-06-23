// Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.

function dayOfTheYear(date) {
    let count = 0
    let month = date.getMonth()
    let day = date.getDate()
    let year = date.getFullYear()
    let daysInMonth = [31, 28 + countLeapYears(date), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for (let i = 0; i < month; i++) {
        count += daysInMonth[i]
    }
    count += day
    return count
}
console.log(dayOfTheYear(new Date('0001-01-01')))

function countLeapYears(date) {
    let count = 0
    for (let i = 1; i < date.getFullYear(); i++) {
        if (i % 4 === 0 && i % 100 !== 0) count++
        else if (i % 400 === 0) count++
    }
    return count
}