// Math 2
// In the second task, you are provided with two calculations with the results stored in the variables result and result2. You need to take the calculations, multiply them, and format the result to two decimal places.

// To complete the task:

// Multiply result and result2 and assign the result back to result (use assignment shorthand).
// Format result so that it has two decimal places and store it in a variable called finalResult.
// Check the data type of finalResult using typeof. If it's a string, convert it to a number type and store the result in a variable called finalNumber.
// To pass this test, finalNumber should have a result of 4633.33. You might need to consider operator precedence and add or modify some parentheses to the input expressions to get the correct output.

// Final result should be 4633.33

let result = 7 + 13 / 9 + 7;
let result2 = (100 / 2) * 6;

// Add your code here

result = result * result2;

let finalResult = result.toFixed(2);

let finalNumber = Number(finalResult);

console.log(finalResult);

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
para1.textContent = `Your finalResult is ${finalResult}`;
const para2 = document.createElement("p");
const finalNumberCheck =
  isNaN(finalNumber) === false
    ? "finalNumber is a number type. Well done!"
    : `Oops! finalNumber is not a number.`;
para2.textContent = finalNumberCheck;
section.appendChild(para1);
section.appendChild(para2);
