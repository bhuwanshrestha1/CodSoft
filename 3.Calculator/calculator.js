
let displayValue = "0";
let pendingValue = null;
let operator = null;

const display = document.getElementById("display");

function updateDisplay() {
    display.innerText = displayValue;
}

function inputNumber(num) {
    if (displayValue === "0") {
        displayValue = num.toString();
    } else {
        displayValue += num.toString();
    }
    updateDisplay();
}

function inputOperator(op) {
    if (pendingValue === null) {
        pendingValue = parseFloat(displayValue);
    } else if (operator) {
        calculate();
    }
    operator = op;
    displayValue = "0";
}

function calculate() {
    if (operator && pendingValue !== null) {
        const currentValue = parseFloat(displayValue);
        switch (operator) {
            case "+":
                pendingValue += currentValue;
                break;
            case "-":
                pendingValue -= currentValue;
                break;
            case "*":
                pendingValue *= currentValue;
                break;
            case "/":
                pendingValue /= currentValue;
                break;
        }
        displayValue = pendingValue.toString();
        operator = null;
    }
    updateDisplay();
}

function calculateResult() {
    calculate();
    pendingValue = null;
}

function clearDisplay() {
    displayValue = "0";
    pendingValue = null;
    operator = null;
    updateDisplay();
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1) || "0";
    updateDisplay();
}
