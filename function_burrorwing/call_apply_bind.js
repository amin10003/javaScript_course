// const person = {
//     name: "Alice",
//     greet: function(greeting) {
//         console.log(`${greeting}, ${this.name}`);
//     },
// };

// //Borrowing the greet function and bind 'this' to the new object
// const anotherPerson = { name: "Bob"};

// const borrowedGreet = person.greet.bind(anotherPerson);
// borrowedGreet("Hello")








let doctor = { name:"Dr. Maria",
   
}


let actor = {
    name: "Tom Hanks",
}




 function drive(car) {
    console.log("I am " + this.name + " I am driving a " + car + "!");
}


drive.call(doctor, "Landcruise");


drive.apply(doctor, ["Mitsubishi"]);
// drive.apply(doctor, ["Landcruise"]);



let actorDrive = drive.bind(actor, "Ferreri")

// for (let index = 0; index < 100; index++) {
//     actorDrive();
    
// }


actorDrive()


// drive("Tayota");


// console.log(doctor.drive("Toyota"))
