const persons = [
    {   firstName: "twig",
        lastName: "mcstick",
        height: 200,
        weight: 54,    
    },
    {   firstName: "norm",
        lastName: "conform",
        height: 190,
        weight: 78,
    },
    {   firstName: "brick",
        lastName: "mcthick",
        height: 150,
        weight: 91,
    } 
];

function getBMI(users) {
    let BMI = (users.weight/((users.height**2)/10000));
    return BMI;
}

function checkBMI(z) {
    if (z < 18.5) {
        console.log("Underweight");
    }
    else if (z < 25) {
        console.log("Healthy Weight");
    }
    else if (z >= 25){
        console.log("Overweight");
    }
    else
        console.log("ERROR");
}

function statement(users) {
    let BMI = Number(getBMI(users));
    console.log(`${users.firstName} ${users.lastName}`);
    console.log(`BMI: ${BMI}`);
    checkBMI(BMI);
    console.log("\n")
}


persons.forEach((el) => statement(el))
