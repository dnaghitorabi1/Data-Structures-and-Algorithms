function arraySumRecursive(array) {
  if (array.length === 1) { // base case
    return array[0];
  } else {
    return array[0] + arraySumRecursive(array.slice(1, array.length));
  }
}

// For the array [1, 5, 10], the sum of all values is 16.

// Function walkthrough:
// array[0] + arraySumRecursive(array.slice(1, array.length))
  // array[0] = 1
  // arraySumRecursive(array.slice(1, array.length)) = arraySumRecursive([5, 10])

  // Down one level...
  // array[0] + arraySumRecursive(array.slice(1, array.length)
    // array[0] = 5
    // arraySumRecursive(array.slice(1, array.length)) = arraySumRecursive([10])

    // Down one level...
    // array[0] (base case rule)
      // array[0] = 10

  // 10 + 5 = 15.
// 15 + 1 = 16.
