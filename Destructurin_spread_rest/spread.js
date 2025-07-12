// // // const fruits = ['apple', 'banana', 'orange'];
// // // const newFruits = [...fruits];

// // // console.log(newFruits); // ['apple', 'banana', 'orange']


// // const originalArray = [1, 2, 20, 5];
// // // console.log(originalArray)

// // const copiedArray = [...originalArray];
// // console.log(copiedArray)


// const fruits = ['apple', 'banana'];
// const vegetables = ['carrot', 'broccoli'];

// const combined = [...fruits, vegetables];

// console.log(combined);
// // Output: ['apple', 'banana', 'carrot', 'broccoli']


// const numbers = [1, 2, 3, 4,];
// const withfive = [...numbers,5];
// const copiedWithFive = [...withfive]

// //console.log(copiedWithFive);

// console.log(withfive)



// const numbers = [1, 2, 3, 4];
// const newNumbers = [1,...numbers,5];

// console.log(newNumbers)


let person = {
    name: "John",
    age: 30,
    occupation: "DevOps"
    };

    const newPerson = {...person, occupation: "Cloud Engineer", hobbies: "football"};
    console.log(newPerson)