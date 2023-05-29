function round(n) {
    let integerPart = n < 0 ? ceil(n - 0.5) : floor(n + 0.5);
    return integerPart;
  }
  
  function ceil(n) {
    let integerPart = n | 0;
    return integerPart === n ? n : (n >= 0 ? integerPart + 1 : integerPart);
  }
  
  function floor(n) {
    let integerPart = n | 0;
    return integerPart <= n ? integerPart : (n >= 0 ? integerPart : integerPart - 1);
  }
  
  function trunc(n) {
    return n >= 0 ? n | 0 : -((n | 0) === n ? n : (n | 0) + 1);
  }
  