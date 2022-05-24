function printEveryOther(low, high) {
  if (low > high) { // base case
    return;
  } else {
    console.log(low);
    printEveryOther(low + 2, high);
  }
}
