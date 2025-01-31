function deepEqual(x, y) {
  if ((typeof x != "object" || x == null) || (typeof y != "object" || y == null)) {
    return x === y;
  }
  else {
    let equal = true;
    for (let i of Object.keys(x).concat(Object.keys(y))) {
      equal = equal && deepEqual(x[i], y[i]);
    }
    return equal;
  }
}

let object1 = {value: 10}
let object2 = {value: 10}
console.log(object1 == object2);
console.log(deepEqual(object1, object2));
