let myArray = [
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8,
    [9, 10, 11,
      [12, 13, 14]
    ]
  ],
  [15, 16, 17, 18, 19,
    [20, 21, 22,
      [23, 24, 25,
        [26, 27, 29]
      ], 30, 31
    ], 32
  ], 33
];

function printAllNumbers(array) {
  array.forEach((item, i) => {  // For each item in outer array,
    if (Array.isArray(item)) { // if the current item is an array,
      printAllNumbers(item);  // recursively call the function on that subarray.
    } else {  // Otherwise,
      console.log(item);  // print the value.
    }
  });
}
