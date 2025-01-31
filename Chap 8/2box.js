const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true; },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(f) {
  let locked = box.locked;
  if (locked) box.unlock();
  try {
    f();
  } finally {
    if (locked) box.lock();
    return;
  }
}

console.log(box.locked);
withBoxUnlocked(() => {throw new Error;});
withBoxUnlocked(() => console.log(box.content));
console.log(box.locked);
