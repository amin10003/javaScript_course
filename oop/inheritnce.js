// class House {
//   constructor(owner, color, rooms) {
//     this.owner = owner;
//     this.color = color;
//     this.rooms = rooms;
//   }

//   describe() {
//     console.log(`${this.owner}'s house is ${this.color} with ${this.rooms} room(s).`);
//   }
// }


// // const myHouse = new House('mohamed', 'grey', 6);

// // myHouse.describe()




// class SmartHouse extends House {
//   constructor(owner, color, rooms, hasSmartLights, hasSecuritySystem) {
//     super(owner, color, rooms); // Call the parent class constructor
//     this.hasSmartLights = hasSmartLights;
//     this.hasSecuritySystem = hasSecuritySystem;
//   }

//   describeTechnology() {
//     if (this.hasSmartLights || this.hasSecuritySystem) {
//       console.log(`${this.owner}'s house has the following smart features:`);
//       if (this.hasSmartLights) {
//         console.log("- Smart Lights");
//       }
//       if (this.hasSecuritySystem) {
//         console.log("- Security System");
//       }
//     } else {
//       console.log(`${this.owner}'s house has no smart features.`);
//     }
//   }
// }



// const normalHouse = new House("Ali", "blue", 3);
// normalHouse.describe();
// // Ali's house is blue with 3 room(s).

// const smartHouse = new SmartHouse("Zahra", "white", 5, true, true);
// smartHouse.describe(); // Inherited method
// smartHouse.describeTechnology();
// /*
// Zahra's house is white with 5 room(s).
// Zahra's house has the following smart features:
// - Smart Lights
// - Security System
// */





class Animal {
    constructor(name) {
        this.name = name;
    }

    eat(){
        console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {
    bark(){
        console.log(`${this.name} says woof!`);
    }
}

const dog = new Dog("Buddy");
dog.eat();
dog.bark();



class Cat extends Animal {
    meow(){
        console.log(`${this.name} says meow!`);
    }
}

const cat = new Cat("hilwa")
cat.eat();
cat.meow();



















