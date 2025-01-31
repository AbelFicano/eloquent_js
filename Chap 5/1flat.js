function flatten(array) {
  return array.reduce((a, b) => a.concat(b));
}

console.log(flatten([[994, 1008], [11392, 11508], [11513, 11520]]));
