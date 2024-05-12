let obj1 = {name: "Person 1", age:5};
let obj2 = {age:5, name: "Person 1"};

console.log(compare(obj1, { ...obj2}));

console.log(isEqualJson(json1, json2));