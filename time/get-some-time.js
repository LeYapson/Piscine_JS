//Create a function named firstDayWeek, which accepts a specific week in a given year:

//number: representing a week of the year (between 1 and 53).
//string: representing a year.

//Your function should return a string representing the date of the first day of that specific week in the format dd-mm-yyyy.



function firstDayWeek(week, year) {
    let date = (1 + ((week - 1) * 7))

    let monday = new Date(year, 0, date )
    console.log(monday)

    while (monday.getDay() !== 1) {
        if (monday.getFullYear() == year - 1) {
            return '01-01-' + year.toString()
        }
        monday.setDate(monday.getDate() - 1)
    }

    if (year.toString().slice(0, 2) == '00') {
        monday.setDate(monday.getDate() + 1)
    }

    let dateRes = ''
    //format the date

        let track1 = monday.getDate()
        if (track1 < 10) {
            dateRes += '0' + track1.toString()+'-'
        } else {
            dateRes += track1.toString()+'-'
        }

    // format the month
    if (monday.getMonth() +1  < 10) {
        dateRes += '0' + (monday.getMonth()+ 1).toString()+'-'
    } else {
        dateRes += (monday.getMonth() + 1).toString()+'-'
    }
    
    //format the year
    if (year.toString().slice(0, 2) == '00') {
        dateRes += '00' + monday.getFullYear().toString().slice(-2)
    } else {
        dateRes += monday.getFullYear().toString()
    }
    return dateRes
}
