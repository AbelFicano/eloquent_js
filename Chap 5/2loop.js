function loop(value, test, update, body) {
  let i = value;
  while (true) {
    if (!test(i)) break;
    body(i);
    i = update(i);
  }
}
