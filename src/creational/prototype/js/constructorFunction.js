function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'Gabriel',
  lastName: 'Tomás',
  age: 19,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

function SubPerson(firstName, lastName, age) {
  Person.call(this, firstName, lastName, age);
  this.fromSubConstructorFunc = 'Sou sub classe';
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person1 = new Person('Gabriel', 'Gabriel', 19);
console.log(person1.fullName());

const person2 = new SubPerson('Joana', 'Oliveira', 23);
console.log(person2.fullName());
