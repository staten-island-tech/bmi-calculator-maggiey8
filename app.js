const height = Number(prompt("enter your height (cm)"));
const weight = Number(prompt("enter your weight (kg)"));
const user = prompt("Enter your name");

function getBMI(x, y) {
    const BMI = (y/((x*x)/10000));
    console.log(BMI)
}

getBMI(height, weight)

function checkBMI(z) {
    if (z < 18.5) {
        console.log("Underweight");
    }
    else if (z < 25) {
        console.log("Healthy Weight");
    }
    else if (z < 30) {
        console.log("Overweight");
    }
    else {
        console.log("Obesity");
    }
}
    
checkBMI((y/((x*x)/10000)));

/* function init() {
//get value for weight and height
//get bmi 
    let BMI = Number(getBMI(height, weight));

}

console.log(user)
init(); */