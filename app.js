const height = Number(prompt("enter your height (cm)"));
const weight = Number(prompt("enter your weight (kg)"));
const user = prompt("Enter your name");

function getBMI(x, y) {
    const BMI = (y/((x*x)/10000));
    console.log(BMI)
}

function checkBMI(z) {
    if (z < 18.5) {
        console.log("Underweight");
    }
    else if (18.5 <= z && z < 25) {
        console.log("Healthy Weight");
    }
    else if (25 <= z && z < 30) {
        console.log("Overweight");
    }
    else if (z >= 30) {
        console.log("Obesity");
    }
    else {
        console.log("error")
    }
}
    

function init() {
//get value for weight and height
//get bmi 
    let BMI = Number(getBMI(height, weight));
    checkBMI(BMI);
}

console.log(user)
init();