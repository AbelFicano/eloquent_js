function every(array, predicate) {
  let value = true;
  for (let element of array) {
    value = value && predicate(element)
    if (value == false) break;
  }
  return value;
}

function every1(array, predicate) {
  return !array.some(x => !predicate(x));
}

console.log(every([1, 2, 3], x => x > 0));
console.log(every1([1, 2, 3], x => x > 0));
