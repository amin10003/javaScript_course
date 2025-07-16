//creating a set;
let firstNames = new Set([ 'James', 'Ali', 'farah', 'ugali', 'qeys' ]);


//adding values to aset
firstNames.add("Zuber");
firstNames.add("James") //this won't be added as 2 was already there.



//checking


// console.log(firstNames.has(3))  //output : true

//removing a value
firstNames.delete("ugali");


// console.log(firstNames)

// console.log(firstNames.size)


//iterating through a set
// for (let num of firstNames) {
//     console.log(num)
// };

// console.log(firstNames)


firstNames.clear()
console.log(firstNames)