function studentIntroduction(student) {

    if( student === null ||
        typeof student !== "object" ||
        !Object.hasOwn(student, "name") ||
        !Object.hasOwn(student, "age") ||
        !Object.hasOwn(student, "course")){
        return "Invalid";
    }

    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`;
    
}

// console.log(studentIntroduction({
//   name: "Rafi",
//   age: 18,
//   course: "JavaScript"
// }))