function multiply(a, b) {
  let result = 0;
  const sign = (Math.sign(a) === Math.sign(b)) ? 1 : -1;
  a = Math.abs(a);
  b = Math.abs(b);

  while (b > 0) {
    if (b & 1) {
      result += a;
    }
    a <<= 1;
    b >>= 1;
  }

  return sign * result;
}


function divide(a, b) {
  if (b === 0) {
    throw new Error("division by zero");
  }

  const sign = (Math.sign(a) === Math.sign(b)) ? 1 : -1;
  a = Math.abs(a);
  b = Math.abs(b);
  let result = 0;

  while (a >= b) {
    let shift = 0;
    while (a >= (b << shift)) {
      shift += 1;
    }
    result += 1 << (shift - 1);
    a -= b << (shift - 1);
  }

  return sign * result;
}


function modulo(a, b) {
  if (b === 0) {
    throw new Error("division by zero");
  }

  const sign = (Math.sign(a) === -1) ? -1 : 1;
  a = Math.abs(a);
  b = Math.abs(b);

  while (a >= b) {
    a -= b;
  }

  return sign * a;
}
