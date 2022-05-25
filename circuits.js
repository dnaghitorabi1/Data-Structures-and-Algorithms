const N = parseInt(readline()); // Store the number of unique resistors present in the circuit
let nameResistanceMap = new Map();  // Declare hash table for Name -> Resistance.
let parenthesesBracketsMap = new Map(); // Declare hash table for matching parentheses/brackets.
let stack = []; // Declare stack.
let expression = "";  // Calculable expression string
let expressionArray = []; // Calculable expression array
let seriesResistance = 0; // Resistance of sub-token
let parallelResistance = 0;// Resistance of sub-token
let equivalentResistance = 0; // Running equivalent resistance

// Assign parentheses and brackets open/close mapping.
parenthesesBracketsMap.set(")", "(");
parenthesesBracketsMap.set("]", "[");

for (let i = 0; i < N; i++) {   // For each unique resistor,
  var inputs = readline().split(' '); // store array of name and resistance,
  const name = inputs[0]; // store name string,
  const R = parseInt(inputs[1]);  // store resistance integer.

  nameResistanceMap.set(name, R); // Assign Name to Resistance in hash table.
}

console.error(nameResistanceMap);

const circuitString = readline(); // Store circuit string.
console.error("circuit: " + circuitString);

// Parse the input string using a stack.
[...circuitString].forEach((item, i) => { // For each character in the string,
  stack.push(item); // Add item to end of stack.
  console.error("Stack after push: " + stack);

  if (item === ")" || item === "]") { // If we find a closing parenthesis/bracket,
    let char = stack.pop(); // Pop stack and save character.
    console.error("Stack after pop: " + stack);

    expression = "";

    // While current character is not the matching parenthesis/bracket,
    // pop the stack, building a calculable expression until you find the matching parenthesis/bracket.
    while (char !== parenthesesBracketsMap.get(item)) {
      expression = expression.concat(char);
      char = stack.pop();

      console.error("Stack after pop: " + stack);
    }

    // Add the opening parenthesis/bracket.
    expression = expression.concat(char);
    console.error("Reversed expression (string): " + expression);

    // We have a calculable expression.
    // The calculable expression is in reverse order.
    // Next step is to evaluate the expression and put its resistance into the stack.

    // char is now either a "(" or a "[".
    // Depending on which it is,
    // we either calculate a series expression or a parallel expression.

    // Convert string expression to array, using the spaces as separators.
    // Then, reverse the array (may not be necessary).
    // Then, reduce to just the resistor names.
    expressionArray = expression.split(" ");
    expressionArray = expressionArray.reverse();
    expressionArray = expressionArray.slice(1, expressionArray.length - 1);

    // Replace resistor names with their values.
    expressionArray.forEach((item, i) => {
      if (nameResistanceMap.has(item)) {
        expressionArray[i] = nameResistanceMap.get(item);
      }
    });
    console.error("expressionArray (in order): " + expressionArray);

    switch (char) {
      case "(":
        console.error("Full stack before series math: " + stack);

        // Series resistor math
        seriesResistance = expressionArray.reduce(function(prev, current) {
          return prev + current;
        }, 0);

        stack.push(seriesResistance);
        console.error("Full stack after series push: " + stack);
        break;
      case "[":
        console.error("Full stack before parallel math: " + stack);

        // Parallel resistor math
        expressionArray.forEach((item, i) => {
          expressionArray[i] = 1 / expressionArray[i];
        });

        let denominator = expressionArray.reduce(function(prev, current) {
          return prev + current;
        }, 0);

        parallelResistance = 1 / denominator;
        console.error("Parallel resistance: " + parallelResistance);

        stack.push(parallelResistance);
        console.error("Full stack after parallel push: " + stack);
        break;
      default:
        break;
    }
  }
});

console.log(stack[0].toFixed(1));
