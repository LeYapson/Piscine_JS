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
  a = myAbs2(a);
  b = myAbs2(b);

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

function myAbs2(num) {
  if (num < 0) {
    return -num;
  }
  return num;
}
console.log(divide(5,3))

function modulo(divisor, dividend) {
    // If the divisor is 0, return NaN
  if (divisor === 0) {
    return NaN;
  }

  // If the dividend is 0, return 0
  if (dividend === 0) {
    return 0;
  }

  let isNegative = false;

  // Determine the sign of the remainder
  if (dividend < 0) {
    isNegative = true;
    dividend = -dividend;
  }
  if (divisor < 0) {
    divisor = -divisor;
  }

  // Perform modulo operation
  let remainder = dividend;
  while (remainder >= divisor) {
    remainder -= divisor;
  }

  // Add negative sign if necessary
  if (isNegative) {
    remainder = -remainder;
  }

  return remainder;
}
  console.log(modulo(25,8))