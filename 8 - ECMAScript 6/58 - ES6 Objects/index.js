var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
};

console.log(config.mobileSize); // 4

let person = {
  name: 'Jack',
  age: 18,
  sex: 'male'
};
let student = {
  name: 'Bob',
  age: 20,
  xp: '2'
};

let newStudent = Object.assign({}, person, student);

console.log(newStudent.name); // Bob
console.log(newStudent.age); // 20
console.log(newStudent.sex); // male
console.log(newStudent.xp); // 2

let basic = {
  ex1: 'PushUps: 20 times',
  ex2: 'Jumps: 20 times'
};
let advanced = {
  ex3: 'Squats: 30 times',
  ex4: 'Run: 2km'
};

//your code goes here
let total = Object.assign({}, basic, advanced);


for(let ex in total) {
  console.log(total[ex])
};