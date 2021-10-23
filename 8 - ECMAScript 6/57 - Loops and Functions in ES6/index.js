// The for...in loop is intended for iterating over the enumerable keys of an object.

// ES6 introduces the new for...of loop, which creates a loop iterating over iterable objects.

let scores = [68,95,54,84,77,75,63,74,69,80,71,63]
var count = 0;
//your code goes here
for (let score of scores) {
    if(score >= 70) {
        count++;
    }
}

console.log(count);

// ---

function main() {
  var percent = parseInt(readLine(),10);
  
  console.log(salaryIncrease(percent));
}
var salaries = [3000, 7000, 5000, 15000];
var sum = 0;

const salaryIncrease = percent => {
  //your code goes here
  salaries.forEach(v => {
      sum += v * (percent/100); 
  });

  return sum;
}

// ---

const test = (a, b = 3, c = 42) => {
  return a + b + c;
}
console.log(test(5)); //50 