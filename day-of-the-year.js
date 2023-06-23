// Create a function named dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.

function dayOfTheYear(date) {
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = date - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var dayOfYear = Math.floor(diff / oneDay);
  
    return dayOfYear;
  }
  
  // Exemple d'utilisation
  var currentDate = new Date();
  console.log(dayOfTheYear(currentDate));
  