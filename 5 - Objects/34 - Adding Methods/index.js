function person(name, age) {
  this.name = name;  
  this.age = age;
  this.changeName = function (name) {
      this.name = name;
  }
}

var p = new person("David", 21);
p.changeName("John");

document.write(p.name);

// ---

function person(name, age) {
  this.name= name;  
  this.age = age;
  this.yearOfBirth = bornYear;
}
function bornYear() {
  return 2016 - this.age;
}

// ---

function main() {
  var prodID = readLine();
  var price = parseInt(readLine(),10);
  var discount = parseInt(readLine(),10);
  
  var prod1= new Product(prodID, price);
  console.log(prod1.prodID + " price: " + prod1.price);
  
  prod1.changePrice(discount);
  console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
  this.prodID = prodID;
  this.price = price;

  this.changePrice = function(discount) {
      //your code goes here
      this.discount = discount;
      this.price = price - (price * discount / 100);
  }
}

function main() {
  //get the initial amount and the interest percentage
  var amount = parseInt(readLine(),10);
  var yearPercent = parseInt(readLine(),10);
  
  var loan1 = new Loan(amount, yearPercent);
  
  //output to console
  console.log(loan1.yearIncome());
}

function Loan(amount, percent) {
  this.amount = amount;
  this.yearPercent = percent;
  //your code goes here
  this.yearIncome = calcYearIncome;
};

function calcYearIncome(){
  //complete the function to calculate yearly income
  this.calcYearIncome = calcYearIncome;

  return this.calcYearIncome = (this.yearPercent / 100) * this.amount;
}