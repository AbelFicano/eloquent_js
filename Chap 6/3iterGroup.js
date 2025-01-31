class Group {
  constructor() {
    this.values = [];
  }
  add(value) {
    let index = this.values.indexOf(value);
    if (index == -1) {
      this.values.push(value);
    }
  }
  delete(value) {
    let index = this.values.indexOf(value);
    if (index != -1) {
      this.values = this.values.slice(0, index).concat(this.values.slice(index + 1));
    }
  }
  has(value) {
    let index = this.values.indexOf(value);
    if (index != -1) return true;
    else return false;
  }
  static from(iterable) {
    let group = new Group();
    for (let value of iterable) {
      group.add(value);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.values = group.values;
  }
  next() {
    if (this.index == this.values.length) return {done: true};
    let value = this.values[this.index];
    this.index++;
    return {value, done: false};
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

let array = ['a', 'b', 'a', 'c'];
let group = Group.from(array);
for (let value of group) console.log(value);
