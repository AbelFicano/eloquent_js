let obj = {
  x: 1,
  hasOwnProperty: 2
};

console.log(obj.hasOwnProperty);
console.log(Object.prototype.hasOwnProperty.call(obj, "x"));
