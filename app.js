const height = Number(prompt("enter your height (in)"));
const weight = Number(prompt("enter your weight (lb)"));

function calc(x, y) {
    console.log(y/(x*x)*703);
}

calc(height, weight);