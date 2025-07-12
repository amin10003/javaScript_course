// let motherPromise = new Promise((resolve, reject) => {
//     let boyBehave = false;

//     if(boyBehave === true) {
//         resolve("Mom buys an Iphone");
//     } else {
//         reject("Mom will not buy an Iphone");
//     }
// });


// let fathersPromise = motherPromise.then((momMessage) => {
//     console.log(momMessage);
//     return "here is the simcard"
//     }).catch((error) => {
//         console.log("my dream is shuttered");
// });
// console.log(fathersPromise)




// let checkCoffeeBeans = new Promise((resolve, reject) => {
//     let hasCoffeeBeans = false; // Change to false to test rejection

//     if (hasCoffeeBeans) {
//         resolve("✅ We have coffee beans. Ready to make coffee!");
//     } else {
//         reject("❌ No coffee beans. Can't make coffee.");
//     }
// });

// checkCoffeeBeans
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.log(error);
//     });























let motherPromise = new Promise((resolve, reject) => {
    let boyBehave = true;

    if (boyBehave === true) {
        resolve("Mom: I will buy you an iPhone.");
    } else {
        reject("Mom: No iPhone unless you behave.");
    }
});

motherPromise.then((momMessage) => {
    console.log(momMessage);

    let fatherPromise = new Promise((resolve, reject) => {
        let momBoughtIphone = true;

        if (momBoughtIphone === true) {
            resolve("Dad: Since mom bought you an iPhone, I’ll buy you a SIM card.");
        } else {
            reject("Dad: No iPhone, no SIM card.");
        }
    });

    return fatherPromise;

}).then((dadMessage) => {
    console.log(dadMessage);

    let sisterPromise = new Promise((resolve, reject) => {
        let dadBoughtSim = true;

        if (dadBoughtSim === true) {
            resolve("Sister: Since dad bought you a SIM card, I’ll buy you a phone cover.");
        } else {
            reject("Sister: No SIM card, no phone cover.");
        }
    });

    return sisterPromise;

}).then((sisterMessage) => {
    console.log(sisterMessage);
    console.log("Boy: Yaaay! I got everything I need.");
}).catch((errorMessage) => {
    console.log(errorMessage);
});

