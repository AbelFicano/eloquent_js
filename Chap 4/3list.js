function arrayToList(array) {
  if (array.length == 1) {
    return {value: array.shift(), rest: null};
  }
  else {
  return {value: array.shift(), rest: arrayToList(array)};
  }
}

function listToArray(list) {
  if (list.rest == null) {
    return [list.value];
  }
  else  {
    return [list.value, ...listToArray(list.rest)];
  }
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function nth(list, number) {
  if (number == 0) {
    return list.value;
  }
  else {
    return nth(list.rest, number - 1);
  }
}


console.log(arrayToList([1, 2, 3]));

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

console.log(listToArray(list));

console.log(prepend(0, list));

console.log(nth(list, 2));
