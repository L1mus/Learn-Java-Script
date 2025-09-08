// Math 1
// Let's start out by testing your knowledge of basic math operators. You will create four numeric values, add two together, subtract one from another, then multiply the results. Finally, you'll write a test to prove that this value is an even number.

// To complete the task:

// Create four variables that contain numbers. Call the variables something sensible.
// Add the first two variables together and store the result in another variable.
// Subtract the fourth variable from the third and store the result in another variable.
// Multiply the results from steps 2 and 3 and store the result in a variable called finalResult.
// Check if finalResult is an even number using one of the arithmetic operators. Store the result (0 for even, 1 for odd) in a variable called evenOddResult.
// To pass this test, finalResult should have a value of 48 and evenOddResult should have a value of 0.

let finalResult;
let evenOddResult;

// Don't edit the code above here!

// Add your code here
const num1 = 6;
const num2 = 2;
const num3 = 3;
const num4 = 9;

let num5 = num1 + num2;
let num6 = num4 - num3;

finalResult = num5 * num6;

if (finalResult % 2 === 0) {
  evenOddResult = 0;
} else {
  evenOddResult = 1;
}

console.log(finalResult);
console.log(evenOddResult);

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const finalResultCheck =
  finalResult === 48 ? `Yes, well done!` : `No, it is ${finalResult}`;
para1.textContent = `Is the finalResult 48? ${finalResultCheck}`;
const para2 = document.createElement("p");
const evenOddResultCheck =
  evenOddResult === 0
    ? "The final result is even!"
    : "The final result is odd. Hrm.";
para2.textContent = evenOddResultCheck;
section.appendChild(para1);
section.appendChild(para2);
