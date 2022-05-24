function factorialRecursive(number) {
  if (number === 1) { // base case (function will not recurse)
    return 1;
  } else {
    return number * factorialRecursive(number - 1);
  }
}
