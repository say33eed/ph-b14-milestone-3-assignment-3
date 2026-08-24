function filterActiveUsers(users) {

    //console.log(users);

    //hasIsActive(users);
    //console.log(hasIsActive);
    //console.log(hasIsActive(users));

    //return hasIsActive;
    if (!Array.isArray(users) ||
        users.length === 0) {
        return "Invalid";
    }


    // let hasIsActive = users => {

    //     // return true;
    // };

    // // if(!hasIsActive(users)){
    // //     return "Invalid";
    // // }

    for (let user of users) {
        //console.log(user);
        if (user === null ||
            typeof user !== "object" ||
            !Object.hasOwn(user, "isActive") ||
            typeof user.isActive !== "boolean"
            ){
        return "Invalid";
        }

    }





    return users.filter(user => user.isActive);

}

// console.log(filterActiveUsers([
//  {name:"A", isActive:true},
//  {name:"B", isActive:false},
//  {name:"D"}
// ]
// ))



// Is this invalid?
// [
//  {name:"A", isActive:true},
//  {name:"B", isActive:false},
//  {name:"D"}
// ]