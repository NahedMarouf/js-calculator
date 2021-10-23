let equla = document.getElementById('=');
equla.addEventListener('click', function () {
    let input = document.getElementById('result');
    let expresion = input.value.toString();

    if (expresion === '') {
        input.value = 0;
    } else {
        input.value = eval(expresion);
    }
});
//
let clear = document.getElementById('C');
clear.addEventListener('click', function () {
    let input = document.getElementById('result');
    input.value = "";
});
let clearOne = document.getElementById('CE');
clearOne.addEventListener('click', function () {
    let input = document.getElementById('result');
    let split = input.value.split('');
    let length = split.length;
    input.value = input.value.replace(split[length - 1], '');
});
let numbers = document.getElementsByClassName('num');
for (let x of numbers) {
    x.addEventListener('click', function (event) {
        let input = document.getElementById('result');
        input.value += x.id;
    })
}

let submit = document.getElementById('submit');
submit.addEventListener('click', function (e) {
    e.preventDefault();
    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let toConvert = document.getElementById('toConvert').value;
    let convertResult = document.getElementById('convertResult');
    if (from === 'usd' && to === 'eur') {
        convertResult.value = toConvert * 0.856;
    } else if (from === 'usd' && to === 'jod') {
        convertResult.value = toConvert * 0.709;
    } else if (from === 'usd' && to === 'nis') {
        convertResult.value = toConvert * 3.22;
    } else if (from === 'eur' && to === 'usd') {
        convertResult.value = toConvert * 1.17;
    } else if (from === 'eur' && to === 'jod') {
        convertResult.value = toConvert * 0.829;
    } else if (from === 'eur' && to === 'nis') {
        convertResult.value = toConvert * 3.75;
    } else if (from === 'jod' && to === 'eur') {
        convertResult.value = toConvert * 1.21;
    } else if (from === 'jod' && to === 'usd') {
        convertResult.value = toConvert * 1.41;
    } else if (from === 'jod' && to === 'nis') {
        convertResult.value = toConvert * 4.55;
    } else if (from === 'nis' && to === 'usd') {
        convertResult.value = toConvert * 0.31;
    } else if (from === 'nis' && to === 'eur') {
        convertResult.value = toConvert * 0.266;
    } else if (from === 'nis' && to === 'jod') {
        convertResult.value = toConvert * 0.22;
    } else {
        convertResult.value = toConvert;
    }
});
