// function getAcademicStage(age) {
//     switch (age) {
//         case 5:
//             return "Year 1";
//         case 6:
//             return "Year 2";
//         case 7:
//             return "Year 3";
//         case 8:
//             return "Year 4";
//         case 9:
//             return "Year 5";
//         case 10:
//             return "Year 6";
//         case 11:
//             return "Year 7";
//         case 12:
//             return "Year 8";
//         case 13:
//             return "Year 9";
//         case 14:
//             return "Year 10";
//         case 15:
//             return "Year 11";
//         case 16:
//             return "Year 12 (Sixth Form)";
//         case 17:
//             return "Year 13 (Sixth Form)";
//         case 18:
//         case 19:
//         case 20:
//         case 21:
//         case 22:
//             return "University";
//         default:
//             if (age < 5) {
//                 return "Too young for Year 1";
//             } else {
//                 return "Beyond standard education path";
//             }
//     }
// }

// // Example usage
// let studentAge = 14;
// let academicStage = getAcademicStage(studentAge);
// console.log(`The student is in: ${academicStage}`);



function getAcademicStage(age) {
    switch (age) {
        case 5:
            console.log("The student is in: Year 1");
            break;
        case 6:
            console.log("The student is in: Year 2");
            break;
        case 7:
            console.log("The student is in: Year 3");
            break;
        case 8:
            console.log("The student is in: Year 4");
            break;
        case 9:
            console.log("The student is in: Year 5");
            break;
        case 10:
            console.log("The student is in: Year 6");
            break;
        case 11:
            console.log("The student is in: Year 7");
            break;
        case 12:
            console.log("The student is in: Year 8");
            break;
        case 13:
            console.log("The student is in: Year 9");
            break;
        case 14:
            console.log("The student is in: Year 10");
            break;
        case 15:
            console.log("The student is in: Year 11");
            break;
        case 16:
            console.log("The student is in: Year 12 (Sixth Form)");
            break;
        case 17:
            console.log("The student is in: Year 13 (Sixth Form)");
            break;
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
            console.log("The student is in: University");
            break;
        default:
            if (age < 5) {
                console.log("Too young for Year 1");
            } else {
                console.log("Beyond standard education path");
            }
            break;
    }
}

// Example usage:
let studentAge = 6;
getAcademicStage(studentAge);
