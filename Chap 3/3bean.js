function countBs(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 'B') count++;
  }
  return count;
}

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) count++;
  }
  return count;
}

function countBs1(str) {
  return countChar(str, 'B')
}
