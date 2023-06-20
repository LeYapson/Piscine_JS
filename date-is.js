const isValid = (date) => (date instanceof Date && !isNaN(date)) || ((typeof date === 'number') && !isNaN(date))

function isAfter(date1, date2) {
    if (date1.getTime() > date2.getTime()) {
        return true
    } else {
        return false
    }
}

function isBefore(date1, date2) {
    if (date1.getTime() < date2.getTime()) {
        return true
    } else {
        return false
    }
}
function isFuture(date) {
    const now = new Date()
    if (date.getTime() > now.getTime()) {
        return true
    } else {
        return false
    }
}

function isPast(date) {
    const now = new Date()
    if (date.getTime() < now.getTime()) {
        return true
    } else {
        return false
    }
}