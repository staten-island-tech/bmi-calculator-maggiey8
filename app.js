const height = Number(prompt("enter your height (in)"));
const weight = Number(prompt("enter your weight (lb)"));

function getBMI(x, y) {
    console.log(y/(x*x)*703);
}


/* function check (x) {
    if (x <= 10) {
        console.log("small");
    }
    else if(x > 10){
        console.log("large number");
    } 
    else {
        console.log("error");72
    }
    }

check(10);

function otherTest(x,y) {
    if (x < 10 && y < 10) {
        console.log("small numbers");
    }
    else if (x > 10 || y > 10) {
        console.log("some large numbers");
    }
    else {
        console.log("all large numbers");
    }
} */

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
    else if (z => 30) {
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

init();