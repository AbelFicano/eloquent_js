class PGroup {
  constructor() {

  }

  add(value) {
    let pGroup = new PGroup();
    if (this.values.indexOf(value) == -1) {
      pGroup.values = this.values.concat(x);
    } else {
      pGroup.values = this.values;
    }
    return pGroup;
  }

  delete(value) {
    let pGroup = new PGroup();
    pGroup.values = this.values.filter(v => (v != value));
    return pGroup;
  }

  has(value) {
    if (this.values.indexOf(value) != -1) return true;
    else return false;
  }
}

PGroup.empty = new PGroup();
PGroup.empty.values = [];


let empty = PGroup.empty;
console.log(empty.add(0));
console.log(empty);
