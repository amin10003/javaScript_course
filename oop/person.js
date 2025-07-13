// const person = {
//     name: 'mohamed',
//     greet() {
//         console.log(`hello, my name is ${this.name}`);
//     },
// };

// person.greet();




// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// const person1 = new Person('mohamed', 23);
// const person2 = new Person('Maryam', 18)
// const person3 = new Person('ahmed', 22);
// person2.greet();
// person1.greet();
// person3.greet();



class House {
  constructor(owner, color, rooms, hasGarage, address) {
    this.owner = owner;
    this.color = color;
    this.rooms = rooms;
    this.hasGarage = hasGarage;
    this.address = address;
  }

  describe() {
    console.log(`${this.owner}'s house is ${this.color} with ${this.rooms} room(s).`);
    console.log(this.hasGarage ? "It has a garage." : "It does not have a garage.");
    console.log(`Located at ${this.address}`);
  }
}

const house1 = new House('Mohamed', 'blue', 6, true, '231 along Garissa Highway');
const house2 = new House('Ubah','red', 8, true, '24352 Nairobi highway');
house2.describe();
console.log("............................................................");
house1.describe();