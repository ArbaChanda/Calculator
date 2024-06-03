document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('.input');
    const numbers = document.querySelectorAll('.number');
    const symbols = document.querySelectorAll('.symbol');
    const equals = document.querySelector('.equals');
    const clear = document.querySelector('.clear');

    let currentInput = '';
    let firstOperand = null;
    let operator = null;

    // Handle number clicks
    numbers.forEach(number => {
        number.addEventListener('click', () => {
            currentInput += number.textContent;
            input.textContent = currentInput;
        });
    });

    // Handle operator clicks
    symbols.forEach(symbol => {
        symbol.addEventListener('click', () => {
            if (currentInput !== '') {
                if (firstOperand === null) {
                    firstOperand = parseFloat(currentInput);
                } else if (operator) {
                    firstOperand = calculate(firstOperand, parseFloat(currentInput), operator);
                }
                operator = symbol.textContent;
                currentInput = '';
                input.textContent = operator;
            }
        });
    });

    // Handle equals click
    equals.addEventListener('click', () => {
        if (firstOperand !== null && operator !== null && currentInput !== '') {
            const result = calculate(firstOperand, parseFloat(currentInput), operator);
            input.textContent = result;
            currentInput = '';
            firstOperand = null;
            operator = null;
        }
    });

    // Handle clear click
    clear.addEventListener('click', () => {
        currentInput = '';
        firstOperand = null;
        operator = null;
        input.textContent = '';
    });

    // Function to perform calculations
    function calculate(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case 'x':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
});
