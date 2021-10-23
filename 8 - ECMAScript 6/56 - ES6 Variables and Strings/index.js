var a = 10;
const b = "Hello";
let c = true;

// The type of declaration used depends on the necessary scope. Scope is the fundamental concept in all programming languages that defines the visibility of a variable.

/*
var & let
Unlike the var keyword, which defines a variable globally, or locally to an entire function regardless of block scope, let allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used.
*/

function varTest() {
  var x = 1;
  if (true) {
      var x = 2;  // same variable
      console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  if (true) {
      let x = 2;  // different variable
      console.log(x);  // 2
  }
  console.log(x);  // 1
}

function main() {
  var country = readLine();
  var capital = readLine();
  
  console.log(countryCard(country, capital));
}

function countryCard(country, capital){
  //complete the function
  //use backtick (` `) for template literal
  return `Name: ${country}, Capital: ${capital}`;
}