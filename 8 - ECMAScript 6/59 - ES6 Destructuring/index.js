let names = ['John', 'Fred', 'Ann'];
let [Ann, Fred, John] = names;
console.log(John); // Ann

var obj = {id: 42, name: "Jack"};

let {id = 10, age = 20} = obj;

console.log(id); // 42
console.log(age); // 20