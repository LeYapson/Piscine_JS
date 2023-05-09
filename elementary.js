function multiply(a, b) {
  let negative = false;
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    negative = true;
  }

  let result = 0;
  for (let i = 0; i < myAbs(b); i++) {
    result += myAbs(a);
  }

  if (negative) {
    result = -result;
  }

  return result;
}

function myAbs(num) {
  if (num < 0) {
    return -num;
  }
  return num;
}
console.log(multiply(123,-22))

function divide(a, b) {
   // If the divisor is 0, return NaN
  if (b === 0) {
    return NaN;
  }

  let quotient = 0;
  let isNegative = false;

  // Determine the sign of the quotient
  if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    isNegative = true;
  }

  // Convert inputs to positive numbers
  a = myAbs(a);
  b = myAbs(b);

  // Perform integer division
  while (a >= b) {
    a -= b;
    quotient++;
  }

  // Add negative sign if necessary
  if (isNegative) {
    quotient = -quotient;
  }

  return quotient;
}

function myAbs(num) {
  if (num < 0) {
    return -num;
  }
  return num;
}
console.log(divide(5,3))

function modulo(a, b) {
    if (b <= 0) {
      throw new Error('Le diviseur doit être supérieur à zéro');
    }
    
    let result = a;
    
    while (result >= b) {
      result -= b;
    }
    
    return result;
  }
  console.log(modulo(25,8))