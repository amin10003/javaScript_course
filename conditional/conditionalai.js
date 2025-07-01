function getAcademicStage(age) {
    
    if (age === 5) {
        return "Year 1";
    } else if (age === 6) {
        return "Year 2";
    } else if (age === 7) {
        return "Year 3";
    } else if (age === 8) {
        return "Year 4";
    } else if (age === 9) {
        return "Year 5";
    } else if (age === 10) {
        return "Year 6";
    } else if (age === 11) {
        return "Year 7";
    } else if (age === 12) {
        return "Year 8";
    } else if (age === 13) {
        return "Year 9";
    } else if (age === 14) {
        return "Year 10";
    } else if (age === 15) {
        return "Year 11";
    } else if (age === 16) {
        return "Year 12 (Sixth Form)";
    } else if (age === 17) {
        return "Year 13 (Sixth Form)";
    } else if (age >= 18 && age <= 22) {
        return "University";
    } else if (age < 5) {
        return "Too young for Year 1";
    } else {
        return "Beyond standard education path";
    }

   
}

 //Example usage:
let studentAge = 17;
 let academicStage = getAcademicStage(studentAge);
 console.log(`The student is in: ${academicStage}`);


// const age = 3;
// const academicStage = getAcademicStage(studentAge);
// console.log("the student is in: ${academicStage}");

// const age = 3;
// const academicStage = getAcademicStage(age);
// console.log(`the student is in: ${academicStage}`);