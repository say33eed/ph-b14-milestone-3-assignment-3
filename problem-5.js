function generateLeaderboard(students) {

    if (!Array.isArray(students) ||
        students.length === 0) {
        return "Invalid"
    }




    for (const student of students) {
        //console.log(student);
        if (student === null ||
            typeof student !== "object" ||
            !Object.hasOwn(student, "name") ||
            typeof student.name !== "string" ||
            !Object.hasOwn(student, "score") ||
            !Number.isFinite(student.score)){
            return "Invalid";
        }
    }




    // let hasNameScore = students => {

    //     return true;
    // };

    // if(!hasIsActive(users)){
    //     return "Invalid";
    // }



    // for(let student of students){
    //     if(!Number.isFinite(student.score)){
    //         return "Invalid";
    //     }
    // }


    const qualified = students.filter(student => student.score >= 70);
    //console.log(qualified);

    const leaderBoard = [];
    for(let i = 0; i < qualified.length; i++){
        leaderBoard.push(qualified[i].name.toUpperCase());
    }

    return leaderBoard.slice(0, 3);

    //const names = qualified.map(name => name.toUpperCase());

    //return names.slice(0, 2);


}

// console.log(generateLeaderboard([{name:"Rafi",score:90},{name:"Sadia",score:65},{name:"Karim",score:85},{name:"Nafis",score:75}]));
// console.log(generateLeaderboard([{name:"A",score:70},{name:"B",score:71}]));
