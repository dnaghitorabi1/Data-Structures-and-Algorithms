function stringReverseRecursive(string) {
  if (string.length === 1) {  // base case
    return string[0];
  } else {
    return stringReverseRecursive(string.slice(1, string.length)) + string[0];
  }
}
