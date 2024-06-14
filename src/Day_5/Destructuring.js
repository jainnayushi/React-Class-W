const obj = {
  name: "ayushi",
  age: 24,
};

const { age, name } = obj;
console.log(name); //

// name, age, email - obj1
// name, age :30  - obj2
console.log(obj);

const obj1 = { ...obj, email: "a@1.com" };

console.log(obj1);

const obj2 = { ...obj, age: 30 };

console.log(obj2);

const obj3 = { age: 30, ...obj };

console.log(obj3);
