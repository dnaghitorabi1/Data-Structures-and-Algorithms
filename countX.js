function countX(string) {
  // Given an arbitrary string, count the number of "x" characters.

  // Step 1: Identify the subproblem
    // Original string minus the first character.

  // Step 2: Pretend countX() has already been implemented.
    // Just need to add 1 if the first character is "x".
    // Otherwise, don't add anything.

  // Step 3: Add base case handling

  // Base case
  if (string.length === 1) {
    if (string[0] === "x") {
      return 1;
    } else {
      return 0;
    }
  }

  // Main
  if (string[0] === "x") {
    return 1 + countX(string.slice(1, string.length));
  } else {
    return countX(string.slice(1, string.length));
  }
}
