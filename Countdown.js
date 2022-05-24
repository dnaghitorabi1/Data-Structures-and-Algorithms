function countDownRecursive(number) {
  console.log(number);

  // Before calling again, check range.
  if (number == 0) {
    return;
  } else {
    countDownRecursive(number - 1);
  }
}
