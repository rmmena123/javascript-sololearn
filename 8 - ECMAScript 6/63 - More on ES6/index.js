function asyncFunc(work) {
  return new Promise(function(resolve, reject) {
      if (work === "")
          reject(Error("Nothing"));
      setTimeout(function() {
          resolve(work);
      }, 1000);
  });
}

asyncFunc("Work 1") // Task 1
.then(function(result) {
  console.log(result);
  return asyncFunc("Work 2"); // Task 2
}, function(error) {
  console.log(error);
})
.then(function(result) {
  console.log(result);
}, function(error) {
  console.log(error);
});
console.log("End");

// ------------------------

const arr = ['0', '1', '4', 'a', '9', 'c', '16'];
const my_obj = {
  [Symbol.iterator]: function*() {
    for(let index of arr) {
      yield `${index}`;
    }
  }
};

const all = [...my_obj] /* Here you can replace the '[...my_obj]' with 'arr'. */
  .map(i => parseInt(i, 10))
  .map(Math.sqrt)
  .filter((i) => i < 5) /* try changing the value of 5 to 4 see what happens.*/
  .reduce((i, d) => i + d); /* comment this line while you are changing the value of the line above */

console.log(all);

// ------------------------

// lib/math.js
export ​let sum = (x, y) => { return x + y; }

export ​let pi = 3.14


// app.js

import * ​as math from "lib/math"
console.log(`2p = + ${math.sum(math.pi, math.pi)}`)