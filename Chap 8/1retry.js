class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(x, y) {
  if (Math.random() < 0.2) return x * y;
  else throw new MultiplicatorUnitFailure();
}

function multiply(x, y) {
  for (;;) {
    try {
      return primitiveMultiply(x, y)
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure)) throw e;
    }
  }
}

console.log(multiply(2, 3));
