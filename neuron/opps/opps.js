//object oriented programming
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greetPerson() {
    console.log(`hi there ${this.name}. Are you ${this.age} year old ?`);
  }
  returnAge() {
    return this.age;
  }
}

// const person = new Person("sakib", 22);
// console.log(person.age);
// person.greetPerson();

let names = ["a", "b", "c", "d", "e", "f", "g", "h"];
//making 8 persons
names.forEach((name) => {
  const age = Math.floor(Math.random() * 90);
  const person = new Person(name, age);
  person.greetPerson();
  let returned = person.returnAge();
  console.log(returned);
});
