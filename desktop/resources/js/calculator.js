let result = '';

function appendToResult(value) {
    result += value;
    document.getElementById('calculator-screen').textContent = result;
}

function clearResult() {
    result = '';
    document.getElementById('calculator-screen').textContent = result;
}

function calculate() {
    try {
        result = eval(result.replace(/x/g, '*'));
        document.getElementById('calculator-screen').textContent = result;
    } catch (error) {
        result = '';
        document.getElementById('calculator-screen').textContent = 'ERROR';
    }
}