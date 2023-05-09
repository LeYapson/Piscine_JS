function multiply(a, b) {
  // handle cases where one or both inputs are zero
  if (a === 0 || b === 0) {
    return 0;
  }

  // handle cases where one or both inputs are negative
  let sign = 1;
  if (a < 0) {
    sign *= -1;
    a *= -1;
  }
  if (b < 0) {
    sign *= -1;
    b *= -1;
  }

  // perform multiplication using repeated addition
  let result = 0;
  for (let i = 0; i < b; i++) {
    result += a;
  }

  return sign * result;
}
console.log(multiply(123,-22))

function divide(a, b, depth = 0) {
    if(a<b) {
        return depth;
    } else {
        return(a-b, b, depth+1)
    }
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