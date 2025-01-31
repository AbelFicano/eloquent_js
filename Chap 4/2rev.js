function reverseArray(array) {
  let newArray = [];
  while (array.length > 0) {
    newArray.push(array.pop());
  }
  return newArray;
}

console.log(reverseArray([5, 4, 3, 2]));

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = temp;
  }
}

let array = [5, 4, 3, 2];
reverseArrayInPlace(array);
console.log(array);
