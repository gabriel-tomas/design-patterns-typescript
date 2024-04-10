const person1 = {
  firstName: 'Gabriel',
  lastName: 'Tomás',
  age: 19,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(person1);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson.firstName);
console.log(anotherPerson.__proto__.firstName);
