function sum1(low, high) {
  if (high == low) {
    return low;
  } else {
    return high + sum1(low, high - 1);
  }
