let person = {
    name:"Mohamed",
    age: 23,
    occupation: "Software Engineer",
    hobbies: ["reading", "gaming", "coding"],
    address: { street: "123 Main St", city: "Anytown", state: "CA", zip: "zipe2"},
}


// console.log(person);


//converting object to json
let json = JSON.stringify(person);
console.log(json);


// converting json to object

let person2 = JSON.parse(json);
console.log(person2)