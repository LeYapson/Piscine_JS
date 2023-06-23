// Create a function named matchCron, which accepts a valid cron string, and a valid Date. Your function should return true if the pattern matches the Date.

function matchCron(cronString, date) {
    let cronArr = cronString.split(' ')
    let dateArr = [date.getMinutes(), date.getHours(), date.getDate(), date.getMonth() + 1, date.getDay()]
    for (let i = 0; i < cronArr.length; i++) {
        if (cronArr[i] !== '*' && cronArr[i] !== dateArr[i].toString()) return false
    }
    return true
}

console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))) // true