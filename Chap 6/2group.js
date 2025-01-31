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

let array = ['a', 'b', 'a', 'c'];
let group = Group.from(array);
console.log(group);
console.log(group.has("c"));
