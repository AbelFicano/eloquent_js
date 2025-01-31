function dominantDirection(text) {
  let dirs = countBy(text, char => characterScript(char.codePointAt(0)).direction);
  let i = dirs.findIndex(dir => dirs.every(x => x.count <= dir.count));
  if (i != -1) return dirs[i].name;
}
