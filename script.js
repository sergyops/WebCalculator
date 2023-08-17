let num1 = 0;
let num2 = 0;
let total = 0;
let operator;

function clearScreen() {
    document.getElementById("screen").innerHTML = "";
}

function buttons(value) {

    document.getElementById("screen").innerHTML += value;

}

function calcOperator(opval) {

    num1 = Number(document.getElementById("screen").innerHTML);
    clearScreen();

    operator = opval;

}

function equals() {

    num2 = Number(document.getElementById("screen").innerHTML);
    clearScreen();

    switch (operator) {
        case "+":
            total = num1 + num2;
            break;
        case "-":
            total = num1 - num2;
            break;
        case "x":
            total = num1 * num2;
            break;
        case "/":
            total = num1 / num2;
        default:
            alert("ERROR");
            break;
    }

    document.getElementById("screen").innerHTML = total;

}

function clearCalc() {

    clearScreen();
    num1 = 0;
    num2 = 0;
    total = 0;
    operatorr = "";

}