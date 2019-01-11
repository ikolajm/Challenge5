let in1 = document.querySelector('#input1');
let in2 = document.querySelector('#input2');
let result = document.querySelector('.result');

function add() {
    let answer = Number(in1.value) + Number(in2.value);
    result.textContent = answer;
}

function subtract() {
    let answer = Number(in1.value) - Number(in2.value);
    result.textContent = answer;
}

function divide() {
    let answer = Number(in1.value) / Number(in2.value);
    result.textContent = answer;
}

function multiply() {
    let answer = Number(in1.value) * Number(in2.value);
    result.textContent = answer;
}

function modulo() {
    let answer = Number(in1.value) % Number(in2.value);
    result.textContent = answer;
}