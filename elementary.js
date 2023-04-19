function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result += a;
      }
      return result
}
console.log(multiply(6,6))

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