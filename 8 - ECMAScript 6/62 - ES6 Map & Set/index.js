/*
An Object is similar to Map but there are important differences that make using a Map preferable in certain cases:
1) The keys can be any type including functions, objects, and any primitive.
2) You can get the size of a Map.
3) You can directly iterate over Map.
4) Performance of the Map is better in scenarios involving frequent addition and removal of key/value pairs.

Methods
set(key, value) Adds a specified key/value pair to the map. If the specified key already exists, value corresponding to it is replaced with the specified value.
get(key) Gets the value corresponding to a specified key in the map. If the specified key doesn't exist, undefined is returned.
has(key) Returns true if a specified key exists in the map and false otherwise.
delete(key) Deletes the key/value pair with a specified key from the map and returns true. Returns false if the element does not exist.
clear() Removes all key/value pairs from map.
keys() Returns an Iterator of keys in the map for each element.
values() Returns an Iterator of values in the map for each element.
entries() Returns an Iterator of array[key, value] in the map for each element.

*/ 

function main() {
  var name = readLine();
  var position = readLine();
  let employees = new Map([
  ["Richard", "Developer"],
  ["Maria", "SEO Specialist"],
  ["Tom", "Product Manager"],
  ["David", "Accountant"],
  ["Sophia", "HR Manager"]
  ]);

  //add the new pair to the map
  employees.set(name, position);

  for (var i of employees.entries()){
      //your code for the output
      console.log(i[0] + " : " + i[1]);
  } 
}

// ---

// A Set object can be used to hold unique values (no repetitions are allowed). A value in a set can be anything (objects and primitive values).

/*
Methods
add(value) Adds a new element with the given value to the Set.
delete(value) Deletes a specified value from the set.
has(value) Returns true if a specified value exists in the set and false otherwise.
clear() Clears the set.
values() Returns an Iterator of values in the set.

*/

function main() {
    
  let products = new Set([
      "dumbbells",
      "barbell",
      "t-shirt",
      "swim short",
      "gloves",
      "training apparatus",
      "goggle"
      ]);
  
  var count = 0;
  while(count<3){
      var itemType = readLine();
      //add the item to the set
      products.add(itemType);
      count++;
  }
  
  //calculate and output the count of item types
  console.log(products.size);
}