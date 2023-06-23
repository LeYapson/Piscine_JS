// Create a function named countLeapYears which accepts a Date. Your function should return the number of leap years to have taken place since the year 1.

function countLeapYears(date) {
    let count = 0
    for (let i = 1; i < date.getFullYear(); i++) {
        if (i % 4 === 0 && i % 100 !== 0) count++
        else if (i % 400 === 0) count++
    }
    return count
}