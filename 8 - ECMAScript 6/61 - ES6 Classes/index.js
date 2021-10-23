class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(5, 5);

console.log(square.area); // 25

// ---

function main() {
  var exam1 = parseInt(readLine(), 10);
  var exam2 = parseInt(readLine(), 10);
  var exam3 = parseInt(readLine(), 10);
  
  console.log(Exams.average(exam1,exam2,exam3));
  
}
class Exams{
  //your code goes here
  static average(x1, x2, x3) {
      const avg = (x1 + x2 + x3) / 3;
      return Math.round(avg);
  }
}

// ---

class Unit {
  attack() {
    console.log("Attack!");
  }
}

//inherit this class from Unit
class Gunner extends Unit {
    attack() {
        //complete the function
        super.attack();
        console.log("Using gun!");
  }
}
//inherit this class from Unit
class Sniper extends Unit{
    attack() {
        //complete the function
        super.attack();
        console.log("Using sniper rifle!");
    }
}

let gunner = new Gunner();
let sniper = new Sniper();

//calls
gunner.attack();
sniper.attack();


