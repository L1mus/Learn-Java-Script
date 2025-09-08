// Math 3
// In the final task for this article, we want you to write some tests.

// To complete the task:

// There are three groups, each consisting of a statement and two variables. For each one, write a test that proves or disproves the statement made.
// Store the results of those tests in variables called weightComparison, heightComparison, and pwdMatch, respectively.

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;
// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;
// Statement 3: The two passwords match
const pwd1 = "stromboli";
const pwd2 = "stROmBoLi";

// Don't edit the code above here!

// Add your code here
const weightComparison = eleWeight < mouseWeight;
console.log(weightComparison);
const heightComparison = ostrichHeight > duckHeight;
console.log(heightComparison);
const pwdMatch = pwd1 === pwd2;
console.log(pwdMatch);

// Don't edit the code below here!

const section = document.querySelector("section");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const weightTest = weightComparison
  ? "True — elephants do weigh less than mice!?"
  : "False — of course an elephant is heavier than a mouse!";
const heightTest = heightComparison
  ? "True — an ostrich is indeed taller than a duck!"
  : "False — apparently a duck is taller than an ostrich!?";
const pwdTest = pwdMatch
  ? "True — the passwords match."
  : "False — the passwords do not match; please check them";
para1.textContent = weightTest;
section.appendChild(para1);
para2.textContent = heightTest;
section.appendChild(para2);
para3.textContent = pwdTest;
section.appendChild(para3);
