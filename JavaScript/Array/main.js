const numbers = [1, 2, 3];
const newNumberseach = numbers.forEach((number) => {
  console.log(number * 2);
});

console.log(newNumberseach);

const newNumbersmap = numbers.map((number) => {
  return number * 2;
});

console.log(numbers);
console.log(newNumbersmap);
