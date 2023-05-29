function dogYears(planet, ageInSeconds) {
    const earthYearInSeconds = 31557600;
    const conversionRate = 7; // 1 human year = 7 dog years
    let earthAge = ageInSeconds / earthYearInSeconds;
    let orbitalPeriod = 1;
  
    switch (planet) {
      case "mercury":
        orbitalPeriod = 0.2408467;
        break;
      case "venus":
        orbitalPeriod = 0.61519726;
        break;
      case "mars":
        orbitalPeriod = 1.8808158;
        break;
      case "jupiter":
        orbitalPeriod = 11.862615;
        break;
      case "saturn":
        orbitalPeriod = 29.447498;
        break;
      case "uranus":
        orbitalPeriod = 84.016846;
        break;
      case "neptune":
        orbitalPeriod = 164.79132;
        break;
      default:
        orbitalPeriod = 1;
    }
  
    let dogAgeOnPlanet = (earthAge * conversionRate) / orbitalPeriod;
    dogAgeOnPlanet = Math.round(dogAgeOnPlanet * 100) / 100;
  
    return dogAgeOnPlanet;
  }