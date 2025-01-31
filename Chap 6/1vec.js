class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }
  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }
  get length() {
    return Math.sqrt(this.x**2 + this.y**2);
  }
}

let vec1 = new Vec(3, 5);
let vec2 = new Vec(2, 1);
console.log(vec1.plus(vec2));
console.log(vec1.minus(vec2));
console.log(vec1.length);
